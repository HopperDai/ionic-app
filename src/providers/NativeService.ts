import {Injectable} from "@angular/core";
import {Storage} from '@ionic/storage';

@Injectable()
export class NativeService {
  constructor(public storage: Storage) {
  }

  /**
   * 判断app是否已经登录
   */
  isLogin() {
    return new Promise((resolve, reject) => {
      this.storage.get('user').then(res => {
        if (!res) resolve(false);
        resolve(res); // 已登录就返回用户信息
      })
    })

  }
}
