import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CgService } from './../../../cg.service';



@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component..scss']
})

export class EdititemComponent implements OnInit {

 menus: any = [

  	{name: 'breakfast'}, 
  	{name: 'lunch'}, 
  	{name: 'dinner'}
  ];

  statuses: any = [

  	{status: 'active'}, 
  	{status: 'inactive'}
  ];

  title = 'Edit Item';
  item: any;

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

  updateItem(name, price, menu, description, status, order) {
    console.log('........7888.........');
    this.route.params.subscribe(params => {
    this.service.updateItem(name, price, menu, description, status, order, params['id']);

 setTimeout(() => {
        this.router.navigated = false;
        this.router.navigateByUrl("/admin/" + menu);
        }, 2000);

  });
}

delete(id, menu) {
    this.service.deleteItem(id).subscribe(res => {
        console.log('Deleted');
      });

      setTimeout(() => {
        this.router.navigated = false;
        this.router.navigateByUrl("/admin/" + menu);
        }, 2000);

  }


  ngOnInit() {

  	this.route.params.subscribe(params => {

        this.item = this.service.editItem(params['id']).subscribe(res => {
            this.item = res;
        });
    });
  }

}
