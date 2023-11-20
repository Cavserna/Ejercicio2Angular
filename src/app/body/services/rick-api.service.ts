import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickApiService {

  private baseUrl = "https://rickandmortyapi.com/api";
  opciones = {
    headers: new HttpHeaders(
      {
        "Content-Type": "application/jason"
      }
    )
  }
  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(this.baseUrl+"/character",this.opciones)
  }
}
