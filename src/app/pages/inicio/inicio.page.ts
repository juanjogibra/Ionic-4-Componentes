import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: "american-football",
      name: "Alert",
      path: "/alert"
    },
    {
      icon:"appstore",
      name: "Action-Sheet",
      path: "/action-sheet"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  path: string;
}
