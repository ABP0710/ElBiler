import { Component, OnInit } from '@angular/core';
import { IForm } from '../../interfaces/iform';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule, MinLengthValidator } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ECarsData } from '../../services/data-evs.service';
import { NodeJsApiService } from '../../services/node-js-api.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  formData!: FormGroup;
  deleteForm!: FormGroup;

  constructor(private api: NodeJsApiService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      rank: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      quantity:new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      changeQuantityPercent: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
    })
    this.deleteForm = new FormGroup({
      deleteRank: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    })
  }

  dataArray: IForm[] = [];

  deleteByRank(){
    this.api.deleteFromApiData(this.deleteForm.get('deleteRank')?.value);
    this.api.updateUi();
  }

  submitForm(): void {
    this.addData(this.formData.value)
    this.api.updateUi();
  }

  addData(data: ECarsData) {
    this.api.createNewApiData(data).subscribe(
      (car) => {
        console.log(car);
      }, (error) => {
        console.error(error);
      }
    )
  }
}
