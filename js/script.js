function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Reemplazar la imagen con el texto encriptado
    document.getElementById("placeholderImage").classList.add("d-none");
    document.getElementById("outputText").classList.remove("d-none");
    document.getElementById("outputText").textContent = outputText ? outputText : "Ningún mensaje fue encontrado";

    // Mostrar el botón de copiar
    document.getElementById("copyBtn").classList.remove("d-none");
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Reemplazar la imagen con el texto desencriptado
    document.getElementById("placeholderImage").classList.add("d-none");
    document.getElementById("outputText").classList.remove("d-none");
    document.getElementById("outputText").textContent = outputText ? outputText : "Ningún mensaje fue encontrado";

    // Mostrar el botón de copiar
    document.getElementById("copyBtn").classList.remove("d-none");
}

function copyText() {
    let outputText = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Error al copiar texto: ", err);
    });
}

