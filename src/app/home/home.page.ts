import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	category_row1 :any ;
	category_row2 :any ;
	recommended_products_data :any;//variable with any datatype

  constructor() {
  	this.category();
  	this.recommended_products();//calling the functin declared in below
  }

  category() {
    this.category_row1 = [
    {
      icon_img : "assets/images/mobile.jpg",
      title : "Mobile Phones"
    },
    {
      icon_img : "assets/images/laptop.png",
      title : "Laptop & Desktop"
    },
    {
      icon_img : "assets/images/tv.png",
      title : "Smart TV"
    },
    {
      icon_img : "assets/images/watch.jpg",
      title : "Smart Watches"
    }
    ]

    this.category_row2 = [
    {
      icon_img : "assets/images/earphone.jpg",
      title : "Headphones & Earphones"
    },
    {
      icon_img : "assets/images/gaming.jpg",
      title : "Gaming"
    },
    {
      icon_img : "assets/images/household.jpg",
      title : "Household Appliances"
    },
    {
      icon_img : "assets/images/acc.jpg",
      title : "Accessories"
    }
    ]
	}

	recommended_products() {
		this.recommended_products_data =[
		{
			product_img : "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
			product_name : "Product1",
			product_description : "Some text about the product1",
			product_price : "$199.99",
			website_icon : "home",
			buy_button : "Buy",

		},
		{
			product_img : "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
			product_name : "Product2",
			product_description : "Some text about the product2",
			product_price : "$199.99",
			website_icon : "home",
			buy_button : "Buy",

		},
		{
			product_img : "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
			product_name : "Product3",
			product_description : "Some text about the product3",
			product_price : "$199.99",
			website_icon : "home",
			buy_button : "Buy",

		},
		{
			product_img : "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
			product_name : "Product4",
			product_description : "Some text about the product4",
			product_price : "$199.99",
			website_icon : "home",
			buy_button : "Buy",
		}
		]
	}
}
