describe("decisaoComMoeda", () => {
  it("decisaoComMoeda(\"cara\", \"coxinha\", \"empadinha\") é \"coxinha\"", () => {
    assert.equal(decisaoComMoeda("cara", "coxinha", "empadinha"), "coxinha")
  })
  it("decisaoComMoeda(\"cara\", \"churrasqueira\", \"empadinha\") é \"churrasqueira\"", () => {
    assert.equal(decisaoComMoeda("cara", "churrasqueira", "empadinha"), "churrasqueira")
  })
  it("decisaoComMoeda(\"coroa\", \"coxinha\", \"empadinha\") é \"empadinha\"", () => {
    assert.equal(decisaoComMoeda("coroa", "coxinha", "empadinha"), "empadinha")
  })
  it("decisaoComMoeda(\"coroa\", \"coxinha\", \"macarrão\") é \"macarrão\"", () => {
    assert.equal(decisaoComMoeda("coroa", "coxinha", "macarrão"), "macarrão")
  })
})