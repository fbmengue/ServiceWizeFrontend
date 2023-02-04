import { Appointment } from "./appointment.model";
import { Professional } from "./professional.model";
import { User } from "./user.model";

export class Reservation {
  constructor(
    public _id: string,
    public client: User,
    public professional: Professional,
    public appointment: Appointment

    
  ) { }

}


