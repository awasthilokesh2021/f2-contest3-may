
let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

fetch(url)
.then(response=>response.json())
.then((data)=>{
    let place = document.querySelector('#data-json')
    var out = " ";
   
   for(var k of data){
    out += `
       <tr>
        <td><img src="${k.image}"></td>
        <td>${k.id}</td>
        <td>${k.name}</td>
        <td>${k.symbol}</td>
        <td>${k.current_price}</td>
        <td>${k.total_volume}</td>  
       </tr>
    `;
   }
   place.innerHTML = out;
})
.catch((error )=> console.log('cann`t data fetch'))
