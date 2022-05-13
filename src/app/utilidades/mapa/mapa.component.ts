import { Component, OnInit } from '@angular/core';
import {latLng, LeafletEvent, LeafletMouseEvent, marker, Marker, tileLayer} from "leaflet";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
options = {
	layers: [
		tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	],
	zoom: 14,
	center: latLng(4.643144272825798, -74.07543540000917)
};
  capas:Marker<any>[]=[];

  manejarClick(event:LeafletMouseEvent){
    const latitud=event.latlng.lat;
    const longitud=event.latlng.lng;
    console.log({latitud, longitud})

    this.capas=[];
    this.capas.push(marker([latitud, longitud]))
  }
}
