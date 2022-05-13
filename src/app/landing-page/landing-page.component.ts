import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      this.peliculasEnCines=[{
        titulo: 'Spider man',
        fechaLanzamiento: new Date(),

        precio: '300.99',
        poster:'https://tmdbcdn.fun/sys/poster/7ihc1lhpjsds5uxryowl0e5ts-m.jpg'
      },

        {
          titulo: 'Moana',
          fechaLanzamiento: new Date(),

          precio: 1399.99,
          poster:'https://tmdbcdn.fun/sys/poster/gbv1ug809q72ocx1bvlax-m.jpg'
        }

      ]

  }
  peliculasEnCines;
  peliculasEnEstreno=[];
}
