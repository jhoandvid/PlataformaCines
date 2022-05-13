import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {parallel} from "@angular/cdk/testing";

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  this.activeRouter.params.subscribe(params=>{
    //alert(params.id);
  });
  }

}
