//Angular imports
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

//material imports
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

//own imports
import { TableComponent } from "../table/table.component";
import { eCarsTop25_2022, ECarsData } from '../data/evs/e-cars directive typescript';


@Component({
    selector: 'app-evs-with-material',
    standalone: true,
    templateUrl: './evs-with-material.component.html',
    styleUrl: './evs-with-material.component.css',
    imports: [MatSlideToggleModule, MatTableModule , NgIf, TableComponent]
})
export class EvsWithMaterialComponent {
  @Input() evTop25: ECarsData[] = [];
  evTop25Data: ECarsData[] = eCarsTop25_2022;
  mode: string = "Material mode";
  displayedColumns: string[] = ['Rank', 'Model', 'Quantity', 'Change Quantity Percent'];
  dataSource = this.getData;

  changeMode(){
    if(this.mode === "Material mode"){
      this.mode = "Classic HTML and CSS mode";
    }else{
      this.mode = "Material mode";
    };
  };

  constructor(private getDataFromTable: TableComponent){}

  getData()  {
    this.getDataFromTable.getEvData()?.subscribe( (data) => {
      return data;
    })     
  }

  ngOnInit(){}

  ngOnDestroy(){}
}
