import React from 'react'
var Render = require('react-dom').render;
import FluxDetail from'./Components/index.js'


// Render FluxCartApp Controller View
Render(
  <FluxDetail />,
  document.getElementById('flux')
);