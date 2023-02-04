import { Time } from "@angular/common";
import { Service } from "./service.model";


export class Appointment {
  constructor(
    public _id: string,
    public date: string,
    public startTime: Time,
    public endTime: Time,
    public title: string,
    public service: Service,
    public note: string,
    public price: number,
    public tags: string[] = [],
  ) { }
  
}



