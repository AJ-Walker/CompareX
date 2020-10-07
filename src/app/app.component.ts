import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  appPages : any; //variable with any datatype
  appPages2 : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu(); // calling the functin declared in below
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.appPages = [
    {
      title : "Home",
      url : "/home",
      icon : "home"
    },
    {
      title : "Search",
      url : "/search",
      icon : "search"
    },
    {
      title : "Shopping Cart",
      url : "/shopping-cart",
      icon : "cart-sharp"
    },
    {
      title : "Scan QR code",
      url : "/qr-code",
      icon : "qr-code"
    },
    {
      title : "Login",
      url : "/login",
      icon : "log-in"
    },
    {
      title : "Sign Up",
      url : "/sign-up",
      icon : "add-circle"
    }
    ]

    this.appPages2 = [
    {
      title : "Contact Us",
      url : "/contact-us",
      icon : "person-circle"
    },
    {
      title : "Faqs",
      url : "/faqs",
      icon : "help-circle"
    },
    {
      title : "Settings",
      url : "/settings",
      icon : "settings"
    }
    ]
  }
}
