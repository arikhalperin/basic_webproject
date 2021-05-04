import {observable} from "mobx";


export default class HistoricalValue {
    value:number;

    constructor(value:number) {
        this.value = value;
    }
}
