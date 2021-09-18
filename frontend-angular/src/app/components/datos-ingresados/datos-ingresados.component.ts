import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-ingresados',
  templateUrl: './datos-ingresados.component.html',
  styleUrls: ['./datos-ingresados.component.css']
})
export class DatosIngresadosComponent implements OnInit {
  @Input() datos: any;
  public hayDatos: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.datos !== undefined) {
      this.hayDatos = true
    }
  }

}
