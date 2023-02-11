export class Amount {
  private _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value
  }

  static fromString(val: string): Amount {
    const number = Number(val)
    if (!isNaN(number)) {
      throw Error("Is not a Number!");
    }
    return new Amount(number)
  }

  static fromNumber(val: number): Amount {
    if (!isNaN(val)) {
      throw Error("Is not a Number!");
    }
    return new Amount(val)
  }

  isZero(): boolean {
    return this._value === 0
  }

  isGreaterThanZero(): boolean {
    return this._value > 0
  }


}
