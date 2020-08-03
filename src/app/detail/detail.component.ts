import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Person } from '../person';
import { HiringService } from '../services/hiring.service';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() person: Person

  pers: Person

  cover: string

  showDetails = true;

  constructor(
    private hiringService: HiringService,
    private router: Router,
    private cvService: CvService
    ) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.cvService.showDetailsSubject.subscribe(
      (showFlag) => this.showDetails = showFlag
    )
    this.cvService.getPersSubject.subscribe(
      (pers) => this.pers = pers
    )
  }

  hireCv() {
    this.hiringService.showHiringBlock(false);
    this.hiringService.hireCv(this.pers)
  }

  goToCvDetails() {
    this.router.navigate(['this.pers.id/cvDetails', this.pers.id])
  }

}
