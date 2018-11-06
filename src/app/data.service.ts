import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=efc29dfbb4dbf3b742aa82d0f86665f4&language=ru-RU&page=1')
  }

  getMovie(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=efc29dfbb4dbf3b742aa82d0f86665f4&language=ru-Ru')
  }

  getRecommendations(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'/recommendations?api_key=efc29dfbb4dbf3b742aa82d0f86665f4&language=ru-Ru&page=1')
  }

  getSimilar(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'/similar?api_key=efc29dfbb4dbf3b742aa82d0f86665f4&language=ru-Ru&page=1')
  }



}
