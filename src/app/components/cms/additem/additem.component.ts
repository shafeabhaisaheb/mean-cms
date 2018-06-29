import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CgService } from './../../../cg.service';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component..scss']
})
export class AdditemComponent implements OnInit {

  
  menus: any = [

  	{name: 'breakfast'}, 
  	{name: 'lunch'}, 
  	{name: 'dinner'}
  ];

  statuses: any = [

  	{status: 'active'}, 
  	{status: 'inactive'}
  ];

  title = 'Add Item';

  newForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private service: CgService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.newForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      order: ['', Validators.required ],
      price: ['', Validators.required ],
      menu: ['', Validators.required ],
      status: ['', Validators.required ]
   });
  }


  addItem(name, price, menu, description, status, order) {
    console.log('........7888.........');
    this.route.params.subscribe(params => {
    this.service.addItem(name, price, menu, description, status, order);

    setTimeout(() => 
    {
        this.router.navigateByUrl("/admin/dashboard");
    },
    2000);
    
    });
  }


  ngOnInit() {
    
  }


}
