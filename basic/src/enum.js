function test70() {
    var Direction;
    (function (Direction) {
        Direction[Direction["up"] = 1] = "up";
        Direction[Direction["down"] = 2] = "down";
        Direction[Direction["left"] = 3] = "left";
        Direction[Direction["right"] = 4] = "right";
    })(Direction || (Direction = {}));
    ;
}
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
;
