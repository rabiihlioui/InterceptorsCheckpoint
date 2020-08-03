import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  chosenItem: Person

  constructor() { }

  ngOnInit() { }

  selectItem(id){
    this.chosenItem = id
  }

}
