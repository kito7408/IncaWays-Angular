import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vuelo } from './vuelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  private url = 'http://localhost:8090/api/vuelo';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vuelo[]> {
    return this.http.get<Vuelo[]>(this.url);
  }

  getById(id: number): Observable<Vuelo> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Vuelo>(newUrl);
  }

  save(vuelo: Vuelo) {
    const newUrl = this.url + '/guardar';
    return this.http.post(newUrl,vuelo);
  }

  update(vuelo: Vuelo): Observable<Vuelo> {
    const newUrl = this.url + '/editar/' + vuelo.id;
    return this.http.put<Vuelo>(newUrl,vuelo);
  }

  delete(id:number): Observable<Vuelo> {
    const newUrl = this.url + '/eliminar/' + id;
    return this.http.delete<Vuelo>(newUrl);
  }
}
