import {Component, Input, OnInit} from '@angular/core';
import {MultipleSelectorModel} from "./MultipleSelectorModel";

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {

  constructor() { }
@Input()
seleccionados:MultipleSelectorModel[]=[];

@Input()
NoSeleccioandos:MultipleSelectorModel[]=[];

  ngOnInit(): void {
  }

  seleccionar(item:MultipleSelectorModel, index:number){
    this.seleccionados.push(item);
    this.NoSeleccioandos.splice(index,1);
  }

  deseleccionar(item:MultipleSelectorModel, index:number){
    this.NoSeleccioandos.push(item);
    this.seleccionados.splice(index,1);
  }
seleccionarTodo(){
    this.seleccionados.push(...this.NoSeleccioandos);
    this.NoSeleccioandos=[];
}


deseleccionarTodo(){
this.NoSeleccioandos.push(...this.seleccionados);
this.seleccionados=[];
}
}
