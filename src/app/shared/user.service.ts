import { Injectable } from '@angular/core';

import { User } from '../shared/user';



@Injectable()
export class UserService {
  
   createUser(user: User) {
     console.log('User Email: ' + user.email);
   
   }
} 