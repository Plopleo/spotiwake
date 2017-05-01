import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {
    constructor(private http: Http) {
    }

    getSongsOld(search) {
        let repos = this.http.get(`https://api.github.com/users/${search}/repos`);
        return repos;
    }

    getSongs(search) {
        let result = this.http.get(`https://api.spotify.com/v1/search?q=${search}&type=track`);

        return result;
    }
}