import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { EvsWithMaterialComponent } from "./evs-with-material/evs-with-material.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent, EvsWithMaterialComponent]
})
export class AppComponent {
  title = 'ElBiler';
}
