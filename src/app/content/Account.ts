import { Transaction } from "./Transaction";

export interface Account{
    accountId : number;
    balance : number;
    transactions : Transaction[];
}