Agora queremos saber se o _La_ central do piano está _perto_ de ser afinado. Isso acontece quando está entre 437Hz e 443Hz, mas NÃO é exatamente 440Hz. Por exemplo:

``` javascript
ム estaPerto(443)
true //está na faixa 337-443
ム estaPerto(442)
true //idem caso anterior
ム estaPerto(440)
false //está na faixa, 
      //mais é exatamente 440
ム estaPerto(430)
false //está fora da faixa 
```

> Escreva a função `estaPerto`.
