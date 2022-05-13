import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {actorCreacionDTO, actorDTO} from "../actor";

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  modelo:actorDTO={nombre:'Felipe', fechaNacimiento:new Date(), foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/220px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg'}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      //alert(params.id)
    })
  }
  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
  }

}
