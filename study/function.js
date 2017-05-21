/**
 * 学习函数
 */
/**
 * 为函数添加类型
 */
function test50() {
    function add(x, y) {
        return x + y;
    }
    //函数可以添加返回值类型，
    //ts能够根据返回语句自动推断出返回值类型，因此我们通常省略它
    var myAdd = function (x, y) {
        return x + y;
    };
    /**
     * 书写完整的类型,必须前面和后面的参数类型 返回值类型都匹配，名字可以不一样
     * @param x number
     * @param y number
     */
    var myAdd1 = function (x, y) { return x + y; };
    /**
     * 自动推断类型
     * @param x
     * @param y
     */
    var myAdd2 = function (x, y) {
        return x + y;
    };
    /**
     * 严格要求函数的参数类型和数量
     * @param {string} firstName
     * @param {string} lastName
     * @returns
     */
    function buildName(firstName, lastName) {
        return firstName + " " + lastName;
    }
    // let result1 = buildName("Bob"); //Error too few parameters
    // let result2 = buildName("Bob","Adams","Sr."); //error,too many parameters
    var result3 = buildName("Bob", "Adams");
    /**
     *  可选参数 在参数后面加上个？或者直接给参数赋值 lastName = "string"
     *  没有传递参数或者是undefined时，他们叫做默认初始化值得参数
     * 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。
     * 如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值
     * @param {string} firstName
     * @param {string} [lastName]
     * @returns string
     */
    function buildName1(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    //
    var result12 = buildName1("Bob");
    // let result22 = buildName1("Bob","Adams","Sr");//参数数量多了也不行
    var result33 = buildName1("Bob", "Adams");
}
/**
 * 剩余参数
 * 必要参数哦，默认参数和可选参数哦有个共同点:他们表示某一个参数
 * ts里面可以用 (...) 三个省略号来表示省略参数
 */
function test51() {
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
    console.log(employeeName);
}
/**
 * 理解ts中对this做的优化
 * 可以在初始化的时候就绑定好this的上下文
 */
function test52() {
    var desk = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            // NOTE: the line below is now an arrow function,
            // allowing us to capture 'this' right here
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = desk.createCardPicker();
    var pickedCard = cardPicker();
    console.log(pickedCard.suit + " " + pickedCard.card);
}
/**
 * 给this指定类型
 */
function test53() {
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
