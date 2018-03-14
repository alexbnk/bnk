import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUsers() {

    return [
      { 'id': 1, 'firstName': 'Alex ', 'lastName': 'Benedek', 'yearOfBirth': 1972 , 'country': 'Israel'},
      { 'id': 1, 'firstName': 'Miri ', 'lastName': 'Benedek', 'yearOfBirth': 1966, 'country': 'Israel' }
    ];




  }

}
