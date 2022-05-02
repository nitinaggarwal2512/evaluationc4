// write js code here corresponding to favourites.html
var out2=JSON.parse(localStorage.getItem("favourites"))||[];
display(out2);

function display(out2){

     out2.forEach(function(ele){

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
        td6.innerText="Delete";
        td6.addEventListener("click",function(){
            del(ele);
        })
        
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    


     });

    


}
function del(ele){
    
    var newarr=out2.splice(ele,1);
    localStorage.setItem("new",JSON.stringify(newarr));
   var abc= JSON.parse(localStorage.getItem("new"));
   window.location.reload();
    
    
    

    
    
    
    
}
