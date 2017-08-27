import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

declare var AMap;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    let map = new AMap.Map('map'); // 引号中的变量名为初始化地图的时候使用，不需要是html中的DOM id
    map.plugin('AMap.Geolocation', () => {
      let geoLocation = new AMap.Geolocation();
      map.addControl(geoLocation);
      geoLocation.getCurrentPosition((status, result) => {
        debugger;
      })
    });
  }

}
