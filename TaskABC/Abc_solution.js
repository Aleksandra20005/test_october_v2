function verify() {
    console.log("s, r, k")
    let s = parseInt(elementS.innerText);
    let r = parseInt(elementR.innerText);
    let k = parseInt(elementK.innerText);
    console.log(s, r, k)

    let a = Math.sqrt(s)
    let b =2 * (r+k)


    if (a < b) {
       result = "нельзя поместить"
        document.getElementById("result").innerText =  result;
    }
    else {
        result = "Можно поместить"
        document.getElementById("result").innerText =  result;
    }

}

const elementS = document.getElementById("s");
const elementR = document.getElementById("r");
const elementK = document.getElementById("k");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);