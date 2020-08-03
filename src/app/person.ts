export class Person {
    id: number;
    name: string;
    firstname: string;
    cin: number;
    job: string;
    path: string;
    age: string;
    constructor(id: number = 0,
                name: string = '',
                firstname: string = '',
                cin: number = 0,
                job: string = '',
                path: string = '',
                age: string = '') {
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.cin = cin;
      this.job = job;
      this.path = path;
      this.age = age;
    }
}
