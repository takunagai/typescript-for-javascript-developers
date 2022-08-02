export {};

type Pitcher1 = {
    throwingSpeed: number,
};

type Batter1 = {
    battingAverage: number,
};

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
    // throwingSpeed: 154, // throwingSpeed は存在しないので型エラー
    battingAverage: 0.367,
};

// どっちもできる選手に throwingSpeed, battingAverage の両方持たせたい
// これは冗長…
type TwowayPlayer1 = {
    throwingSpeed: number,
    battingAverage: number,
};

// intersection 型を使うとスッキリ (TwowayPlayer1 と同じ)
type TwowayPlayer2 = Pitcher1 & Batter1;

const OtaniShouhei: TwowayPlayer2 = {
    throwingSpeed: 165,
    battingAverage: 0.286,
};
