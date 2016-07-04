import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the ItemDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/item-detail/item-detail.html',
})
export class ItemDetailPage {

	title: any;
	description: any;

  constructor(private params: NavParams) {
    this.title = this.params.get('item').title;
    this.description = this.params.get('item').description;
  }

}
