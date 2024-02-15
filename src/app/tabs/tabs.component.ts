import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TableComponent } from '../table/table.component';
import { EvsWithMaterialComponent } from '../evs-with-material/evs-with-material.component';
import { FormComponent } from '../forms/form/form.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [ MatTabsModule, TableComponent, EvsWithMaterialComponent, FormComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
