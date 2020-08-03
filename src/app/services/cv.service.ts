import { Injectable, OnInit } from '@angular/core';

import { Person } from '../person';
import { NgForm } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const API_LINK = 'https://immense-citadel-91115.herokuapp.com/api/personnes';

@Injectable({
  providedIn: 'root'
})
export class CvService implements OnInit {

  name: string

  getPersSubject = new Subject<Person>();

  showDetailsSubject = new Subject<boolean>();

  // pers = new Person(0,'','','',0,0,'','../../assets/images/developer.png','../../assets/images/coverDev.png')

  // pers1 = new Person(1,'Rabii','Hlioui','rabiihlioui@gmail.com',60,15786937,'Software Engineer','../../assets/images/rabiiHlioui.png','../../assets/images/coverRabii.png')
  // pers2 = new Person(2,'Lionel','Messi','lionelmessi@yahoo.fr',120,94557937,'Footballer','../../assets/images/lionelMessi.png','../../assets/images/coverLionel.png')
  // pers3 = new Person(3,'Emna','Mejri','mejriemna@yandex.com',30,63339411,'Secretary','../../assets/images/imenMejri.png','../../assets/images/coverImen.png')
  // pers4 = new Person(4,'Slimen','Labyedh','slimenfreud@hotmail.com',40,76945137,'Psychotherapist','../../assets/images/slimenLabyedh.png','../../assets/images/coverSlimen.png')

  cvList = [
    // this.pers,
    // this.pers1,
    // this.pers2,
    // this.pers3,
    // this.pers4
  ]

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getPersons().subscribe(
      (persons) => this.cvList = persons
    )
  }

  retrievePersById(id: number) {
    const long = this.cvList.length;
    for (let i = 0; i < long; i++) {
      if ( id == i ) {
        return this.cvList[i];
      }
    }
  }

  deleteFakeCv(id: number) {
    this.cvList.forEach(cv => {
      if ( cv.id == id ) {
        this.cvList.splice(this.cvList.indexOf(cv),1)
      }
    });
  }

  getCvDetails(id: number): any {
    this.cvList.forEach(cv => {
      if ( cv.id == id ) {
        return cv;
      }
    });
  }

  addFakeCV(person: Person) {
    person.id = this.cvList[this.cvList.length - 1].id + 1
    //person.picture = '../../assets/images/newPerson.png'
    this.cvList.push(person); 
  }

  getPersDetails(id: number) {
    this.getPersSubject.next(this.cvList[id])
  }

  showDetailsBlock(showFlag: boolean) {
    this.showDetailsSubject.next(showFlag)
  }

  getPersons(): Observable<Person[]>{
    return this.http.get<Person[]>(API_LINK);
  }

  addCV(person: Person) {
    const token = localStorage.getItem('loginToken')
    if (token) {
      const headers = new HttpHeaders().set('Authorization', token);
      return this.http.post(API_LINK, person, {headers});
    }
    return this.http.post(API_LINK, person);
  }

  deleteCv(id: number) {
    const token = localStorage.getItem('loginToken')
    let endPoint = '/'+id
    if (token) {
      const headers = new HttpHeaders().set('Authorization', token);
      return this.http.delete(API_LINK + endPoint, {headers});
    }
    // this.cvList.forEach(cv => {
    //   if ( cv.id == id ) {
    //     this.cvList.splice(this.cvList.indexOf(cv),1)
    //   }
    // });
  }

}
