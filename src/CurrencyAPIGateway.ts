import CurrencyAPI from "./CurrencyAPI";

export default class CurrencyAPIGateway implements CurrencyAPI {
    convert(currency: string, amount: number): number {
        // chamar serviço pelo protocolo HTTP
        return 0;
    }
}
