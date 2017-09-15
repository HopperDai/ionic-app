import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {LoggerProvider} from "../../providers/logger/logger";

// declare var AMap;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testForm: any;
  money: object = {
    street: '',
    city: '',
    state: '',
    zip: ''
  }

  constructor(public navCtrl: NavController,
              public fb: FormBuilder,
              public logger: LoggerProvider) {
    this.initForm();
    this.logger.log('home page');
  }

  ionViewDidEnter() {
    // this.initMap();
    this.setAddresses();
    console.log(this.testForm.value);
  }

  // initMap() {
  //   let map = new AMap.Map('map'); // 引号中的变量名为初始化地图的时候使用，不需要是html中的DOM id
  //   map.plugin('AMap.Geolocation', () => {
  //     let geoLocation = new AMap.Geolocation({});
  //     map.addControl(geoLocation);
  //     geoLocation.getCurrentPosition((status, result) => {
  //       let addr = result.formattedAddress.replace('广东省广州市', '');
  //     })
  //   });
  // }

  initForm() {
    let a = new Address();
    this.testForm = this.fb.group({
      aa: [''],
      arr: this.fb.array([])
    });

  }

  setAddresses() {
    let addrArr = this.fb.array(
      [
        this.fb.group({
          street: 1,
          city: 2,
          state: 3,
          zip: 4
        }),
        this.fb.group({
          street: 2,
          city: 2,
          state: 3,
          zip: 4
        }),
        this.fb.group({
          street: 3,
          city: 2,
          state: 3,
          zip: 4
        }),
      ]
    );
    this.testForm.setControl('arr', addrArr);
  }

  value() {
    console.log(this.testForm.value);
  }

  add() {
    this.addAddress();
  }

  addAddress() {
    this.testForm.controls.arr.push(this.fb.group(new Address()));
  }

  get arr(): FormArray {
    return this.testForm.get('arr') as FormArray;
  };

}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}
