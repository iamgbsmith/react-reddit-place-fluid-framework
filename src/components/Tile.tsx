import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Constants } from '../constants';

const TileWrapper = styled.div<{color?: string}>`
  display: inline-block;
  height: ${Constants.TILE_SIZE}px;
  width: ${Constants.TILE_SIZE}px;
  margin: 0;
  padding: 0;
  background-color: ${props => props.color};
  &:hover {
    height: ${Constants.TILE_SIZE}px;
    width: ${Constants.TILE_SIZE}px;
    border: 1px solid darkgray;
  }
`

type TileProps = {
  color: string;
  rowIndex: number;
  columnIndex: number;
  onClick: MouseEventHandler;
}

const Tile = ({ color, rowIndex, columnIndex, onClick }: TileProps) => {
  return (
    <TileWrapper key={rowIndex + ',' + columnIndex} color={color} onClick={onClick} />
  )
}

export default Tile;
