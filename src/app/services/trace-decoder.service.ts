import {Injectable} from '@angular/core';
import {TraceLeg} from '../interfaces/enture.interfaces';
import {DataE} from '../interfaces/enture.interfaces';
import {decode} from '../utils/polyline.decoder';

@Injectable({
  providedIn: 'root'
})
export class TraceDecoderService {

  COLOR_DICT = {
    foot: 'red',
    bus: 'orange',
    tram: 'green',
    rail: 'lightgreen',
    air: 'blue',
  };

  decodeTraceLeg(traceLeg: TraceLeg): DataE {
    const traceColor: string = this.COLOR_DICT[traceLeg.mode] || 'black';
    const polyLine: string = traceLeg.pointsOnLink.points;
    const points = decode(polyLine);
    return {
      type: 'scattergeo',
      lat: points.map(p => p.latitude),
      lon: points.map(p => p.longitude),
      mode: 'lines',
      xaxis: '',
      name: [traceLeg.mode, (traceLeg.operator && traceLeg.operator.name)].filter(el => !!el).join(': '),
      line: {
        width: 3,
        color: traceColor
      }
    };
  }
}
