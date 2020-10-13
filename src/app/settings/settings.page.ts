import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  items: any; //variable with any datatype

  constructor() {
    this.settingsList(); // calling the functin declared in below
   }

  ngOnInit() {
  }

  settingsList() {
    this.items = [
      { name: 'Notifications Settings', url: './notification-settings' },
      { name: 'Email Settings', url: './email-settings' },
      { name: 'Account Settings', url: './account-settings' },
      { name: 'Logout', url: './login' }
    ];
  }

  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

  colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');    
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }



}



