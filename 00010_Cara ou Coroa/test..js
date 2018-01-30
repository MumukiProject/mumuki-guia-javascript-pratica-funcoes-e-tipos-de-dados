describe("decisaoComMoeda", () => {
  it("decisaoComMoeda(\"cara\", \"coxinha\", \"empanadas\") es \"pizzas\"", () => {
    assert.equal(decisaoComMoeda("cara", "coxinha", "empanadas"), "pizzas")
  })
  it("decisaoComMoeda(\"cara\", \"asado\", \"empanadas\") es \"asado\"", () => {
    assert.equal(decisaoComMoeda("cara", "asado", "empanadas"), "asado")
  })
  it("decisaoComMoeda(\"coroa\", \"coxinha\", \"empanadas\") es \"empanadas\"", () => {
    assert.equal(decisaoComMoeda("coroa", "coxinha", "empanadas"), "empanadas")
  })
  it("decisaoComMoeda(\"coroa\", \"coxinha\", \"pastas\") es \"pastas\"", () => {
    assert.equal(decisaoComMoeda("coroa", "coxinha", "pastas"), "pastas")
  })
})