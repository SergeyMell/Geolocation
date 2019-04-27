import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild} from '@angular/core';
import {newPlot, plot, PlotData} from 'plotly.js';

import {layout} from './layout';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnChanges {

  @ViewChild('map') mapRef: ElementRef;

  @Input('data') data: Partial<PlotData>[] = [{
    type: 'scattergeo',
  }];

  constructor() {
  }

  ngOnChanges(): void {
    newPlot(this.mapRef.nativeElement.id, this.data, layout);
  }

  ngAfterViewInit(): void {
    newPlot(this.mapRef.nativeElement.id, this.data, layout);
  }

}
