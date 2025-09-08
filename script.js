const impressoraSelect = document.getElementById("impressora");
const modeloSelect = document.getElementById("modelo");
const etiquetaImg = document.getElementById("etiqueta-img");
const downloadLink = document.getElementById("download-link");

const modelos = {
    a4: [
        { nome: "3 Colunas x 8 Linhas (Padrão Gondola)", img: "img/3 Colunas x 8 Linhas (Padrão Gondola).png", arquivo: "modelos/3 Colunas x 8 Linhas (Padrão Gondola).rtm" },
        { nome: "3 Colunas X 10 Linhas", img: "img/3 Colunas X 10 Linhas.png", arquivo: "modelos/3 Colunas X 10 Linhas.rtm" },
        { nome: "4 Colunas X 10 Linhas", img: "img/4 Colunas X 10 Linhas.png", arquivo: "modelos/4 Colunas X 10 Linhas.rtm" },
        { nome: "4 Colunas x 18 linhas (com barras)", img: "img/4 Colunas x 18 linhas (com barras).png", arquivo: "modelos/4 Colunas x 18 linhas (com barras).rtm" },
        { nome: "4 Colunas", img: "img/4 Colunas.png", arquivo: "modelos/4 Colunas.rtm" },
        { nome: "5 Colunas x 13 barras", img: "img/5 Colunas x 13 barras.png", arquivo: "modelos/5 Colunas x 13 barras.rtm" },
        { nome: "5 Colunas x 13 Linhas (Nova)", img: "img/5 Colunas x 13 Linhas (Nova).png", arquivo: "modelos/5 Colunas x 13 Linhas (Nova).rtm" },
        { nome: "5 Colunas X 18 Linhas (com barras )", img: "img/5 Colunas X 18 Linhas (com barras ).png", arquivo: "modelos/5 Colunas X 18 Linhas (com barras ).rtm" },
        { nome: "5 Colunas x 18 Linhas", img: "img/5 Colunas x 18 Linhas.png", arquivo: "modelos/5 Colunas x 18 Linhas.rtm" },
        { nome: "6 Colunas x 16 Linhas (lote e barras)", img: "img/6 Colunas x 16 Linhas (lote e barras).png", arquivo: "modelos/6 Colunas x 16 Linhas (lote e barras).rtm" },
        { nome: "6 Colunas", img: "img/6 Colunas.png", arquivo: "modelos/6 Colunas.rtm" },
        { nome: "7 Colunas x 18 Linhas sem preço)", img: "img/7 Colunas x 18 Linhas sem preço).png", arquivo: "modelos/7 Colunas x 18 Linhas sem preço).rtm" },
        { nome: "7 Colunas x 18 Linhas", img: "img/7 Colunas x 18 Linhas.png", arquivo: "modelos/7 Colunas x 18 Linhas.rtm" },
        { nome: "A4 2 Colunas 11cm x 3cm", img: "img/A4 2 Colunas 11cm x 3cm.png", arquivo: "modelos/A4 2 Colunas 11cm x 3cm.rtm" },
        { nome: "A4 2 Colunas promoção", img: "img/A4 2 Colunas promoção.png", arquivo: "modelos/A4 2 Colunas promoção.rtm" }
    ],
    argox: [
        { nome: "Argox 1 Coluna", img: "img/Argox 1 Coluna.png", arquivo: "modelos/Argox 1 Coluna.rtm" },
        { nome: "Argox 2 Coluna", img: "img/Argox 2 Colunas.png", arquivo: "modelos/Argox 2 Coluna.rtm" },
        { nome: "Argox 3 Coluna", img: "img/Argox 3 Colunas.png", arquivo: "modelos/Argox 3 Coluna.rtm" }
    ],
    zebra: [
        { nome: "Zebra 1 Coluna", img: "img/Zebra 1 Coluna.png", arquivo: "modelos/Zebra 1 Coluna.rtm" },
        { nome: "Zebra 2 Coluna", img: "img/Zebra 2 Colunas.png", arquivo: "modelos/Zebra 2 Coluna.rtm" },
        { nome: "Zebra 3 Coluna", img: "img/Zebra 3 Colunas.png", arquivo: "modelos/Zebra 3 Coluna.rtm" }
    ],
    elgin: [
        { nome: "Elgin 1 Coluna", img: "img/Elgin 1 Coluna.png", arquivo: "modelos/Elgin 1 Coluna.rtm" },
        { nome: "Elgin 2 Coluna", img: "img/Elgin 2 Colunas.png", arquivo: "modelos/Elgin 2 Coluna.rtm" },
        { nome: "Elgin 3 Coluna", img: "img/Elgin 3 Colunas.png", arquivo: "modelos/Elgin 3 Coluna.rtm" }
    ]
};

// troca impressora -> popula modelos
impressoraSelect.addEventListener("change", () => {
    const impressora = impressoraSelect.value;
    modeloSelect.innerHTML = '<option value="">-- Escolha o modelo --</option>';
    etiquetaImg.style.display = "none";
    downloadLink.style.display = "none";

    if (impressora && modelos[impressora]) {
        modelos[impressora].forEach((m, index) => {
            const opt = document.createElement("option");
            opt.value = index;
            opt.textContent = m.nome;
            modeloSelect.appendChild(opt);
        });
    }
});

// troca modelo -> mostra preview e prepara download
modeloSelect.addEventListener("change", () => {
    const impressora = impressoraSelect.value;
    const index = modeloSelect.value;

    if (index !== "") {
        const modelo = modelos[impressora][index];

        etiquetaImg.src = modelo.img;
        etiquetaImg.style.display = "block";

        // link de download configurado
        downloadLink.style.display = "inline-block";
        downloadLink.href = modelo.arquivo;
        downloadLink.download = modelo.arquivo.split('/').pop();
    } else {
        etiquetaImg.style.display = "none";
        downloadLink.style.display = "none";
        downloadLink.removeAttribute("href");
        downloadLink.removeAttribute("download");
    }
});

// ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
