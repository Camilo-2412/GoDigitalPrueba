import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  movieName: any;
  constructor(
    private _moviesService: MoviesService,
    private _Arouter: ActivatedRoute
  ) {
    this.movieName = {};
  }

  ngOnInit(): void {}



}
