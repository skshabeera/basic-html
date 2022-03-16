const userinput=document.querySelector("#user-input")
const submitBtn=document.querySelector("#submit-btn")
const output=document.querySelector("#output")
function character(){
    if (userinput.value.length<=10){
        output.innerText=10-userinput.value.length +` more characters left`
    }
    else{
        output.innerText=`you have more than 10 characters in user`
    }


}




submitBtn.addEventListener("click",character)