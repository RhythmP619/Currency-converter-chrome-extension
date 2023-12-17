document.addEventListener('DOMContentLoaded', function(){

    // transferring query inputs
    let curtype1 = document.getElementById('curtype1');
    let cur1 = document.getElementById('cur1');
    let curtype2 = document.getElementById('curtype2');
    let cur2 = document.getElementById('cur2');

    const API_KEY="ENTER YOUR API KEY HERE"

    // listen to input of the currency you want to convert from
    document.querySelector('#cur1').addEventListener('input', function(){

        // fetches the converted value using api by taking currency codes, and amount_to_convert as parameters and returns 
        fetch(`https://api.api-ninjas.com/v1/convertcurrency?have=${(curtype1.value)}&want=${curtype2.value}&amount=${parseFloat(cur1.value) || 0}`, {
            headers: {
                'X-Api-key': API_KEY
            }
        })
        .then(response =>response.json())
        .then(data => {
            cur2.value=parseFloat(data.new_amount);
            console.log(cur2.value);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    });


    // doing same here for second field to add reversiblity 
    document.querySelector('#cur2').addEventListener('input', function(){

        // fetches the converted value using api by taking currency codes, and amount_to_convert as parameters and returns 
        fetch(`https://api.api-ninjas.com/v1/convertcurrency?have=${(curtype2.value)}&want=${curtype1.value}&amount=${parseFloat(cur2.value) || 0}`, {
            headers: {
                'X-Api-key': API_KEY
            }
        })
        .then(response =>response.json())
        .then(data => {
            cur1.value=parseFloat(data.new_amount);
            console.log(cur1.value);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    });
});