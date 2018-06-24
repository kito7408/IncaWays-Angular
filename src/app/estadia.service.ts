import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estadia } from './estadia';

@Injectable({
  providedIn: 'root'
})
export class EstadiaService {

  private url = 'http://localhost:8090/api/estadia';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Estadia[]> {

    return this.http.get<Estadia[]>(this.url);
  }

  getById(id: number): Observable<Estadia> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Estadia>(newUrl);
  }

  save(estadia: Estadia) {
    const newUrl = this.url + '/guardar';
    return this.http.post(newUrl,estadia);
  }

  update(estadia: Estadia): Observable<Estadia> {
    const newUrl = this.url + '/editar/' + estadia.id;
    return this.http.put<Estadia>(newUrl,estadia);
  }

  delete(id: number): Observable<Estadia> {
    const newUrl = this.url + '/eliminar/' + id;
    return this.http.delete<Estadia>(newUrl);
  }

}
