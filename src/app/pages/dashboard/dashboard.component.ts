import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TComic } from '../../shared/types/comic.type';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  protected data: TComic[] = [
    {
      name: 'X-Men: Days of Future Past (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'MARVEL MASTERWORKS: THE X-MEN VOL. 6 TPB (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/4bc5f08005c48/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'Uncanny X-Men #544 Gillen, Land',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/592db67d03aae/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },

    {
      name: 'X-Men: Days of Future Past (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'MARVEL MASTERWORKS: THE X-MEN VOL. 6 TPB (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/4bc5f08005c48/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'Uncanny X-Men #544 Gillen, Land',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/592db67d03aae/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'X-Men: Days of Future Past (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'MARVEL MASTERWORKS: THE X-MEN VOL. 6 TPB (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/4bc5f08005c48/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'Uncanny X-Men #544 Gillen, Land',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/592db67d03aae/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'X-Men: Days of Future Past (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'MARVEL MASTERWORKS: THE X-MEN VOL. 6 TPB (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/4bc5f08005c48/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'Uncanny X-Men #544 Gillen, Land',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/592db67d03aae/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'X-Men: Days of Future Past (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'MARVEL MASTERWORKS: THE X-MEN VOL. 6 TPB (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/4bc5f08005c48/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'Uncanny X-Men #544 Gillen, Land',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/592db67d03aae/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'X-Men: Days of Future Past (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'MARVEL MASTERWORKS: THE X-MEN VOL. 6 TPB (Trade Paperback)',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/4bc5f08005c48/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
    {
      name: 'Uncanny X-Men #544 Gillen, Land',
      image:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/592db67d03aae/portrait_uncanny.jpg',
      subTitle: 'Gillen, Land',
    },
  ];
}
