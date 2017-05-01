export class AlarmModel {

    constructor(public time: Date, public days: string[]){
        this.time = time;
        this.days = days;
    }

    setTime(time){
        this.time = time;
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