import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styles: []
})
export class SearchMovieComponent {

  searchStr: string;
  searchResult: boolean;
  movie: Movie = {
    imdb_id: '',
    overview: '',
    poster_path: '',
    release_date: '',
    revenue: 0,
    runtime: '',
    tagline: '',
    title: ''
  };

  constructor(private apiService: ApiService) { }

  searchMovies() {
    this.searchResult = true;
    this.apiService.getMovieID(this.searchStr).subscribe((res: any) => {
      const movie_id = res.results[0].id;
      this.apiService.getMovieDetails(movie_id).subscribe((data: any) => {
        this.movie.imdb_id = data.imdb_id;
        this.movie.overview = data.overview;
        this.movie.poster_path = data.poster_path;
        this.movie.revenue = data.revenue;
        this.movie.release_date = data.release_date;
        this.movie.tagline = data.tagline;
        this.movie.title = data.title;

        // Convert minutes to hrs/mins
        const m = data.runtime % 60;
        const h = (data.runtime - m) / 60;
        this.movie.runtime = h + ' hours ' + m + ' min';
      });
    });
  }

  reset() {
    this.searchStr = null;
    this.searchResult = false;
  }

}
