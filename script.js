let select = document.querySelectorAll('.temperatura');
let input_temperatura = document.getElementById('input_temperatura');
let output_temperatura = document.getElementById('output_temperatura');

//lista de temperaturas para conversao
const opçoes = ['Celsius','Fahrenheit','Kelvin'] 

//para cada valor de entrada se for menor que i adicionar mais um
//onde i é as temperaturas para conversao
for(i = 0; i < opçoes.length; i++) {
    //adicona opções select 0
    select[0].innerHTML += `<option>${opçoes[i]}</option>`
    //adicona opções select 0
    select[1].innerHTML += `<option>${opçoes[i]}</option>`

    console.log(select[0])
}

//função conversao
function converter() {
        /* FORMULAS DE CONVERSAO 
    celsius_fahrenheit = (celsius * 9/5) + 32
    celsius_kelvin = celsius + 273.15

    fahrenheit_celsius = (fahrenheit - 32) * 5/9
    fahrenheit_kelvin = (fahrenheit - 32) * 5/9 + 273.15

    kelvin_celsius = kelvin - 273.15
    kelvin_fahrenheit = (kelvin - 273.15) * 9/5 + 32
    */

    //se valor so select 0 for diferente do valor do selct 1
    if(select[0].value != select[1].value) {
        console.log('Válido.')

        //celsius_fahrenheit
        if(select[0].value === opçoes[0] && select[1].value === opçoes[1]) {
            let celsius_fahrenheit = (input_temperatura.value * 9/5) + 32
            output_temperatura.value = celsius_fahrenheit.toFixed(2)
        } 
        //celsius_kelvin
        else if(select[0].value === opçoes[0] && select[1].value === opçoes[2]) {
            let celsius_kelvin = parseFloat(input_temperatura.value) + 273.15
            output_temperatura.value = parseFloat(celsius_kelvin).toFixed(2)
        }
        //fahrenheit_celsius
        else if(select[0].value === opçoes[1] && select[1].value === opçoes[0]) {
            let fahrenheit_celsius = (input_temperatura.value - 32) * 5/9
            output_temperatura.value = fahrenheit_celsius.toFixed(2)
        }
        //fahrenheit_kelvin
        else if(select[0].value === opçoes[1] && select[1].value === opçoes[2]) {
            let fahrenheit_kelvin = parseFloat(input_temperatura.value - 32) * 5/9 + 273.15
            output_temperatura.value = parseFloat(fahrenheit_kelvin).toFixed(2)
        }
        //kelvin_celsius
        else if(select[0].value === opçoes[2] && select[1].value === opçoes[0]) {
            let kelvin_celsius = parseFloat(input_temperatura.value - 273.15) 
            output_temperatura.value = parseFloat(kelvin_celsius).toFixed(2)
        }
        //kelvin_fahrenheit
        else if(select[0].value === opçoes[2] && select[1].value === opçoes[1]) {
            let kelvin_fahrenheit = parseFloat(input_temperatura.value - 273.15) * 9/5 + 32
            output_temperatura.value = parseFloat(kelvin_fahrenheit).toFixed(2)
        }
    }   else {
            alert('Selecione duas temperaturas diferentes.')
        }
}