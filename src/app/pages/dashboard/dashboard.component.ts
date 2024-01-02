import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TComic } from '../../shared/types/comic.type';
import { ComicService } from '../../services/comics/comic.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(private readonly _comicService: ComicService) {}

  ngOnInit(): void {
    this._comicService._get<TComic[]>();
  }

  protected data: TComic[] = [];
}
