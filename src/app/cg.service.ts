import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CgService {

  constructor(private http: HttpClient) {}

  login(username, password) {

  }
  
  addItem(name, price, menu, description, status, order) {
    const uri = 'http://localhost:4000/country-gourmet/add';
    const obj = {
        name: name, 
        description: description, 
        order: order, 
        price: price, 
        menu: menu, 
        status: status
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  
  getElement(name) {
    const uri = 'http://localhost:4000/country-gourmet/element?name=' + name;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }  


  getItems() {
    const uri = 'http://localhost:4000/country-gourmet';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }  

  listItems(menu) {
    const uri = 'http://localhost:4000/country-gourmet/list/' + menu;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });

  }


  getBreakfast() {
    const uri = 'http://localhost:4000/country-gourmet/breakfast';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }  
  
  
  
  getLunch() {
    const uri = 'http://localhost:4000/country-gourmet/lunch';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }    

  getDinner() {
    const uri = 'http://localhost:4000/country-gourmet/dinner';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }  
  
  
  
  /*
  getDessert() {
    const uri = 'http://localhost:4000/cg/dessert';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }    
*/

  editItem(id) {
    const uri = 'http://localhost:4000/country-gourmet/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }


  updateItem(name, price, menu, description, status, order, id) {
    const uri = 'http://localhost:4000/country-gourmet/update/' + id;

    const obj = {
        name: name, 
        description: description, 
        order: order, 
        price: price, 
        menu: menu, 
        status: status
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }


  updateElement(name, value, id) {
    const uri = 'http://localhost:4000/country-gourmet/update_element/' + id;

    const obj = {
        name: name, 
        value: value
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  
  
  deleteItem(id) {
    const uri = 'http://localhost:4000/country-gourmet/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }


}
