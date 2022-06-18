Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
  }

let f = 0
let c = 0
let k = 0

function calcTemperature(F,C,K)
{
    document.getElementById("temperature-1").value = parseFloat(F).toFixed(2)
    document.getElementById("temperature-2").value = parseFloat(C).toFixed(2)
    document.getElementById("temperature-3").value = parseFloat(K).toFixed(2)
}

function calcCelcius()
{
    let C = document.getElementById("temperature-2").value 
    c = C
    f = (C * 1.8) + 32
	k = C + 273.15
    calcTemperature(f,c,k)
    
}
function calcFahrenheits()
{
    let F = document.getElementById("temperature-1").value 
    k = (F + 459.67) * 5/9
    c = (F - 32) /1.8
    f = F
    calcTemperature(f,c,k)
}
function calcKelvins()
{
    let K = document.getElementById("temperature-3").value 
    f =  (K * 1.8) - 459.67
    c = K - 273.15
    k = K
    calcTemperature(f,c,k)

}
