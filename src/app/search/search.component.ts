import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-component',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  todoname = '';
  result = {};


  // HTTP Service Injection
  constructor(private http: Http) {
  }

  // Submit
  onclick() {
    let json;
    console.log('search click ' + this.todoname);
//    this.http.get('http://localhost:3000/users', {params: { name: this.todoname }})
    this.http.get('http://localhost:3000/users')
    .subscribe(
      response => { json = response.json();
                    // console.log(json);
                    // console.log(json[0].id + ' ' + json[0].name + ' ' + json[0].status + ' ' + json[0].flag + ' ' + json[0].enddate);
                    this.result = json;
                  },
      error => { this.result = `Error Occur: ${error.statusText}`;
                  console.log('Error Result'); }
    );
  }

}
