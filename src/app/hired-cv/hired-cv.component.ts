import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Person } from '../person';
import { HiringService } from '../services/hiring.service';

@Component({
  selector: 'app-hired-cv',
  templateUrl: './hired-cv.component.html',
  styleUrls: ['./hired-cv.component.css']
})
export class HiredCvComponent implements OnInit, OnChanges {

  @Input() person: Person

  pers: Person

  cvs = []

  showHiringCVs = true

  constructor(private hiringService: HiringService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.hiringService.showHiringSubject.subscribe(
      (showFlag) => {
        this.showHiringCVs = showFlag
        this.cvs = this.hiringService.getHiredCvs()
      }
    )
  }

  unhireCv(id: number) {
    this.hiringService.unhireCv(id)
  }

  unhireAllCvs() {
    this.showHiringCVs = true
    this.hiringService.unhireAllCvs()
  }

}
