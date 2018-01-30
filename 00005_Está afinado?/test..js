describe("estaAfinado", () => {
  it("NÃO estaAfinado(443)", () => { assert(!estaAfinado(443)) })
  it("NÃO estaAfinado(442)", () => { assert(!estaAfinado(442)) })
  it("NÃO estaAfinado(437)", () => { assert(!estaAfinado(437)) })
  
  it("estaAfinado(440)", () => { assert(estaAfinado(440)) })
})