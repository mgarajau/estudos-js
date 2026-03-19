 const fatorConversao = 0.01;

 const DIC_CLASSIFICACAO = {
        UNDERWEIGHT: 'Abaixo do peso',
        REGULAR: 'Peso normal',
        OVERWEIGHT: 'Sobrepeso',
        OBESITY: 'Obesidade'
 };


 function detalhesClassificacao(classificacao) { // função para detalhar a classificação do imc utilizando object mapping
    return {
        [DIC_CLASSIFICACAO.UNDERWEIGHT]: 'Abaixo do peso',
        [DIC_CLASSIFICACAO.REGULAR]: 'Peso normal',
        [DIC_CLASSIFICACAO.OVERWEIGHT]: 'Sobrepeso',
        [DIC_CLASSIFICACAO.OBESITY]: 'Obesidade'
    } [DIC_CLASSIFICACAO[classificacao]]; // retorna o detalhe da classificação do imc
 }

 function classificacaoIMC(imc) { // função para classificar o resultado do imc
      if (imc < 18.5) {
        return 'UNDERWEIGHT';    
    } else if (imc >= 18.5 && imc < 25) {
        return 'REGULAR';
    } else if (imc >= 25 && imc < 30) {
        return 'OVERWEIGHT';
    } else if (imc >= 30 && imc < 35) {
        return 'OBESITY';
    } 
 } 
  
 function calcularIMC(pessoa) {  // responsável para calcular o imc, recebe o peso e a altura como parâmetros
    let altura = pessoa.altura;
    let peso = pessoa.peso;

    altura = altura * fatorConversao; // converte a altura de cm para metros

    let imc = peso / (altura * altura);
    const classificacao = classificacaoIMC(imc); // chama a função para classificar o resultado do imc
    const detalhes = detalhesClassificacao(classificacao); // chama a função para detalhar a classificação do imc
    const resultado = 'O seu IMC é: ' + imc.toFixed(2); // toFixed(2) para limitar o resultado a 2 casas decimais
    const éSaudável = true; // variável para indicar se o resultado é saudável ou não

    return {
        nome: pessoa.nome,
        imc: resultado,
        Saudavel: éSaudável,
        classificacao: classificacao,
        detalhes: detalhes

    }
}

    const pessoa1 = {
        nome: 'Matheus',
        altura: 181,
        peso: 72
    }

    const pessoa2 = {
        nome: 'Bruna',
        altura: 164,
        peso: 61
    }


    console.log(calcularIMC(pessoa1));
    console.log(calcularIMC(pessoa2));



    
   
    


// * = multiplicação
// / = divisão
// + = adição
// - = subtração
// () = prioridade 
// && = operador lógico AND (e)
// || = operador lógico OR (ou)
// ? faça isso se for verdade : faça isso se for falso (operador ternário)
// % = operador de módulo (resto da divisão)
// == comparação de valor
// === comparação de valor e tipo
// != comparação de valor diferente
// !== comparação de valor e tipo diferente

// for (let i = 0; i < 10; i++) { estrutura de repetição for
//     console.log(i); } 

// ${variável} = template string para interpolação de variáveis em strings

// while (condição) { estrutura de repetição while
//     // código a ser executado enquanto a condição for verdadeira
// }

// do { estrutura de repetição do while
//     // código a ser executado
// } while (condição); // a condição é verificada após a execução do código, garantindo que o bloco seja executado pelo menos uma vez

//
