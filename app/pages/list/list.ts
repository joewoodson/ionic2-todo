import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail'

@Component({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  
  items: any;

  constructor(private navController: NavController) {

  	this.items = [
  		{title: 'Item 1', description: 'this is item 1'},
  		{title: 'Item 2', description: 'this is item 2'},
  		{title: 'Item 3', description: 'this is item 3'}
  	];

  }

  addItem() {
  	this.navController.push(AddItemPage, {listPage: this});
  };

  viewItem(item) {
    this.navController.push(ItemDetailPage, {item: item});
  };

}
