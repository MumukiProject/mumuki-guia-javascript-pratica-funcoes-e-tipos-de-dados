it("escreverCartao(\"Dra.\", \"María\", \"Da Silva\"), é \"Dra. María Da Silva\"", () => {
  assert.equal(escreverCartao("Dra.", "María", "Da Silva"), "Dra. María Da Silva")
})
it("escreverCartao(\"Dr.\", \"Julio\", \"Gelman\"), é \"Dr. Julio Gelman\"", () => {
  assert.equal(escreverCartao("Dr.", "Julio", "Gelman"), "Dr. Julio Gelman")
})