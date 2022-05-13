import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {generoCreacionDTO} from "../genero";

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private router:Router) {

  }
  modelo:generoCreacionDTO={nombre:'Drama'}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      //alert(params.id)
    })
  }


  guardarCambios(genero: generoCreacionDTO){
//... guardar los cambios
    console.log(genero)
    this.router.navigate(['/generos'])
  }

}
