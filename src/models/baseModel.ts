export class BaseModel{
    id : number;
    constructor(){
        this.id = 0;
    }
    load<T>(rawData : T, target: T) {
        for (let prop in rawData) {
            target[prop] = rawData[prop];
        }
    }
}
