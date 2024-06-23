import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-api-fetch',
  standalone: true,
  imports: [JsonPipe,AsyncPipe],
  templateUrl: './api-fetch.component.html',
  styleUrl: './api-fetch.component.scss'
})
export class ApiFetchComponent implements OnInit {

  fetchData:any;
  constructor(private _service:ServiceService){
   this.dataFetch()

  }

  ngOnInit(): void {
  }

  dataFetch(){
    this._service.apiFetch().pipe(take(1)).subscribe( res => {
      this.fetchData = res;
    // JSON.stringify(this.fetchData);
      console.log(this.fetchData)
    })
  }
}
