function calculateIMC(event){
    event.preventDefault()
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var formulaIMC = weight / (height * height);
    if(formulaIMC < 17) {
        var resultIMC = document.getElementById('resultIMC')
        resultIMC.innerHTML = `<br/> O seu IMC é ${formulaIMC.toFixed(2)} <br/> Está muito abaixo do peso :( .`
        return false;
    } else if (formulaIMC > 17 && formulaIMC < 18.49) {
        var resultIMC = document.getElementById('resutltIMC')
        resultIMC.innerHTML = `<br/> O seu IMC é ${formulaIMC.toFixed(2)} <br/> Está abaixo do peso =/ .`
        return false;
    } else if (formulaIMC > 18.50 && formulaIMC < 24.99) {
        var resultIMC = document.getElementById('resultIMC')
        resultIMC.innerHTML = `<br/> O seu IMC é ${formulaIMC.toFixed(2)} <br/> Está no peso normal :) .`
        return false;
    } else {
        var resultIMC = document.getElementById('resultIMC')
        resultIMC.innerHTML = `</br> O seu IMC é ${formulaIMC.toFixed(2)} <br/> Está acima do peso =o.`
        return false;
    }
}