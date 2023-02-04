import { Time } from "@angular/common";
import { Professional } from "./professional.model";

export class Service {

  constructor(
    public _id: string,
    public name: string,
    public duration: Time,
    public professionals: Professional[],
    public price: number,
    public note: string
  ) { }

}
