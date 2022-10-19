import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  navs_data: Item[] = nav_items

  @Output() close: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
/* Femeture du menu burger apres avoir cliquer sur le lien */
  handleClose(){
    this.close.emit()
  }
}
