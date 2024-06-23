import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  navList:any = [
  {
    title:'Home',
    url:''
  },
  {
    title:'Product1',
    url:'/product1'
  },
  {
    title:'Product2',
    url:'/product2'
  },
]
  constructor(){}

  ngOnInit(): void {
   this.navList
  }
}
