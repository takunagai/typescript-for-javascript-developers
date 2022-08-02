export {};

/**
 * 文字列の列挙型。各プロパティに代入(値は文字列でなくても良い)
 */
enum COLORS {
    RED   = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008800',
    BLUE  = '#0000FF',
    // YELLOW = '#FFFF00',
    BLACK = '#000000'
}

console.log(COLORS.GREEN); // #008800

let green = COLORS.GREEN;
console.log({ green }); // { green: '#008800' }

// 存在しないプロパティなのでエラー。JSならエラーにならない
// COLORS.YELLOW;

// 使う箇所で付け足すことができる
enum COLORS {
    GLAY = '#808080'
}
let glay = COLORS.GLAY;
console.log({ glay }); // { glay: '#808080' }
