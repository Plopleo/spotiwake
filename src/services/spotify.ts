import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {
    constructor(private http: Http) {
    }

    getSongs(search) {
        let result = this.http.get(`https://api.spotify.com/v1/search?q=${search}&type=track`);

        return result;
    }

    getSong(id) {
        let result = this.http.get(`https://api.spotify.com/v1/tracks/${id}`);

        return result;
    }
}