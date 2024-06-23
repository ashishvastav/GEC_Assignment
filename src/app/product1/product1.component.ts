import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipe/filter.pipe';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-product1',
    standalone: true,
    templateUrl: './product1.component.html',
    styleUrl: './product1.component.scss',
    imports: [RouterOutlet, RouterModule, FormsModule, FilterPipe, CommonModule]
})
export class Product1Component implements OnInit {

  productDetails:any = [
  {
    id: 1,
    pname:'Samsung',
    ptype: 'TV',
    describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque dolor soluta laborum provident, quos facere eveniet quia',
    btn: 'Click Me',
    link: '/samsung'
  },
  {
    id: 2,
    pname:'LG',
    ptype: 'TV',
    describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque dolor soluta laborum provident, quos facere eveniet quia',
    btn: 'Click Me',
    link: '/lg'

  },
  {
    id: 3,
    pname:'ONIDA',
    ptype: 'TV',
    describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque dolor soluta laborum provident, quos facere eveniet quia',
    btn: 'Click Me',
    link: '/onida'


  },
  {
    id: 4,
    pname:'VIDEOCON',
    ptype: 'TV',
    describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque dolor soluta laborum provident, quos facere eveniet quia',
    btn: 'Click Me',
    link: '/videocon'


  },
]
 searchtext:any;
  constructor(private activateRoutes:ActivatedRoute){}

  ngOnInit(): void {
    this.productDetails

    this.activateRoutes.paramMap.subscribe(res => {
      console.log(res);
    })
  }

}
