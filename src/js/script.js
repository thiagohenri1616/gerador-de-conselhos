const btn = document.querySelector('.active');
const titulo = document.querySelector('.titulo');
const msn = document.querySelector('.mensagem');


async function getAdvice() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    titulo.innerHTML = adviceId;
    msn.innerHTML = adviceText;
}

btn.addEventListener("click", getAdvice);
getAdvice();