import CurrencyAPI from "./CurrencyAPI";

export default class Account {
    private balance: number;
    currencyAPI: CurrencyAPI;

    constructor (readonly code: string, currencyAPI: CurrencyAPI) {
        this.balance = 0;
        this.currencyAPI = currencyAPI;
    }

    credit(amount: number, currency?: string) {
        if (currency) {
            amount = this.currencyAPI.convert(currency, amount);
        }
        this.balance += amount;
    }

    debit(amount: number, currency?: string) {
        if (currency) {
            amount = this.currencyAPI.convert(currency, amount);
        }
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}
