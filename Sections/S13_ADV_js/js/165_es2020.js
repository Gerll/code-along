//  ES2020

//  BigInt
typeof 1n;

Number.MAX_SAFE_INTEGER;
//  resultado: 9007199254740991
9007199254740991n + 11n;

//  Nullish Coalescing Operator ??

//  Optional Chaining Operator ?.
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 'lightning'
    }
}
let weight = will_pokemon.pikachu.weight;
console.log('weight:', weight);

let weight2 = andrei_pokemon.pikachu.weight;
console.log('weight:', weight);

let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);

let power = andrei_pokemon?.pikachu?.power || 'no power';
console.log(power);
//  Promise.allSettled
//  globalThis

