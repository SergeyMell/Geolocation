import {Data, Datum} from 'plotly.js';

export interface TraceLeg {

  pointsOnLink: {
    length: number;
    points: string;
  };
  mode: string;
  distance: number;
  operator?: {
    name: string
  };
  line?: {
    id: string;
    publicCOde: string;
    autority: {
      name: string;
    }
  };
}



export interface DataE extends Data {
  lat?: Datum[];
  lon?: Datum[];
}
