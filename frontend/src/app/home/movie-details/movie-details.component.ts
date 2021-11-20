import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  moviesData: any;
  id: String;

  constructor(
    private _moviesService: MoviesService,
    private _Arouter: ActivatedRoute
  ) {
    this.moviesData = {};
    this.id = '';
  }

  ngOnInit(): void {
    this._Arouter.params.subscribe((params) => {
      this.id = params['id'];
      this._moviesService.getDetails(this.id).subscribe(
        (res) => {
          this.moviesData = res.data;
          console.log(this.moviesData);
          
        },
        (err) => {
          console.log(err);
          
        }
      );
    });
  }
}
