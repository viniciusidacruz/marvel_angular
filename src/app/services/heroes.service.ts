import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IResponse } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  data: any = null;
  details: any = null;

  constructor(private http: HttpClient) {}

  getHero(name: string | null): Observable<IResponse> {
    return this.http.get<IResponse>(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
    );
  }

  getDetails(id: string | null): Observable<IResponse> {
    return this.http.get<IResponse>(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
    );
  }
}
