import { Time } from "@angular/common";
import { Professional } from "./professional.model";
import { Amount } from "./ValueObjects/amount.vo";

export class Service {

  constructor(
    public _id: string,
    public name: string,
    public duration: Time,
    public professionals: Professional[],
    public price: Amount,
    public note: string
  ) {}

}
