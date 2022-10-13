import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-name',
  templateUrl: './profil-name.component.html',
  styleUrls: ['./profil-name.component.scss']
})
export class ProfilNameComponent implements OnInit {

  bg:string =  '/src/assets/images/fourmis.jpeg';

  constructor() { }

  ngOnInit(): void {
  }

}


