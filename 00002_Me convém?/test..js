it("meConvem(25, 8) é falso", () => {
  assert(!meConvem(25, 8))
})

it("meConvem(40, 8) é verdade", () => {
  assert(meConvem(40, 8))
})

it("meConvem(40, 10) é verdade", () => {
  assert(meConvem(40, 10))
})

it("meConvem(40, 4) é falso", () => {
  assert(!meConvem(40, 4))
})


it("meConvem(50, 16) é falso", () => {
  assert(!meConvem(50, 16))
})