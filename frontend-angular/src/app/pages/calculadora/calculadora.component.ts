import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/services/backend.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public result: string = "0"
  public botones: any = [['7','8','9','X'],['4','5','6','-'],['1','2','3','+']]
  public division: string = '%'
  public cero: string = '0'
  public datos: any
  public verDatosIngresados: boolean = false

  constructor(private backendService: BackendService, private router: Router) { }

  public getDatos() {
    this.backendService.getDatos().subscribe(
      res => {
        this.datos = res;
      },
      err => {
        this.router.navigateByUrl('/error');
      }
    )
  }

  public verDatos() {
    this.getDatos()
    this.verDatosIngresados = this.verDatosIngresados ? false : true
  }

  public addToExpression(data: string): void {
    if(this.result == '0') {
      this.result = data;
    } else {
      this.result += data
    }
  }

  public resetData(): void {
    this.result = '0'
  }

  public setResult(): void {
    this.verDatosIngresados = false
    let datoPost = {
      dato: this.result
    }

    this.backendService.postDato(datoPost).subscribe(
      res => {
        this.result = this.operation(this.result)  
      }, 
      err => {
        this.router.navigateByUrl('/error');
      }
    )
  }

  private indexOperator(string: any, operator: any) {
    let tmp;
    if(string.indexOf(operator) != -1) {
      return tmp = string.split(operator);
    } 

    return tmp;
  }

  private operation(string: any) : string{
    let tmp = "";

    if(this.indexOperator(string, "%")){
      tmp = this.indexOperator(string, "%")
      return (parseInt(tmp[0]) / parseInt(tmp[1])).toString();
    }

    if(this.indexOperator(string, "X")) {
      tmp = this.indexOperator(string, "X") 
      return (parseInt(tmp[0]) * parseInt(tmp[1])).toString();
    }

    if(this.indexOperator(string, "+")) {
      tmp = this.indexOperator(string, "+")
      return (parseInt(tmp[0]) + parseInt(tmp[1])).toString();
    }

    if(this.indexOperator(string, "-")) {
      tmp = this.indexOperator(string, "-")
      return (parseInt(tmp[0]) - parseInt(tmp[1])).toString();
    }

    return '';
  }
}


