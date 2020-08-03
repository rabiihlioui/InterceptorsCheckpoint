import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Person } from '../person';
import { leave } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css']
})
export class CvDetailsComponent implements OnInit {

  id: number;

  pers: Person;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cvService: CvService
  ) { }

  ngOnInit() {
    document.querySelectorAll('input').forEach(element => {
      element.setAttribute('readonly', 'readonly');
    });
    this.id = this.activatedRoute.snapshot.params['id']
    this.getCvDetails()
  }

  deleteCV() {
    console.log(this.id)
    this.cvService.deleteCv(this.id).subscribe(
      (data) => console.log(data)
    )
    this.router.navigate(['cv'])
  }

  getCvDetails() {
    this.cvService.cvList.forEach(cv => {
      if ( cv.id == this.id ) {
        this.pers = cv;
      }
    });
  }

}
