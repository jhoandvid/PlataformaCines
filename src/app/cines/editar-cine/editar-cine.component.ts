import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {cineCreacionDTO, cineDTO} from "../cine";

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private activeRouter:ActivatedRoute) { }
modelo:cineDTO= {nombre:"sambil", latitud:4.6420334715275136, longitud:-74.07342910766603}

  ngOnInit(): void {
    this.activeRouter.params.subscribe(params=>{
      //alert(params.id);
    })
  }

  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
  }

}
