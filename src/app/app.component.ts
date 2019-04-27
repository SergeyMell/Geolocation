import {Component, OnInit} from '@angular/core';
import {JourneyService, Point} from './services/journey.service';

import {TraceLeg} from './interfaces/enture.interfaces';
import {TraceDecoderService} from './services/trace-decoder.service';
import {DataE} from './interfaces/enture.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mapdata: DataE[] = [
    {
      type: 'scattergeo',
    } as DataE
  ];

  pointFrom: Point;
  pointTo: Point;

  constructor(private journeyService: JourneyService,
              private traceDecoderService: TraceDecoderService) {

  }

  ngOnInit() {

  }

  pointAselected(event) {
    const coordinates = event.value.geometry.coordinates;
    this.pointFrom = {
      lat: coordinates[1],
      lng: coordinates[0]
    };
    this.buildTrace();
  }

  pointBselected(event) {
    const coordinates = event.value.geometry.coordinates;
    this.pointTo = {
      lat: coordinates[1],
      lng: coordinates[0]
    };
    this.buildTrace();
  }

  private buildTrace() {
    if (!this.pointFrom || !this.pointTo) {
      return;
    }

    this.journeyService.getJourney({
      from: this.pointFrom,
      to: this.pointTo
    })
      .subscribe(journey => {
        if (!journey['data']['trip']['tripPatterns'][0]) {
          return alert('Failed to build a route');
        }

        const newMapData = [];

        journey['data']['trip']['tripPatterns'][0].legs.forEach((leg: TraceLeg) => {
          const res = this.traceDecoderService.decodeTraceLeg(leg);
          newMapData.push(res);
        });
        this.mapdata = newMapData;
      });
  }


}
