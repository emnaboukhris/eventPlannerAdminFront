import { Speaker } from "./Speaker";

export class Session{
    id:number;
    activity:string;
    title:string;
    description:string;
    startTime:string;
    endTime:string;
    speaker:Speaker;
    constructor(id:number,activity:string,title:string,description:string,startTime:string,endTime:string,speaker:Speaker){
        this.id=id;
        this.activity=activity;
        this.title=title;
        this.description=description;
        this.startTime=startTime;
        this.endTime=endTime;
        this.speaker=speaker;
    }


}