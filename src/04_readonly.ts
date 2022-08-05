export {};

(() => {
    class VisaCard {
        readonly owner: string;
    
        constructor(owner: string) {
            this.owner = owner;
        }
    }

    let myVisaCard = new VisaCard('はむさん');
    console.log(myVisaCard.owner); // アクセスできる
    // myVisaCard.owner = 'ベーコン'; // readonly なので変更不可 OK
})();

(() => {
    /**
     * 簡略化した書き方
     */
    // readonly owner: string;

    class VisaCard {
        // constructor(readonly owner: string) { // public は省略可能だが、わかりやすさや変更時のことを考慮し省略は非推奨
        constructor(public readonly owner: string) { // 重ねる
            // this.owner = owner;
        }
    }

    let myVisaCard = new VisaCard('はむさん');
    console.log(myVisaCard.owner); // アクセスできる
    // myVisaCard.owner = 'ベーコン'; // readonly なので変更不可 OK
})();