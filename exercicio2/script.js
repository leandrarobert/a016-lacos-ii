let numero = Number(prompt("Escolha um número de 1 a 10"))
const numeros = [1, 2 , 3 ,4 , 5 ,6 ,7 ,8 ,9 ,10]

for ( i in numeros) {
    console.log(numeros[i]* numero)
} 
// o i tem o valor do indice, e ele vai repetir o processo de impressão a cada indice (que no caso é o numero) 