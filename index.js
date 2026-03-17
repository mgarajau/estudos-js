 const fatorConversao = 0.01;

 function classificacaoIMC(imc) { // função para classificar o resultado do imc
      if (imc < 18.5) {
        return 'Abaixo do peso';    
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade grau 1';
    } else {
        return 'Obesidade grau 2 ou 3';
    }

 } 
  
 function calcularIMC(pessoa) {  // responsável para calcular o imc, recebe o peso e a altura como parâmetros
    let altura = pessoa.altura;
    let peso = pessoa.peso;

    altura = altura * fatorConversao; // converte a altura de cm para metros

    let imc = peso / (altura * altura);
    const classificacao = classificacaoIMC(imc); // chama a função para classificar o resultado do imc
    const resultado = 'O seu IMC é: ' + imc.toFixed(2); // toFixed(2) para limitar o resultado a 2 casas decimais
    const éSaudável = true; // variável para indicar se o resultado é saudável ou não

    return {
        nome: pessoa.nome,
        imc: resultado,
        éSaudável: éSaudável,
        classificação: classificacao
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