var original_arry =[];
var new_array =[];
var item = [];
function a_item(){
    var newItem = document.getElementById("anyItem").value;
    if (item.indexOf(newItem) == -1){
        item.push(newItem);
        document.getElementById("oldArray").innerHTML = item;
    }
    else{
        alert ("Item already in Array");
    }
}
function newArrayItem(){
    var nItem = document.getElementById("findItem").value;
    if (item.indexOf(nItem) != -1){
        new_array.push(nItem);
        item.splice (item.indexOf(nItem) ,1);
        document.getElementById("newArray").innerHTML = new_array;
        document.getElementById("oldArray").innerHTML = item;
    }

    

}









// var original_arry = [];
// var new_array = [];
// var item = [];
// function addItem(){
//     var newItem = document.getElementById("userInput").value;
//     if(item.indexOf(newItem) == -1){
//        item.push(newItem);
//     document.getElementById("oldarray").innerHTML=item;
//     }
//     else{
//       alert("Item already in cart");
//     } 
// }
// function newArrItem(){
//  var nItem = document.getElementById("new_Arr_Item").value;
//  if(item.indexOf(nItem) != -1){
//   new_array.push(nItem);
//   item.splice(item.indexOf(nItem),1);
//   document.getElementById("newarray").innerHTML=new_array;
//  document.getElementById("oldarray").innerHTML=item;
//  }
//  else{
//    alert("hii");
//  }
// }
// <body>
//    <h1> Original Array -<span id= "oldarray"></span></h1>
    
//     <input type="text" id="userInput" value=""> 
//     <button onclick="addItem()"> ADD</button>
//     <h1> New Array -<span id= "newarray"></span> </h1>
//      <input type="text" id="new_Arr_Item" value=""> 
//     <button onclick="newArrItem()"> ADD</button>
//   </body>
// </html>