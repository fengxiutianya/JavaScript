/**
 * 用于学习枚举
 */
/**
 * 枚举的定义
 *
 */
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
;
;
