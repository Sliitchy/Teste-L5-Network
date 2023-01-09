import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  API_KEY_LASTFM = 'a086fe3177366f4101c2aa5690a88785';
  API_KEY_THEMOVIEDB = '';

  constructor(private http: HttpClient) { }

  searchMusic(artistName: string, queryType: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${artistName}&api_key=${this.API_KEY_LASTFM}&format=json`);
  }

  getMovieID(movieName: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY_THEMOVIEDB}&query=${movieName}`);
  }

  getMovieDetails(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY_THEMOVIEDB}`);
  }

}
