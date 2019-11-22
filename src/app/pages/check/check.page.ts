import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = [
    { val: 'Partido Socialista', isChecked: false, color:"danger"},
    { val: 'Partido Popular', isChecked: false, color:"primary" },    
    { val: 'Vox', isChecked: false, color:"success" },
    { val: 'Unidas Podemos', isChecked: false, color:"tertiary" },
    { val: 'Ciudadanos', isChecked: true, color:"warning" },    
    { val: 'Mas Pais', isChecked: false, color:"secondary" }    
  ];

  onClick(check) {
console.log(check);
  }

}
