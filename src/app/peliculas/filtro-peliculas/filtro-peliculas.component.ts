import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private location:Location, private activatedRoute:ActivatedRoute) { }
  form: FormGroup

  generos=[
    {
     id:1,
     nombre:"Drama"
    },
    {
      id:2,
      nombre:"Acción"
    },
    {
      id:3,
      nombre:"Comedia"
    }
  ]
peliculas=[
  {titulo:'Spider-Man: Far From Home', enCines:false, proximosEstrenos:true, generos:[1,2], poster:"https://tmdbcdn.fun/sys/poster/7ihc1lhpjsds5uxryowl0e5ts-m.jpg"},
  {titulo:'Moana', enCines:true, proximosEstrenos:false, generos:[3], poster:"https://tmdbcdn.fun/sys/poster/gbv1ug809q72ocx1bvlax-m.jpg"},
  {titulo:'ONESHOT', enCines:false, proximosEstrenos:true, generos:[1,2], poster:"https://tmdbcdn.fun/sys/poster/epj4440flmbt6t5mtrzo7x7wu7-m.jpg"},


]

  peliculaOriginal=this.peliculas;
  formularioOriginal={
  titulo:'',
  generoId:0,
  proximosEstrenos:false,
  enCines:false,
}

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);
    this.form.valueChanges
  .subscribe(valores=>{
    this.peliculas=this.peliculaOriginal
    this.buscarPeliculas(valores)
    this.escribirParametrosBusquedaEnURL();
  })
  }
private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params)=>{
      var objeto:any={};

      if(params.titulo){
        objeto.titulo=params.titulo;
      }

      if(params.generoId){
        objeto.generoId=Number(params.generoId);

      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos=params.proximosEstrenos;

      }

      if(params.enCine){
        objeto.enCines=params.enCines;
      }
   this.form.patchValue(objeto);
    })
}

  private escribirParametrosBusquedaEnURL(){
    var queryStrings=[];
    var valoresFormulario=this.form.value;
    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`)
    }

    if(valoresFormulario.generoId!='0'){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`)
    }

    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }

    if(valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`)
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));



  }
  buscarPeliculas(valores:any){
    if(valores.titulo){
      this.peliculas=this.peliculas.filter(pelicula=>pelicula.titulo.indexOf(valores.titulo)!==-1);

    }
    if(valores.generoId!==0){
      this.peliculas=this.peliculas.filter(pelicula=>pelicula.generos.indexOf(valores.generoId)!==-1);
    }
    if(valores.proximosEstrenos){
      this.peliculas=this.peliculas.filter(pelicula=>pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas=this.peliculas.filter(pelicula=>pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}
