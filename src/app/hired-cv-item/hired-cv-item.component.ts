import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Person } from '../person';
import { HiringService } from '../services/hiring.service';

@Component({
  selector: 'app-hired-cv-item',
  templateUrl: './hired-cv-item.component.html',
  styleUrls: ['./hired-cv-item.component.css']
})
export class HiredCvItemComponent implements OnInit,OnChanges {

  @Input() person: Person

  pic; name; firstName: string

  constructor(private hiringService: HiringService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    //this.pic = this.person.picture
    this.name = this.person.name
    this.firstName = this.person.firstname
  }

}
