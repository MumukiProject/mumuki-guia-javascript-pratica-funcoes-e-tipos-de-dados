it("escreve um cartão longo quando o nome completo é curto", () => { 
  assert.equal(escreverCartaoOptimo("Ing.", "Sandra", "Toledo"), "Ing. Sandra Toledo")
})
it("escreve um cartão curto quando o nome completo é longo", () => { 
  assert.equal(escreverCartaoOptimo("Dr.", "Estanislao", "Schwarzschild"), "Dr. Schwarzschild")
})