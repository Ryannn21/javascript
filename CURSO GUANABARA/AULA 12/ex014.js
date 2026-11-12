var idade = 12
console.log(`Você tem ${idade}`)
if (idade <= 12) {
    console.log('Você e uma criança')
} else if (idade >= 13 && idade <= 17) {
    console.log('Você e um Adolecente') 
} else if (idade >= 18 && idade <= 59) {
    console.log('Você e um Adulto')
} else if (idade >= 60) {
    console.log('Voce e um idoso')
}