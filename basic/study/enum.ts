/**
 * 用于学习枚举
 */
/**
 * 枚举的定义
 * 
 */
function test70() {
    enum Direction {
        up = 1,
        down,
        left,
        right
    };



}

/** 下面俩个枚举只能在相应的位置
 * 常数枚举
 * 常数枚举在使用的地方被内链进来
 */
const enum Directions {
    Up,
    Down,
    Left,
    Right
};
/**
* 在正常的枚举里，没有初始化方法的成员被当成常数成员
* 在非常数的外部枚举里，没有初始化方法时被当做需要经过计算的
*/
declare enum Enum1 {
    A = 1,
    B,
    c = 2
};