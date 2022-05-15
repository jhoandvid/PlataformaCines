import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import {generoDTO} from "../genero";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css'],
})
export class IndiceGenerosComponent implements OnInit {
  constructor(private generosService: GenerosService) {}

  generos:generoDTO[];
  columnasAMostrar=['id','nombre','acciones'];
  cantidadTotalRegistros;
  paginaActual=1;
  cantidadRegistrosAMostrar=10;


  ngOnInit(): void {
    this.generosService.obtenerTodos()
      .subscribe((respuesta: HttpResponse<generoDTO[]>)=>{
        this.generos=respuesta.body;
      console.log(respuesta.headers.get("cantidadTotalRegistros"))
      this.cantidadTotalRegistros=respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  }
}
