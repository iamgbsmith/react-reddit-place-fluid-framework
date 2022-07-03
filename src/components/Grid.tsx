import React, { useEffect, useState } from 'react';

import { SharedMap } from 'fluid-framework';
import { TinyliciousClient } from '@fluidframework/tinylicious-client';
import { useRecoilValue } from 'recoil';
import { selectedColorAtom } from '../atoms/selectedColorAtom';
import styled from 'styled-components';
import Tile from './Tile';
import { Constants } from '../constants';

const GridWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const GridRow = styled.div`
  height: ${Constants.TILE_SIZE}px;
  margin: 0;
  padding: 0;
`

const client = new TinyliciousClient();

// Create a container schema with a SharedMap called "tiles"
const containerSchema = {
  initialObjects: { 
    tiles: SharedMap 
  }
};

const getFluidData = async () => {
  // Get the container from the Fluid service
  let container;
  // eslint-disable-next-line no-restricted-globals
  const containerId = location.hash.substring(1);
  if (!containerId) {
    console.log('No container id');
    ({ container } = await client.createContainer(containerSchema));
    const id = await container.attach();
    // Set the UUID for the container in the URI
    // eslint-disable-next-line no-restricted-globals
    location.hash = id;
  } else {
    ({ container } = await client.getContainer(containerId, containerSchema));
  }

  return container.initialObjects;
}

const Grid:React.FC = () => {

  const selectedColor = useRecoilValue(selectedColorAtom);

  // Obtain Fluid application data on startup
  const [tiles, setTiles] = useState<any | null>(null);
  useEffect(() => {
    getFluidData().then(data => {
      if (data) {
        setTiles(data.tiles);
      }
    });
  }, []);

  const [viewData, setViewData] = useState<any | null>(null);
  React.useEffect(() => {
    if (tiles) {
      // Sync Fluid data into view state
      const syncView = () => setViewData({ tiles: tiles });
      // Ensure sync runs at least once
      syncView();
      // Update state each time our map changes
      tiles.on('valueChanged', syncView);
      // Turn off SharedMap listener when component is unmounted
      return () => { 
        tiles.off('valueChanged', syncView) 
      }
    }
  }, [tiles])
  
  const gridItems: Array<any> = [];

  // Create the view
  if (viewData && viewData.tiles) {
    for (let rowIndex = 0; rowIndex < Constants.GRID_HEIGHT; rowIndex++) {
      gridItems[rowIndex] = [];
      for (let columnIndex = 0; columnIndex < Constants.GRID_WIDTH; columnIndex++) {
        // eslint-disable-next-line prefer-const
        let mapKey = rowIndex + ',' + columnIndex;
        // eslint-disable-next-line prefer-const
        let tileColor = viewData.tiles.get(mapKey) === undefined ? '#fff' : viewData.tiles.get(mapKey);
        const setTileColor = () => {
          tiles.set(mapKey, selectedColor);
        }
        gridItems[rowIndex].push(
          <Tile key={mapKey} color={tileColor} rowIndex={rowIndex} columnIndex={columnIndex} onClick={setTileColor} />   
        );
      }
    }
    return (
      <GridWrapper>
        {gridItems.map((rowItem, index) => {
          return <GridRow key={index} className='gridRow'>{rowItem}</GridRow>;
        })}
      </GridWrapper>
    )
  } else {
    return <div/>;
  }

}

export default Grid;
