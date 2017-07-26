

export class Order {
    item:string;
    price:number;
    paymentType:string;
    date:Date;
    progress:number;

    constructor(i, p, pt, d, pro) {
        this.item = i;
        this.price = p;
        this.paymentType = pt;
        this.date = d;
        this.progress = pro;
    }
}