//𝐶apital final = 𝐶apital inicial ∗ (1 + 𝑖) ^ 𝑛
// i = interes
// n = prerido de tiempo

exports.calcularInteresCompuesto = (capitalInicial, plazo, tasaInteres) => {

    let Deposito = capitalInicial;
    let saldoFinal = 0;
    let periodo = 0;
    let interes = 0;
    let TasaInteresDecimal = tasaInteres / 100;
    const cuotas = [];

    periodo = Math.round(plazo * 12);

    saldoFinal = capitalInicial ;

    
    
    console.log(saldoFinal);

    while (mes != plazo) {

        interes = capitalInicial * TasaInteresDecimal;
        interes = interes.toFixed(2);

        saldoFinal = saldoFinal +interes;
        saldoFinal = saldoFinal.toFixed(2);


        periodo++;

        cuotas.push({
            periodo,
            Deposito,
            interes,
            saldoFinal,

        });
        
    }
    return cuotas;
}