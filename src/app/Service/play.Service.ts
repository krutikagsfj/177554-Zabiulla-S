import { Game } from './../Game-Model/game.model';
import { SuccessComponent } from './../success/success.component';
import { PlayComponent } from './../Play/play.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PlayService {

    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:3000/games';
    getGames() {
        return this.http.get<Game[]>(this.baseUrl);
    }
}