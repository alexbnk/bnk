import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-category-list',
  templateUrl: './inventory-category-list.component.html',
  styleUrls: ['./inventory-category-list.component.css']
})
export class InventoryCategoryListComponent implements OnInit {

    public categories = [

      {'id': 1 , 'name': 'House Appliances'},
      {'id': 2 , 'name': 'Network Devices'},
      {'id': 3 , 'name': 'Computers and Parts'},
      {'id': 4 , 'name': 'Tools'},
      {'id': 5 , 'name': 'Watches'},
      {'id': 6 , 'name': 'Media'},
      {'id': 7 , 'name': 'שונות'}
  ];




  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(category) {

      this.router.navigate(['/inventory/category', category.id]);
  }


}
