function test50() {
    function add(x, y) {
        return x + y;
    }
    let myAdd = function (x, y) {
        return x + y;
    };
    let myAdd1 = function (x, y) { return x + y; };
    let myAdd2 = function (x, y) {
        return x + y;
    };
    function buildName(firstName, lastName) {
        return firstName + " " + lastName;
    }
    let result3 = buildName("Bob", "Adams");
    function buildName1(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    let result12 = buildName1("Bob");
    let result33 = buildName1("Bob", "Adams");
}
function test51() {
    function buildName(firstName, ...restOfName) {
        return firstName + " " + restOfName.join(" ");
    }
    let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
    console.log(employeeName);
}
function test52() {
    let desk = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    let cardPicker = desk.createCardPicker();
    let pickedCard = cardPicker();
    console.log(pickedCard.suit + " " + pickedCard.card);
}
function test53() {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
