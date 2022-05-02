// write js code here corresponding to index.html
// You should add submit event on the form
var arr=JSON.parse(localStorage.getItem("schedule"))||[];
document.querySelector("#masaiForm").addEventListener("submit",myfunction)
function myfunction(){
    event.preventDefault();
    var obj={
     number:document.querySelector("#matchNum").value,
     teama:document.querySelector("#teamA").value,
     teamb:document.querySelector("#teamB").value,
     date:document.querySelector("#date").value,
     venue:document.querySelector("#venue").value

    };

arr.push(obj);
localStorage.setItem("schedule",JSON.stringify(arr));





}