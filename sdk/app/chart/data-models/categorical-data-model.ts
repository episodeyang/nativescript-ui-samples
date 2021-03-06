
export class CategoricalDataModel  {
    constructor() {

    }

    get categoricalSource() {
        return [
            { Country: "Germany", Amount: 15, SecondVal: 14 },
            { Country: "France", Amount: 13, SecondVal: 23 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 9 },
            { Country: "Spain", Amount: 5, SecondVal: 19 },
            { Country: "USA", Amount: 18, SecondVal: 8 }
        ]
    }

    get bubbleCategoricalSource() {
        return [
            { Country: "Germany", Amount: 15, Impact: 1 },
            { Country: "France", Amount: 13, Impact: 7 },
            { Country: "Bulgaria", Amount: 25, Impact: 10 },
            { Country: "Spain", Amount: 5, Impact: 3 },
            { Country: "USA", Amount: 17, Impact: 4 }
        ];
    }
}
