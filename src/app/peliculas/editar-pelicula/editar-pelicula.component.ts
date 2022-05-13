import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {parallel} from "@angular/cdk/testing";
import {PeliculaCreacionDTO, PeliculaDTO} from "../pelicula";

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) { }

  modelo:PeliculaDTO={titulo:'Spider-Man', 'trailer': 'abc', enCines:true, resumen:'cosa', fechaLanzamiento:new Date(),
    poster:'https://tmdbcdn.fun/sys/poster/fszmenvgdk8lib1p-m.jpg' }
  ngOnInit(): void {
  this.activeRouter.params.subscribe(params=>{
    //alert(params.id);
  });
  }

  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula)

  }

}
