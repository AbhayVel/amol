import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NameType, User } from '../models/user';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://batch1504-325aa.firebaseio.com/.json";

  userArray: Array<User> = [
    
  ]



  constructor(private api: ApiCallService) { }

  getAllUser() {
    return new Observable((o: Observer<any>) => {
      this.api.getData<Array<User>>(this.url).subscribe((data: Array<User>) => {

        this.userArray=data
        o.next(this.userArray);
        o.complete();
      },
        (err) => {
          o.error(err);
        }

      )
      

    })

  }

  getUserFromArray(o: Observer<any> , id: number) {
    let index = this.userArray.findIndex((e) => {
      return e.id == id;
    });

    if (index === -1) {
     // const u = new User();
      //u.name = new NameType()
      o.next(new User());
    } else {
      o.next(this.userArray[index]);
      o.complete();
    }
  }

  getUserById(id: number) {
    return new Observable((o: Observer<any>) => {

      if (this.userArray.length == 0) {
        this.getAllUser().subscribe((r) => {
          this.getUserFromArray(o, id);
        })
      } else {
        this.getUserFromArray(o, id);
      }
     



    })
  }

  saveUser(u: User) {
    return new Observable((o: Observer<any>) => {
    let index=  this.userArray.findIndex((e) => {
      return e.id == u.id;
    })

      if (index == -1) {
        if (this.userArray.length != 0) {
          this.userArray.sort((e1, e2) => {
            return e1.id > e2.id ? -1 : 1;
          })

          u.id = this.userArray[0].id + 1;
        } else {
          u.id = 1;
        }
       
        this.userArray.push(u);
       // this.userArray.splice(index, 0, u);
      } else {
        this.userArray.splice(index, 1,u);
      }

      this.api.putData(this.url, this.userArray).subscribe((r) => {
        o.next(this.userArray);
        o.complete();
      })

    })
  }

  deleteUser(u: User) {
    return new Observable((o: Observer<any>) => {
    let index=  this.userArray.findIndex((e) => {
        return e.id == u.id;
    })

      if (index == -1) {
        o.error("User does't exists");
      } else {
        this.userArray.splice(index, 1);
        this.api.putData(this.url, this.userArray).subscribe((r) => {
          o.next(this.userArray);
          o.complete();
        })
      }

    })
  }
}
