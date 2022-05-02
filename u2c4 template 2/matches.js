// write js code here corresponding to matches.html

var out=JSON.parse(localStorage.getItem("schedule"));
console.log(out);
var arr2=JSON.parse(localStorage.getItem("favourites"))||[];

displaydata(out);

function displaydata(out){
out.forEach(function(ele){
    tr=document.createElement("tr");
    td1=document.createElement("td");
    td1.innerText=ele.number;
    td2=document.createElement("td");
    td2.innerText=ele.teama;
    td3=document.createElement("td");
    td3.innerText=ele.teamb;
    td4=document.createElement("td");
    td4.innerText=ele.date;
    td5=document.createElement("td");
    td5.innerText=ele.venue;
    td6=document.createElement("td");
    td6.innerText="Add to Favourites";
    td6.style.color="green";
    td6.addEventListener("click",function(){
         favoritesfunction(ele);

    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);



})





}

function favoritesfunction(ele){
arr2.push(ele);
localStorage.setItem("favourites",JSON.stringify(arr2));


}
