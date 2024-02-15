import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ECarsData } from './data-evs.service';
import { DataSource } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class NodeJsApiService {
  private urlForApi = "http://localhost:3000";

  public evTop25DS?: Observable<ECarsData[]>;
  
  constructor(private http: HttpClient) { }

  getApiData(): Observable<any> {
    return this.http.get(this.urlForApi + "/data")
  }

  createNewApiData(data: ECarsData){
    return this.http.post(this.urlForApi + "/data", data);
  }

/*
// DELETE route to delete data by ID
app.delete('/data/:id', (req, res) => {
  const id = req.params.id;
  const deletedData = dataArray.splice(id, 1);
  saveDataToFile();
  res.json(deletedData);
});
*/
  deleteFromApiData(rank: number){
    console.log('fra api service ' + rank);    
    return this.http.delete(this.urlForApi + "/data/" + rank)
  }

  updateUi(){
    this.getApiData().subscribe(
      (data) => {
       this.evTop25DS = data;   
      }
    )
  }



}
/*

// PUT route to update data by ID
app.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  dataArray[id] = newData;
  saveDataToFile();
  res.json(newData);
});
*/