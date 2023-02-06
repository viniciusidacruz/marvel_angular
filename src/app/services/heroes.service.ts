import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  data: any = null;
  details: any = null;

  constructor(private http: HttpClient) {}

  getHero(name: string | null): Observable<any> {
    return this.http.get<any>(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
    );
  }

  getDetails(id: string | null) {
    this.http
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
      )
      .subscribe((response) => {
        this.details = response;
      });

    return this.details;
  }
}
