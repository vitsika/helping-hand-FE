import { Component, OnInit } from '@angular/core';
import { nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navs_data: Item[] = nav_items
  isDisplayMobileNav : boolean = false

  constructor() { }

  ngOnInit(): void {
    console.log(this.navs_data);
    
  }
  /*Fonction pour afficher a partir du menu burger */
  handleDisplayMobileNav(){
    this.isDisplayMobileNav = !this.isDisplayMobileNav
  }

  handleCloseMobileNav(){
    this.isDisplayMobileNav = false
  }
}
