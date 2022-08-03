export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => { // イコールでデフォルト引数
    return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.2));
console.log(nextYearSalary(1000)); // 第２引数がないと、デフォルト引数が適用される
