
import { Order } from "app/objects/order";

export class Customer {

    name:string;
    account:number;
    purchaseHistory:Order[] = [];
    phoneNumber:string;
    address:string;
    birthday:string;


    constructor(n?:string, a?:number, address?:string){
        this.name = n;
        this.account = a;
        this.address = address;
    }
}