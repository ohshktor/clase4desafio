// Tarea 1
let horario = prompt ("Que hora es?")
    if (horario > 0 && horario <= 6){
        console.log("Buenas Madrugadas")
    } else if (horario > 6 && horario < 12){
        console.log("Buenos Dias")
    } else if (horario < 19 && horario >= 12) {
        console.log("Buenas Tardes")
    } else if(horario >= 19 && horario <= 24) {
        console.log("Buenas Noches")

    } else {
        console.log("No es un horario valido")
    } 


    // Tarea 2

let x = Number(prompt ("Ingrese el digito de la tabla que desea"))

let y = 1

while( y <= 10) {
    console.log(`${x} x ${y} es: ${x*y}`)
    y++
} 

//Tarea 3

let despensa = Number(prompt(`Elija lo que desea comprar de despensa:
1. Leche
2. Arroz
3. Tortillas
4. Refresco
5. Jamon`
))

let precio = 0

switch (despensa) {
    case 1:
        console.log("Leche")
        precio = 20
        break;
    case 2:
        console.log("Arroz")
        precio = 15
        break;
    case 3:
        console.log("Tortillas")
        precio = 12
        break
    case 4:
        console.log("Refresco")
        precio = 28
        break    
    case 5:
        console.log("Jamon")
        precio = 16
        break
    default:
        console.log("No ingresaste una opcion valida")
        break;
}
alert(`Usted debe ${precio}`)