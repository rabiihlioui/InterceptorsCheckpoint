import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { NgForm } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor(
    private router: Router,
    private cvService: CvService
  ) { }

  ngOnInit() {
  }

  addFakeCV(person: Person) {
    this.cvService.addCV(person);
    this.router.navigate(['cv'])
  }

  addCV(person: Person) {
    this.cvService.addCV(person).subscribe(
      (success) => this.router.navigate(['cv'])
    )
  }

}
