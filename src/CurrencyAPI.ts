export default interface CurrencyAPI {
    convert(currency: string, amount: number): number;
}
