function loops(){
 const numberInput=document.getElementById("numberInput").value; 
 const output =document.getElementById("tableoutput");output.innerHTML=``;
for (let i =1; i<=10;i++)
{
const row =document.createElement("tr")
const col1 =document.createElement("td")
const col2 =document.createElement("td")
const col3 =document.createElement("td")

col1.textContent=`${numberInput}`;
col2.textContent=`${i}`;
col3.textContent=`${numberInput * i}`;

row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);

output.appendChild(row);
}

}