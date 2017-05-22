export class AlarmModel {

    constructor(public time: Date, public days: string[], public idSpotifyMusic = null, public isActive = true){
        this.time = time;
        this.days = days;
        this.idSpotifyMusic = idSpotifyMusic;
        this.isActive = isActive;
    }

    setTime(time){
        this.time = time;
    }

    setActive(isActive){
        this.isActive = isActive;
    }

    setIdSpotifyMusic(idSpotifyMusic){
        this.idSpotifyMusic = idSpotifyMusic;
    }

    addDay(day){
        this.days.push(day);
    }

    removeDay(day){
        for(var i = 0; i < this.days.length; i++) {
            if(this.days[i] == day){
                this.days.splice(i, 1);
            }
        }
    }
}