import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataEVsService, ECarsData } from '../services/data-evs.service';
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
    this.evTop25$ = of(this.ev.eCarsTop25_2022);
  }
  
  getEvData(): Observable<Array<ECarsData>> | undefined {
    return this.evTop25$;
  }

  constructor(public ev : DataEVsService){

  }

}
