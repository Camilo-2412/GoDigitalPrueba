import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  moviesData: any;
  pagination: number;
  type: any;
  name: any;
  constructor(
    private _moviesService: MoviesService,
    private _Arouter: ActivatedRoute
  ) {
    this.moviesData = [];
    this.pagination = 1;
    this.type = '';
    this.name = '';
  }

  ngOnInit(): void {
    
    this._Arouter.params.subscribe((params) => {
      

      if (!params['type'] && !params['name']) {
        this._moviesService.getMovies('popular', this.pagination).subscribe(
          (res) => {
            console.log(res);

            this.moviesData = res.movies;
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.getMovies();
      }
    });
  }

  getMovies() {
    this._Arouter.params.subscribe((params) => {
      if (!params['name']) {
        if (params['type'] != this.type) this.pagination = 1;
        this.type = params['type'];
        this._moviesService.getMovies(this.type, this.pagination).subscribe(
          (res) => {
            this.moviesData = res.movies;
          },
          (err) => {
            console.log(err);
          }
        );
       
      } else {
        if (params['name'] != this.name) this.pagination = 1;
        this.name=params['name'];
        this._moviesService.getByName(this.name, this.pagination).subscribe(
          (res) => {
            this.moviesData = res.movies;
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }


  aumento() {
    if (this.pagination < 1000) {
      this.pagination = this.pagination + 1;
      this.getMovies();
    }
  }

  disminuye() {
    if (this.pagination > 1) {
      console.log(this.pagination);

      this.pagination = this.pagination - 1;
      this.getMovies();
    }
  }
}
