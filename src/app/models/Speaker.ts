import { Company } from "./Company";
import { Person } from "./Person";

export class Speaker extends Person {
   
    job:string;
    company:Company;
    description:string;
   
    constructor(id:number,image:string,firstName:string,lastName:string,facebookLink:string,instaLink:string,gmail:string,linkedInLink:string,job:string,company:Company,description:string){
        super(id,image,firstName,lastName,facebookLink,instaLink,gmail,linkedInLink);
        this.job=job;
        this.company=company;
        this.description=description;
       
    }


}