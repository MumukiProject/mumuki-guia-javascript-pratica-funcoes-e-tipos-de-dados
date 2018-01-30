it("escreverCartoes(\"Dra.\", \"Ana\", \"Pérez\", false), é \"Dra. Ana Pérez\"", () => {
  assert.equal(escreverCartoes("Dra.", "Ana", "Pérez", false), "Dra. Ana Pérez")
})
it("escribirCaescreverCartoesrtelito(\"Dr.\", \"Julio\", \"Gelman\", false), é \"Dr. Julio Gelman\"", () => {
  assert.equal(escreverCartoes("Dr.", "Julio", "Gelman", false), "Dr. Julio Gelman")
})
it("escreverCartoes(\"Dra.\", \"Ana\", \"Pérez\", true), é \"Dra. Pérez\"", () => {
  assert.equal(escreverCartoes("Dra.", "Ana", "Pérez", true), "Dra. Pérez")
})
it("escreverCartoes(\"Dr.\", \"Julio\", \"Gelman\", true), é \"Dr. Gelman\"", () => {
  assert.equal(escreverCartoes("Dr.", "Julio", "Gelman", true), "Dr. Gelman")
})