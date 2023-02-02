import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  data: any = null;

  constructor(private http: HttpClient) {}

  getHero(name: string | null) {
    this.http
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
      )
      .subscribe((response) => {
        this.data = response;
      });

    return this.data;
  }
}
