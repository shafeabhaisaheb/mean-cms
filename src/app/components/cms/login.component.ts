import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component..scss']
})
export class LoginComponent implements OnInit {

  loginData = { username:'', password:'' };
  message = '';
  data: any;
  angForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { 
  	this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
   });
  }

  ngOnInit() {
  }

  login() {
    this.http.post('http://localhost:4000/api/signin',this.loginData).subscribe(resp => {
      this.data = resp;
      console.log('......4......' + this.data.success);
      if (this.data.success) {

          localStorage.setItem('jwtToken', this.data.token);
          this.router.navigate(['/admin/dashboard']);
      
      } else {

         console.log('......failed......');
         this.message = 'Error...Invalid Username or Password';

      
      }
    }, err => {


    });
  }


}
