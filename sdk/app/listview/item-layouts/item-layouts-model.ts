import {ObservableArray} from "data/observable-array";
import listViewModule = require("../../nativescript-telerik-ui/listview");
import timer = require("timer");

export class ViewModel {

    private _items: ObservableArray<DataItem>;
    private _staggeredItems: ObservableArray;
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
    }

    get dataItems() {
        if (!this._items) {
            this._items = new ObservableArray<DataItem>();

            for (var i = 0; i < 10; i++) {
                this._items.push(new DataItem(i, "Item " + i, "This is item description."));
            }
        }
        return this._items;
    }

    get staggeredItems() {
        if (!this._staggeredItems) {
            this._staggeredItems = new ObservableArray();

            for (var i = 0; i < 50; i++) {
                this._staggeredItems.push(new DataItem(i, "Item " + i, this.getRandomLengthString()));
            }
        }
        return this._staggeredItems;
    }

    private getRandomLengthString(){
        var sentenceLength = Math.round((Math.random() * 15));
        var result = this._words[0];
        for (var i = 0; i < sentenceLength; i++){
            result += (this._words[i % this._words.length] + " ");
        }
        return result;
    }

    private initStaggeredLayoutItems() {
        this._staggeredItems = new ObservableArray();
    }
}

export class DataItem {
    public id: number;
    public itemName;
    public itemDescription;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
}
