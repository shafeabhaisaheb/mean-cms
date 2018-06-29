import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component..scss']
})
export class MainComponent implements OnInit {

 carouselForm: FormGroup;

  title:String = "Main";
  constructor() { }

  ngOnInit() {
  }

}
