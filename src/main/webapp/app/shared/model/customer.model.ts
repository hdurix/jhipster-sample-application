export interface ICustomer {
    id?: number;
    firstName?: string;
    lastName?: string;
}

export class Customer implements ICustomer {
    constructor(public id?: number, public firstName?: string, public lastName?: string) {}
}
