// @declaration: true
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
