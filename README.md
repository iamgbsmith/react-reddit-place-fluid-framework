# React Reddit Place Fluid Framework

A basic implementation of Reddit Place using React and Fluid Framework.

![Demo Preview](./demo-preview.gif?raw=true)

## What is Fluid Framework?

[Fluid Framework](https://fluidframework.com) from Microsoft is a collection of client libraries for distributing and synchronising shared state. These libraries allow multiple clients to simultaneously create and operate on shared data structures using coding patterns similar to those used to work with local data.

## Features

- [x] React 18
- [x] TypeScript
- [x] Fluid Framework for distributing and synchronising real-time shared state
- [x] Theming using Styled Components
- [x] Dark mode
- [x] Recoil for state management
- [ ] Fluid Framework state persisted across server restarts
- [ ] Progressive Web App
- [ ] Pixel resizing at runtime
- [ ] Save the grid tiles as an image

## Getting started

Clone the repo:

```shell
git clone https://github.com/iamgbsmith/react-reddit-place-fluid-framework
```

Build the app:

```shell
cd react-reddit-place-fluid-framework
yarn install
```

Star the server and client:

```shell
yarn start
```

Browse to the application at http://localhost:3000

To see application data updates in action, copy the full URL which will include a UUID from the address bar into a different browser window. With both windows open, select a different colour from the palette then click on a tile in the grid. You should see the tiles on the coloured grid being updated concurrently in both browser windows.

## Other details

Customisation of the application is easy.

### Changing the grid dimensions

Default size for the grid is 20 x 20 tiles. You can change the grid dimensions by updating the values for GRID_WIDTH and GRID_HEIGHT in `/src/constants.ts`. 

### Changing the tile size

Default tile size is 20px. You can change the tile size by updating the value for TILE_SIZE in `/src/constants.ts`. 

### Tinylicious server

This app uses Tinylicious which is a local, in-memory Fluid service intended for prototyping and development purposes. By default, Tinylicious runs on port 7070.
