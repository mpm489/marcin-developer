import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

   ngOnInit(): void {
  }

  h3Schrift = [
    'El Pollo Loco',
    'Pokemon',
    'Quizapp',
    'Ring of Fire',
  ];

  pSchrift = [
    'Ein Jump and Run-Spiel',
    'API Projekt',
    ' JavaScript',
    'Angular Projekt',
  ];

  aLinks = [
    "modul-11/index.html",
    "modul-9/index.html",
    "Quizapp%20Blue/index.html",
    "Let's Go!"
  ];

  workImg =[
    'elpolo.jpeg',
    'pokemon.jpeg',
    'quizapp.jpeg',
    'karte.jpeg'
  ];

}
