import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	email: string;
	password: string;

  constructor(
  	private router: Router
  	) {
  	this.login();

  }

  ngOnInit() {
  }

  login(){
  	if (this.email == "akj441@gmail.com" && this.password == "abhay123"){
  		alert("success");
  		this.router.navigateByUrl('/home');
  	}
  	else{
  		alert("invalid");
  	}
  }

}
