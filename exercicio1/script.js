const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
// usado para acessar o indice de cada item do array. INDICE COMEÇA NO 0
for(i in array) {
    console.log(`Temporada ${Number(i)+1} e número de gols ${array[i]} `)
}