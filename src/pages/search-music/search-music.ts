import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpotifyService } from '../../services/spotify';
import { AddAlarmPage } from '../add-alarm/add-alarm';


@Component({
    selector: 'page-search-music',
    templateUrl: 'search-music.html',
    providers: [ SpotifyService ]
})
export class SearchMusicPage {
    public addAlarmPage  = AddAlarmPage;
    public foundMusics;
    public musicSearch;
    public selectedMusic;
    public audio;

    constructor(public navCtrl:NavController, public navParams:NavParams, private spotify:SpotifyService, public events:Events) {
        this.audio = new Audio();
    }

    getMusic() {
        this.spotify.getSongs(this.musicSearch).subscribe(
                data => {
                    this.foundMusics = data.json().tracks.items;
                },
                err => console.error(err)
        );
    }

    selectMusic(src) {
        if (this.audio.src) {
            this.audio.pause();
        }
        this.audio.src = src;
        this.audio.play();
    }

    validMusicChoice() {
        this.events.publish('music:selected', this.selectedMusic);
    }

    // Pause music at page change
    ionViewWillLeave() {
        if (this.audio.src) {
            this.audio.pause();
        }
    }

}
