import CurrencyAPI from "./CurrencyAPI";

export default class CurrencyAPIFake implements CurrencyAPI {
    convert(currency: string, amount: number): number {
        return amount * 3;
    }
}
