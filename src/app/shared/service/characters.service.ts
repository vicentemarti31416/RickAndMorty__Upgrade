import { Character } from './../model/character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url: string = 'https://rickandmortyapi.com/api/character'

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public findById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }
 
  public findPageable(page: number): Observable<any> {
    return this.http.get<any>(`${this.url}?page=${page}`);
  }

  public findPageableByName(page: number, name: string): Observable<any> {
    return this.http.get<any>(`${this.url}?name=${name}&page=${page}`);
  }
}

