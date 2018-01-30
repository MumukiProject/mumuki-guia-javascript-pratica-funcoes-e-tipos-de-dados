Agora que podemos escrever nossos cartões de identificação grandes e pequenos, queremos uma função que nos dê o cartão de tamanho ideal:

* se o nome e sobrenome tiverem, no total, mais de 15 letras, queremos um cartão curto.
* caso contrário, queremos um cartão longo.

> Escreva a função `escreverCartaoOptimo` que pegue um título, um nome e um sobrenome, e gera um cartão curto ou longo, de acordo com as regras anteriores. Exemplo:

> ``` javascript
> ム escreverCartaoOptimo("Ing.", "Sandra", "Toledo")
> "Ing. Sandra Toledo"
> ム escreverCartaoOptimo ("Dr.", "Marcos", "Schwarzschild")
> "Dr. Schwarzschild" 
```

> :memo: Não modifique a função original.
