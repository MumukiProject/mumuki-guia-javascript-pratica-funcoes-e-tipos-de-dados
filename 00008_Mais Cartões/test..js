it("escreverCartao(\"Dra.\", \"Ana\", \"Pérez\", false), é \"Dra. Ana Pérez\"", () => {
  assert.equal(escreverCartao("Dra.", "Ana", "Pérez", false), "Dra. Ana Pérez")
})
it("escreverCartao(\"Dr.\", \"Julio\", \"Gelman\", false), é \"Dr. Julio Gelman\"", () => {
  assert.equal(escreverCartao("Dr.", "Julio", "Gelman", false), "Dr. Julio Gelman")
})
it("escreverCartao(\"Dra.\", \"Ana\", \"Pérez\", true), é \"Dra. Pérez\"", () => {
  assert.equal(escreverCartao("Dra.", "Ana", "Pérez", true), "Dra. Pérez")
})
it("escreverCartao(\"Dr.\", \"Julio\", \"Gelman\", true), é \"Dr. Gelman\"", () => {
  assert.equal(escreverCartao("Dr.", "Julio", "Gelman", true), "Dr. Gelman")
})