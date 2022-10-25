console.log("hello there");
const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const submitButton = document.getElementById('submit');
submitButton.onclick = function(){
    if(firstName.value =="" || secondName.value ==""){
    console.log("fill it out properly")
}else{
    console.log("well done")
}
}