export class User {

  constructor(
    public _id: string,
    public name: string,
    public email: string,    
    public phone: number,
    public birthDate: string,
    public note: string
  ) { }

}