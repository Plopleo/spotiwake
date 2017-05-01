import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpotifyService } from '../../services/spotify'


@Component({
    selector: 'page-search-music',
    templateUrl: 'search-music.html',
    providers: [ SpotifyService ]
})
export class SearchMusicPage {
    public foundMusics;
    public musicSearch;
    public selectedMusic;
    public audio;

    constructor(public navCtrl:NavController, public navParams:NavParams, private spotify:SpotifyService) {
        this.audio = new Audio();
    }

    getMusic() {
        this.spotify.getSongs(this.musicSearch).subscribe(
                data => {
                    this.foundMusics = data.json().tracks.items;
                },
                err => console.error(err),
            () => console.log('getMusic completed')
        );
    }

    selectMusic(src) {
        if (this.audio.src) {
            this.audio.pause();
        }
        this.audio.src = src;
        this.audio.play();
    }

}
