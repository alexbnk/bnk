import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory-category-detail',
  templateUrl: './inventory-category-detail.component.html',
  styleUrls: ['./inventory-category-detail.component.css']
})
export class InventoryCategoryDetailComponent implements OnInit {

    public catId;

  constructor(private route: ActivatedRoute) {
    

   }

  ngOnInit() {
    this.route.params.subscribe(params => this.catId = parseInt(params['id'], 10 ));
    console.log(this.catId);
    }
  }


