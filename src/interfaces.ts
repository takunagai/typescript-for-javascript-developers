export {};

// まずは、型エイリアスで
type ObjectType = { // イコールで
    name: string,
    age: number
}

let object: ObjectType = {
    name: 'Ham-san',
    age: 43
}


// 同様のことを interface で実装。クラスの型づけでよく使う
interface ObjectInterface { // イコールはつけない
    name: string,
    age: number
}

let object2: ObjectInterface = {
    // name: true, // 型エラー出してくれる
    name: 'Ham-san',
    age: 43
}