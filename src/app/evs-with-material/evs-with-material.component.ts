//Angular imports
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

//material imports
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

//own imports
import { TableComponent } from "../table/table.component";
import { ECarsData } from '../data/evs/e-cars directive typescript';
import { DataEVsService } from '../services/data-evs.service';
import { DataSource } from '@angular/cdk/collections';
import { FormComponent } from "../forms/form/form.component";
import { NodeJsApiService } from '../services/node-js-api.service';


@Component({
    selector: 'app-evs-with-material',
    standalone: true,
    templateUrl: './evs-with-material.component.html',
    styleUrl: './evs-with-material.component.css',
    imports: [MatSlideToggleModule, MatTableModule, NgIf, TableComponent, FormComponent]
})
export class EvsWithMaterialComponent implements OnInit, OnDestroy {
  //evTop25DS?: DataSource<ECarsData>;
  evTop25DS?: DataSource<any>;
  mode: string = "Material mode";
  displayedColumns: string[] = ['Rank', 'Model', 'Quantity', 'Change-Quantity-Percent'];
  

  changeMode(){
    if(this.mode === "Material mode"){
      this.mode = "Classic HTML and CSS mode";
    }else{
      this.mode = "Material mode";
    };
  };

  constructor(private ev: DataEVsService, public api: NodeJsApiService){}



  ngOnInit(){
    //this.evTop25DS = new MatTableDataSource(this.ev.getEcars25())
    this.fetchData();
  }

  ngOnDestroy(){
    
  }

  async fetchData(){
    this.api.getApiData().subscribe(
      (data) => {
       this.api.evTop25DS = data;   
      }
    )
  }


}
