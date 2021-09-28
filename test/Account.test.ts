import Account from "../src/Account";
import sinon from "sinon";
import CurrencyAPIFake from "../src/CurrencyAPIFake";

let account: Account;

beforeEach(function () {
    account = new Account("123", new CurrencyAPIFake());
});

test("Deve criar uma conta", function () {
    const balance = account.getBalance();
    expect(balance).toBe(0);
});

test("Deve criar uma conta e fazer um crédito", function () {
    account.credit(100);
    const balance = account.getBalance();
    expect(balance).toBe(100);
});

test("Deve criar uma conta e fazer um crédito e um débito", function () {
    account.credit(100);
    account.debit(50);
    const balance = account.getBalance();
    expect(balance).toBe(50);
});

test("Deve criar uma conta e fazer um crédito com currency", function () {
    account.credit(100, "USD");
    const balance = account.getBalance();
    expect(balance).toBe(300);
});

test("Deve testar um stub", function () {
    sinon.stub(account, "getBalance").returns(100);
    const balance = account.getBalance();
    expect(balance).toBe(100);
});

test("Deve testar um spy", function () {
    const spy = sinon.spy(account, "getBalance");
    account.getBalance();
    sinon.assert.calledOnce(spy);
});

test("Deve testar um mock", function () {
    const mock = sinon.mock(account);
    mock.expects("credit").once().withArgs(100);
    account.credit(100);
    mock.verify();
});
