import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatTable} from "@angular/material/table";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control:FormControl=new FormControl();
  actores=[
    {nombre:'Tom Holland', personaje:'',foto: 'https://thumbs.dreamstime.com/b/tom-holland-premiere-disney-marvel-s-avengers-infinity-war-held-el-capitan-theatre-hollywood-usa-april-116593368.jpg'},
    {nombre:'Anthony Edward Stark',personaje:'', foto: 'https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg'},
    {nombre:'Johnny Depp',personaje:'', foto: 'https://imagenes.elpais.com/resizer/kD12AYvmoyrorRlHxdYPh9xHJZ8=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UFSYVNQ7GWQUWZQWWI765EIHWA.jpg'}]


  actoresOriginal=this.actores;

  actoresSeleccionados=[];
  columnasAMostrar=['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table:MatTable<any>

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor=>{
      this.actores=this.actoresOriginal;
      this.actores=this.actores.filter(actor=>actor.nombre.indexOf(valor)!==-1);
    })
  }

  optionSelected(event:MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table!==undefined){
      this.table.renderRows();
    }
  }
  eliminar(actor){
    const indice=this.actoresSeleccionados.findIndex(a=>a.nombre===actor.nombre);
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }
  finalizaArrastre(event:CdkDragDrop<any[]>){
    const indicePrevio=this.actoresSeleccionados.findIndex(actor=>actor===event.item.data)
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }
}
