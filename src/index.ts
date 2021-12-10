export function avg(a: number, b: number, c: number): number {
  return sum3(a, b, c) / 3;
}

export function sum3(a: number, b: number, c: number): number {
  return sum2(a, sum2(b, c));
}

export function sum2(a: number, b: number): number {
  const sum = a + b;
  return sum;
}
