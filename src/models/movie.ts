import { BaseModel } from "./baseModel";


export class Movie extends BaseModel{
    name: string;
    rating: number;
    producer: string;
    constructor (name: string = "", producer: string = "", rating: number = 0) {
        super();
        this.name = name;
        this.rating = rating;
        this.producer = producer;
    }
}

