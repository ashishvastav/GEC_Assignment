import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component {
  counter!: number;

  constructor(private _service:ServiceService){
    this._service.counter.subscribe(res => {
      this.counter = res;
    })
  }
increment(){
  this.counter++
  this._service.counter.next(this.counter,)
}
decrement(){
  this.counter--
    this._service.counter.next(this.counter)
}
}
