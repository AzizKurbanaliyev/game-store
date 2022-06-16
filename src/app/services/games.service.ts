import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_GAMES = 'https://www.cheapshark.com/api/1.0/deals';
const API_GAME_DETAILS = '/api/appdetails?appids'; 
const API_FEATURED = '/api/featured'; 

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {
  }

  getDeals(): Observable<any> {
    return this.http.get<any>(API_GAMES);
  }

  getFeaturedGames(): Observable<any> {
    return this.http.get<any>(API_FEATURED);
  }

  getGameDetails(id: number): Observable<any> {
    return this.http.get<any>(`${API_GAME_DETAILS}=${id}`);
  }
}
