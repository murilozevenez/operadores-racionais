//operadores relacionais
//igual a    | ==
// diferente | !=
// maior que | >
//menor que  | <
//maior ou igual | >=
//menor ou igual | <=

let A = 5;
let B = 3;
let C = 1;

console.log("A = B", A == B);
console.log("A <> B", A != B);
console.log("A > B", A > B);
console.log("A < B", A < B);
console.log("A >= B", A >= B);
console.log("A <= B", A <= B);


//operadores logicos
// E (AND)  - && (dois Es comerciais)
// OU (OR)  - || (dois Pipes)
//  NÃO (NOT) - ! (sinais de exclamaçoes)

A = 5
B = 8
C = 1

// A = B AND B > C
// true AND false = false
console.log("A = B AND B > C" ,A == B && B > C);

// A <> B OR B < C
//TRUE OR FALSE = TRUE
console.log("A <> B OR B < C", A != B || B < C)

//NOT A > B
// NOT FALSE = TRUE
console.log("NOT A > B", !(A > B))

//A<B = verdadeiro
console.log("A<B AND B>C",(A<B && B>C))

console.log("A>=B OR B=C",A>=B || B == C )

console.log("NOT A <= B", ! (A <= B))