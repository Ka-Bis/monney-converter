'use strict'

let url = 'https://data.fixer.io/api/latest? access_key=078b06aac10b510c81e5743bba8855d3&base=EUR&symbols=GBP,USD,EUR,JPY,AUD,LAK'

function recupValeur() {
    $.ajax( // Fonction ajax jquery
        {
            url: url, 
            type: 'GET', 
            success: function(res,status,req) { // resultat de la requete
                // console.log(res);
                // console.log(req);

                let rates =  res.rates;
                console.log(rates);
                let amount = document.getElementById('fromAmount').value;
                let from = document.getElementById('from').value;
                let to = document.getElementById('to').value;
                console.log(amount,from,to);

                let result = amount * rates[to] / rates[from];
                document.getElementById('toAmount').value = result;
                
        
            }
        }
        )
}
