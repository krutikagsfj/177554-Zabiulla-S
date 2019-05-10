import { Game } from './../Game-Model/game.model';
import { Component, OnInit } from '@angular/core';
import { PlayService } from '../service/play.service';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.css']

})

export class PlayComponent implements OnInit {

    constructor(private playService: PlayService) { }
    prc: Number;
    games: Game[];
    playForm: FormGroup;

    ngOnInit() {
        this.playService.getGames().subscribe(data => { this.games = data });
    }

    onSubmit() {

    }

    getPrice(game: Game) {

        this.prc = game.price;
        localStorage.removeItem("gameprice");
        localStorage.removeItem("gameName");
        localStorage.setItem("gameprice", game.price.toString());
        localStorage.setItem("gameName", game.gName);
    }
}

