import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() value: any;
  @Output() valueClicked = new EventEmitter<any>();
  public operators: string = '%X+-=';

  constructor() { }

  ngOnInit(): void {
  }

  addToExpression(value: any) {
    this.valueClicked.emit(value);
  }
}
