import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://localhost:8090/heroes';

  constructor(private http: HttpClient) { }

   /** GET heroes from the server */
   getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

   /** POST: add a new hero to the server */
   addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero);
  }


  
}
