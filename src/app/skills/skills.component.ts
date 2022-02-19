import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

 ngOnInit(): void {
  }

  skillsImg = [
    'java script.png',
    'angular1.png',
    'Group 205.png',
    'Group 226.png',
    'Git-Icon-1788C 2.png',
    'Group 20.png',
    'icons8-rest-api-80 2.png',
    'java script.png',
    'icons8-database-52 2.png'
  ];

  skillsText = [
    ' Java script',
    'Angular',
    'HTML/CSS',
    'SCRUM',
    'Git',
    'Design Thinking',
    ' Rest API',
    'Test automation',
    'Databases'

  ]

}
