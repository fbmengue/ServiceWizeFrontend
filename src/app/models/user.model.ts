import { Email } from "./ValueObjects/email.vo";
import { Phone } from "./ValueObjects/phone.vo";

export class User {

  constructor(
    public _id: string,
    public name: string,
    public email: Email,
    public phone: Phone,
    public birthDate: Date,
    public note: string
  ) { }

}
