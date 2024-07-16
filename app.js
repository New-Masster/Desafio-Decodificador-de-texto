function criptografar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarMensagem(textoCriptografado);
}

function descriptografar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarMensagem(textoDescriptografado);
}

function mostrarMensagem(texto) {
    let titulo = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");

    if (texto) {
        titulo.textContent = "Texto processado:";
        paragrafo.textContent = texto;
    } else {
        titulo.textContent = "Nenhuma mensagem encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    }
}

function copiarTexto() {
    let paragrafo = document.getElementById("paragrafo");
    let texto = paragrafo.textContent;

    if (texto !== "Digite um texto que você deseja criptografar ou descriptografar.") {
        navigator.clipboard.writeText(texto).then(() => {
            swal("Sucesso", "Texto copiado para a área de transferência!", "success");
        }).catch(err => {
            swal("Erro", "Não foi possível copiar o texto!", "error");
        });
    } else {
        swal("Aviso", "Nada para copiar!", "warning");
    }
}
