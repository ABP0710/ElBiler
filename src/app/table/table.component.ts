import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ECarsData, eCarsTop25_2022 } from '../data/evs/e-cars directive typescript';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, AsyncPipe, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit {
  evTop25$?:Observable<ECarsData[]> ;

  ngOnInit(): void {
    this.evTop25$ = of(eCarsTop25_2022);
  }
  
  getEvData(): Observable<Array<ECarsData>> | undefined {
    return this.evTop25$;
  }

  constructor(){}

}
