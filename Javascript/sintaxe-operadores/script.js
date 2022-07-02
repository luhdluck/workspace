function comparaNumeros(num1, num2){
    if (!num1 || !num2) return "Defina dois numeros maiores que zero!"
   const primeiraFrase = cria_primeira_frase (num1, num2);
   const segundaFrase = cria_segunda_frase (num1, num2);

 return `${primeiraFrase} ${segundaFrase}`

}
function cria_primeira_frase(num1 , num2) {
    let iguais = '';

    if(num1 !== num2) {
        iguais = 'não';
    }
    return `Os numeros ${num1}  e ${num2} ${iguais} são iguais.`
};

function cria_segunda_frase (num1, num2){
    const soma = num1 + num2;
    compara10 = soma > 10;
    compara20 = soma > 20;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if (compara10) {
        resultado10 = 'maior'
    }

    if (compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
};

console.log(comparaNumeros());