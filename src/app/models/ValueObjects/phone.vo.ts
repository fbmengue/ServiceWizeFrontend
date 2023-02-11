export class Phone {
  private _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value
  }

  static fromString(val: string): Phone {
    const number = Number(val);
    const regex = /^9\d{8}$/;
    if (!isNaN(number)) {
      throw Error("Is not a Number!");
    }
    if (!regex.test(val)) {
      throw Error("Phone number must start with 9 and have 9 digits!");
    }

    return new Phone(number)
  }

  static fromNumber(val: number): Phone {
    const string = String(val);
    const regex = /^9\d{8}$/;
    if (!isNaN(val)) {
      throw Error("Is not a Number!");
    }
    if (!regex.test(string)) {
      throw Error("Phone number must start with 9 and have 9 digits!");
    }

    return new Phone(val)
  }

  isZero(): boolean {
    return this._value === 0
  }

  isGreaterThanZero(): boolean {
    return this._value > 0
  }


}
