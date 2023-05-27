
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


function searchFunction(){

   let filter = document.getElementById('inputbtn').value.toUpperCase();
 
   let mytable = document.getElementById('table-data')

   let tr = mytable.getElementsByTagName('tr')
   
   for(var i=0;i<tr.length;i++){
      let td = tr[i].getElementsByTagName('td')[0];
      if(td){

         let textvalue = td.textContent || td.innerHTML;

         if(textvalue.toUpperCase().indexOf(filter) > -1)
         {
            tr[i].style.display = "";
         }
         else
         {
            tr[i].style.display = 'none';
         }
      }
   }
}