export {};

function returnNothing(): undefined {
	console.log("I don't return anything!");
	return undefined;
}

console.log(returnNothing()); // return なくても、undefined が返る(コンソールに表示される)