/**
 * 学习函数
 */
/**
 * 为函数添加类型
 */
function test50() {
    function add(x: number, y: number): number {
        return x + y;
    }
    //函数可以添加返回值类型，
    //ts能够根据返回语句自动推断出返回值类型，因此我们通常省略它
    let myAdd = function (x: number, y: number): number {
        return x + y;
    }
    /**
     * 书写完整的类型,必须前面和后面的参数类型 返回值类型都匹配，名字可以不一样
     * @param x number
     * @param y number
     */
    let myAdd1: (baseValue: number, increment: number)
        => number = function (x: number, y: number)
            : number { return x + y };
    /**
     * 自动推断类型
     * @param x 
     * @param y 
     */
    let myAdd2 = function (x: number, y: number): number {
        return x + y;
    }
    /**
     * 严格要求函数的参数类型和数量
     * @param {string} firstName 
     * @param {string} lastName 
     * @returns 
     */
    function buildName(firstName: string, lastName: string) {
        return firstName + " " + lastName;
    }
    // let result1 = buildName("Bob"); //Error too few parameters
    // let result2 = buildName("Bob","Adams","Sr."); //error,too many parameters
    let result3 = buildName("Bob", "Adams");
    /**
     *  可选参数 在参数后面加上个？或者直接给参数赋值 lastName = "string"
     *  没有传递参数或者是undefined时，他们叫做默认初始化值得参数
     * 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 
     * 如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值
     * @param {string} firstName 
     * @param {string} [lastName] 
     * @returns string
     */
    function buildName1(firstName: string, lastName?: string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    //
    let result12 = buildName1("Bob");
    // let result22 = buildName1("Bob","Adams","Sr");//参数数量多了也不行
    let result33 = buildName1("Bob", "Adams");
}

/**
 * 剩余参数
 * 必要参数哦，默认参数和可选参数哦有个共同点:他们表示某一个参数
 * ts里面可以用 (...) 三个省略号来表示省略参数
 */
function test51() {
    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }
    let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

    console.log(employeeName);
}
/**
 * 理解ts中对this做的优化 
 * 可以在初始化的时候就绑定好this的上下文
 */
function test52() {
    let desk = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            // NOTE: the line below is now an arrow function,
            // allowing us to capture 'this' right here
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }
    let cardPicker = desk.createCardPicker();
    let pickedCard = cardPicker();
    console.log(pickedCard.suit + " " + pickedCard.card);
}
/**
 * 给this指定类型
 */
function test53() {

    interface Card {
        suit: string;
        card: number;
    }
    interface Deck {
        suits: string[];
        cards: number[];
        //注意此处的定义是this必须是Deck类型 并且返回值也必须是Card类型
        createCardPicker(this: Deck): () => Card;
    }
    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function (this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}