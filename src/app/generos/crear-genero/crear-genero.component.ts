import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {primeraLetraMayuscula} from "../../utilidades/validadores/primeraLetraMayuscula";
import {generoCreacionDTO} from "../genero";
import {GenerosService} from "../generos.service";
import {parsearErroresApi} from "../../utilidades/utilidades";


@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  errores:string[]=[];

  constructor(private router: Router, private generosService: GenerosService) {
  }

  guardarCambios(genero: generoCreacionDTO) {
//... guardar los cambios
    this.generosService.crear(genero).subscribe(() => {
      this.router.navigate(['/generos']);
    }, error => this.errores=parsearErroresApi(error));


  }


}
