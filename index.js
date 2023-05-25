const textArea = document.querySelector(".text-area");
const message = document.querySelector (".message");


function buttonEncrypt() {
    const encriptar = encrypt(textArea.value)
    message.value = encriptar; 
    textArea.value="";
    message.style.backgroundImage = "none";
 }

 function buttonDecrypt() {
    const desencriptar = decrypt(textArea.value)
    message.value = desencriptar;
    textArea.value="";
    message.style.backgroundImage = "none";
 }


function encrypt(stringEncrypt){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){ 
        if (stringEncrypt.includes(matrizCodigo[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
        }
    }
    return stringEncrypt
}

function decrypt(stringEncrypt){
    let matrizCodigo = [["ufat", "u"], ["ober","o"], ["ai","a"], ["imes","i"], ["enter","e"]];
    stringEncrypt = stringEncrypt.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncrypt.includes(matrizCodigo[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncrypt
}

 const copy = () => {
    const textareaValue = document.querySelector("#mensaje-textarea").value
    navigator.clipboard.writeText(textareaValue).then(() => {
        console.log('content copied to clipboard');
    }, () => {
        console.error('failed copy');
    }
    );
 }
