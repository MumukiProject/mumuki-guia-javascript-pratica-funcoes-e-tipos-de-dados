it("escreverCartoes(\"Dra.\", \"María\", \"Da Silva\"), é \"Dra. María Da Silva\"", () => {
  assert.equal(escreverCartoes("Dra.", "María", "Da Silva"), "Dra. María Da Silva")
})
it("escreverCartoes(\"Dr.\", \"Julio\", \"Gelman\"), é \"Dr. Julio Gelman\"", () => {
  assert.equal(escreverCartoes("Dr.", "Julio", "Gelman"), "Dr. Julio Gelman")
})