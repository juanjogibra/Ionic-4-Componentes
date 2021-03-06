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
    },
    {
      icon:"beaker",
      name: "Avatar",
      path: "/avatar"
    },
    {
      icon:"football",
      name: "Botones",
      path: "/botones"
    },
    {
      icon:"card",
      name: "Tarjetas",
      path: "/tarjetas"
    },
    {
      icon:"checkmark-circle-outline",
      name: "Checkbox",
      path: "/check"
    },
    {
      icon:"calendar",
      name: "Date-Time",
      path: "/date-time"
    },
    {
      icon:"car",
      name: "Fabs",
      path: "/fab"
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
