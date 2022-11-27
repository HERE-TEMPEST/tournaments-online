export function randomIntRange(min: number, max: number): number {
  return Math.trunc(randomRange(min, max))
}

export function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}
