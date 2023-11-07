function verify() {
    console.log("s, r, k")
    let s = parseInt(elementS.value);
    let r = parseInt(elementR.value);
    let k = parseInt(elementK.value);
    console.log(s, r, k)

    let a = Math.sqrt(s)
    let b =2 * (r+k)


    if (a < b) {
       result = "Нельзя поместить"
        document.getElementById("result").innerText = messageText + result;
    document.getElementsByName('result')[0].value = result;
        check = false;
    }

    else {
        result = "Можно поместить"
        document.getElementById("result").innerText = messageText + result;
    document.getElementsByName('result')[0].value = result;
        check = true;
    }

}
function send() {
if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}
function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;


const elementS = document.getElementById("s");
elementS.addEventListener('input', verify);
const elementR = document.getElementById("r");
elementR.addEventListener('input', verify);
const elementK = document.getElementById("k");
elementK.addEventListener('input', verify);

const elementVerify = document.getElementById("send");
elementVerify.addEventListener('click', verify_send);