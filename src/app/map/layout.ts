import {Layout} from 'plotly.js';

export const layout: Partial<Layout> = {
  height: 700,
  width: 700,
  margin: {
    t: 0,
    b: 0,
    l: 0,
    r: 0
  },
  autosize: true,
  geo: {
    scope: 'europe',
    resolution: 50,
    lonaxis: {
      range: [3, 32]
    },
    lataxis: {
      range: [55, 70]
    },
    showrivers: true,
    rivercolor: '#fff',
    showlakes: true,
    lakecolor: '#fff',
    showland: true,
    landcolor: '#EAEAAE',
    countrycolor: '#d3d3d3',
    countrywidth: 1.5,
    subunitcolor: '#d3d3d3'
  }
};
