import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Highscore {
  name: string;
  score: number;
  place: number;
}
@Injectable({
  providedIn: 'root',
})
export class HighScoreService {
  highscores: Highscore[] = [
    { name: 'gunnar', score: 10, place: -1 },
    { name: 'Patricia Harrison', score: 23, place: -1 },
    { name: 'Koa Ahmad', score: 17, place: -1 },
    { name: 'Beck Mcgregor', score: 13, place: -1 },
    { name: 'Matteo Atherton', score: 13, place: -1 },
    { name: 'Kaelan Wheeler', score: 26, place: -1 },
    { name: 'Amie Sargent', score: 5, place: -1 },
    { name: 'Brook Trujillo', score: 3, place: -1 },
    { name: 'Jevon Rocha', score: 14, place: -1 },
    { name: 'Amie Sargent', score: 10, place: -1 },
    { name: 'Ami ', score: 10, place: -1 },
  ];

  constructor() {}

  get() {
    this.sortHighScores();
    return of(this.highscores);
  }

  sortHighScores() {
    this.highscores.sort((a, b) => {
      if (b.score === a.score) {
        return a.name > b.name ? 1 : -1;
      }
      return b.score - a.score;
    });
  }
  getTop(n) {
    if (this.highscores.length < n) {
      return of(this.highscores.slice(0, n));
    }
    return of(this.highscores);
  }
  findScoreOfNewUser() {
    return this.highscores.find((value) => value.name === '___');
  }
  getHighScoresFiltered(score: number) {
    const result: Highscore = {
      score,
      name: '___',
      place: -1,
    };
    this.highscores.push(result);
    this.sortHighScores();
    this.highscores.forEach((value, index) => {
      value.place = index + 1;
    });
    const user = this.findScoreOfNewUser();
    const filtered = this.highscores.slice(0, 4);
    if (user) {
      filtered.push(user);
    }
    return of(filtered);
  }
}