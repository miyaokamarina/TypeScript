//// [constEnumBigInt.ts]
const enum E1 {
    n1 = 10n,
    n2 = n1,
    n3 = n2 + 1,
    n4 = n2 + 1n,
    n5,
    n6 = ~n5,
    n7 = -n6,
    n8 = n7 >> 1n,
    n9 = n8 << 1n,
    n10 = n8 | n9,
    n11 = n9 & n10,
    n12 = n10 ^ n11,
    n13 = n12 - 1n,
    n14 = n13 * 2n,
    n15 = n14 / 2n,
    n16 = (n13 * n14) + n15,
    n17 = +n16,
    n18 = n17 % 2n,
    n19 = 0n / 0n,
}

const enum E2 {
    n1 = 1n,
    n2,
}

const a = E1.n1 as const;
const b = E2.n2 as const;


enum E3 {
    n1 = 10n,
}


//// [constEnumBigInt.js]
var a = 10n /* n1 */;
var b = 2n /* n2 */;
var E3;
(function (E3) {
    E3[E3["n1"] = 10n] = "n1";
})(E3 || (E3 = {}));


//// [constEnumBigInt.d.ts]
declare const enum E1 {
    n1 = 10n,
    n2 = 10n,
    n3,
    n4 = 11n,
    n5 = 12n,
    n6 = -13n,
    n7 = 13n,
    n8 = 6n,
    n9 = 12n,
    n10 = 14n,
    n11 = 12n,
    n12 = 2n,
    n13 = 1n,
    n14 = 2n,
    n15 = 1n,
    n16 = 3n,
    n17 = 3n,
    n18 = 1n,
    n19
}
declare const enum E2 {
    n1 = 1n,
    n2 = 2n
}
declare const a: E1;
declare const b: E2.n2;
declare enum E3 {
    n1 = 10n
}
