import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AddItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/add-item/add-item.html',
})
export class AddItemPage {

  title: any;
  description: any;

  constructor(private nav: NavController, private params: NavParams) {
  	this.title = "";
  	this.description = "";
  }

  saveItem () {
  	let newItem = {
  		title: this.title,
  		description: this.description
  	}

	this.params.get('listPage').saveItem(newItem);
	this.nav.pop();
  }

}
