import { Account } from "./Account";

export interface Customer{
    firstName: string;
    lastName: string;
    balance : number;
    accounts : Account[];
}