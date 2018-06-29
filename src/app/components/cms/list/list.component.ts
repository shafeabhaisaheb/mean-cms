import { Component, OnInit, Input } from '@angular/core';
import { CgService } from './../../../cg.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component..scss']
})
export class ListComponent implements OnInit {

  items: any;
  @Input()
    message: string;

  constructor(private service: CgService, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
 } 
  }

  ngOnInit() {

        console.log('Title is...' + this.message);
        this.listItems();
  }

/*
  delete(id) {
    this.service.deleteItem(id).subscribe(res => {
        console.log('Deleted');
      });

      setTimeout(() => {
        this.router.navigated = false;
        this.router.navigateByUrl("/admin/" + this.message);
        }, 2000);

  }
*/

  listItems() {

    this.service.listItems(this.message).subscribe(res => {
      this.items = res;
    });
  }

}
