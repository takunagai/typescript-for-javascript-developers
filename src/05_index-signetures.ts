export {};

(() => {
    // これから様々なデータをセットしていくオブジェクト変数を想定
    // let profile: { name?: string } = {};
    let profile: { [index: string]: string | number } = {}; // インデックスシグネチャ

    // インデックスシグネチャの書き方
    // { [ index: typeForIndex]: typeForValue }

    profile.name = 'Ham';
    profile.age = 43;
    profile.nationality = 'Japan'; // 型アノテーションしてないプロパティを追加していっても、エラーにならない
})();

(() => {
    /**
     * インデックスシグネチャを外部の interface に分離しスッキリさせる
     */
    interface Profile { // interface
        [index: string]: string | number
    }
    let profile: Profile = {};

    profile.name = 'Ham';
    profile.age = 43;
    profile.nationality = 'Japan';
})();

(() => {
    /**
     * 複雑に。20歳以下かどうかを管理するプロパティを追加
     */
    interface Profile {
        name: string, // 必須のプロパティには型アノテーションをセット
        underTwenty: boolean, // これも必須
        [index: string]: string | number | boolean // boolean 足さないと、インデックスシグネチャの型と互換性がないのでエラー
    }

    let profile: Profile = {
        name: 'Ham',// 必須のプロパティ、ないとエラー
        underTwenty: false,// 必須のプロパティ
    };

    profile.name = 'Ham';
    profile.age = 43; // インデックスシグネチャのおかげで、型アノテーションしてない -
    profile.nationality = 'Japan'; //  -プロパティを追加していってもエラーにならない
})();
