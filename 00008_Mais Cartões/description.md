Ah, mas não tão rápido! Às vezes, no nosso cartão :name_badge: , só queremos o título e o sobrenome, sem o nome.

É por isso que agora temos que melhorar nossa função para que ela receba 4 parâmetros:

* O título.
* O nome e sobrenome, como até agora.
* Um booleano que nos diga se queremos um cartão curto com apenas título e sobrenome, ou um longo, como até agora.

> Modifique a função `escreverCartoes`, de modo que se comporte como é descrito acima. Exemplo:

> ``` javascript
> ム escreverCartoes ("Lic.", "Eduardo", "Peralta", true)
> "Lic. Peralta"
> ム escreverCartoes ("Ing.", "Julia", "Velázquez", false)
> "Ing. Julia Velázquez"
> ```
