/* =========================================================
   ANOMALIAS DA VISÃO
   SCRIPT.JS — VERSÃO FINAL
========================================================= */


/* =========================================================
   1. MENU MOBILE
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");

        menuToggle.textContent =
            navLinks.classList.contains("mobile-open")
                ? "✕"
                : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-open");
            menuToggle.textContent = "☰";
        });
    });
}


/* =========================================================
   2. MODO CLARO / ESCURO
========================================================= */

const themeButton =
    document.querySelector("#themeToggle");

if (themeButton) {

    const savedTheme =
        localStorage.getItem("vision-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeButton.textContent = "☀️";
    }

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const light =
            document.body.classList.contains("light-mode");

        localStorage.setItem(
            "vision-theme",
            light ? "light" : "dark"
        );

        themeButton.textContent =
            light ? "☀️" : "🌙";
    });
}


/* =========================================================
   3. ACESSIBILIDADE — AUMENTAR / DIMINUIR FONTE
========================================================= */

let fontScale = 1;

const increaseFont =
    document.querySelector("#increaseFont");

const decreaseFont =
    document.querySelector("#decreaseFont");

function updateFontSize() {

    document.documentElement.style.fontSize =
        `${16 * fontScale}px`;
}

if (increaseFont) {

    increaseFont.addEventListener("click", () => {

        if (fontScale < 1.3) {
            fontScale += 0.1;
            updateFontSize();
        }

    });
}

if (decreaseFont) {

    decreaseFont.addEventListener("click", () => {

        if (fontScale > 0.8) {
            fontScale -= 0.1;
            updateFontSize();
        }

    });
}


/* =========================================================
   4. ESCOLHA DE FONTE
========================================================= */

const fontSelector =
    document.querySelector("#fontSelector");

if (fontSelector) {

    fontSelector.addEventListener("change", () => {

        const font =
            fontSelector.value;

        document.body.style.fontFamily =
            font;
    });
}


/* =========================================================
   5. ANIMAÇÕES AO ROLAR
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   6. LABORATÓRIO DA VISÃO
========================================================= */

const visionType =
    document.querySelector("#visionType");

const intensity =
    document.querySelector("#intensity");

const intensityValue =
    document.querySelector("#intensityValue");

const simulationObject =
    document.querySelector("#simulationObject");

const labExplanation =
    document.querySelector("#labExplanation");

const resetLab =
    document.querySelector("#resetLab");


const visionData = {

    normal: {

        name: "Visão normal",

        explanation:
            "Na visão normal, a imagem é focalizada corretamente sobre a retina, permitindo uma percepção nítida dos objetos.",

        filter: "none"

    },

    miopia: {

        name: "Miopia",

        explanation:
            "Na miopia, objetos próximos costumam ser vistos com mais nitidez, enquanto objetos distantes podem parecer borrados.",

        filter:
            "blur(3px) contrast(1.05)"

    },

    hipermetropia: {

        name: "Hipermetropia",

        explanation:
            "Na hipermetropia, existe dificuldade principalmente para focalizar objetos próximos.",

        filter:
            "blur(2px) brightness(1.08)"

    },

    astigmatismo: {

        name: "Astigmatismo",

        explanation:
            "O astigmatismo pode causar uma visão distorcida ou borrada devido à forma irregular da córnea ou do sistema óptico.",

        filter:
            "blur(2px) contrast(.8) skewX(2deg)"

    },

    presbiopia: {

        name: "Presbiopia",

        explanation:
            "A presbiopia está relacionada à perda gradual da capacidade de focalizar objetos próximos, geralmente associada ao envelhecimento.",

        filter:
            "blur(2.5px)"

    },

    daltonismo: {

        name: "Daltonismo",

        explanation:
            "O daltonismo envolve diferenças na percepção de determinadas cores. Ele não significa necessariamente enxergar tudo em preto e branco.",

        filter:
            "grayscale(.55) saturate(.45)"

    }

};


function updateLab() {

    if (!visionType ||
        !simulationObject ||
        !intensity) {
        return;
    }

    const selected =
        visionType.value;

    const level =
        Number(intensity.value);

    const data =
        visionData[selected];

    if (!data) return;

    if (intensityValue) {

        intensityValue.textContent =
            `${level}%`;

    }

    let filter =
        data.filter;

    if (selected === "normal") {

        simulationObject.style.filter =
            "none";

    } else {

        /*
        Ajusta a intensidade do efeito.
        */

        const amount =
            level / 50;

        if (selected === "miopia") {

            simulationObject.style.filter =
                `blur(${2 * amount}px) contrast(1.05)`;

        }

        else if (selected === "hipermetropia") {

            simulationObject.style.filter =
                `blur(${1.5 * amount}px) brightness(1.08)`;

        }

        else if (selected === "astigmatismo") {

            simulationObject.style.filter =
                `blur(${1.5 * amount}px) contrast(.8)`;

            simulationObject.style.transform =
                `scaleX(${1 + (level / 500)})`;

        }

        else if (selected === "presbiopia") {

            simulationObject.style.filter =
                `blur(${2 * amount}px)`;

        }

        else if (selected === "daltonismo") {

            simulationObject.style.filter =
                `grayscale(${level / 100}) saturate(.45)`;

        }

    }

    if (selected !== "astigmatismo") {

        simulationObject.style.transform =
            "scaleX(1)";

    }

    if (labExplanation) {

        labExplanation.innerHTML = `
            <strong>${data.name}</strong><br>
            ${data.explanation}
        `;

    }
}


if (visionType) {

    visionType.addEventListener(
        "change",
        updateLab
    );

}

if (intensity) {

    intensity.addEventListener(
        "input",
        updateLab
    );

}

if (resetLab) {

    resetLab.addEventListener("click", () => {

        if (visionType) {
            visionType.value = "normal";
        }

        if (intensity) {
            intensity.value = 0;
        }

        updateLab();

    });

}

updateLab();


/* =========================================================
   7. MITOS E VERDADES
========================================================= */

document.querySelectorAll(".myth-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("active");

        });

    });


/* =========================================================
   8. FAQ
========================================================= */

document.querySelectorAll(".faq-item")
    .forEach(item => {

        const question =
            item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            document
                .querySelectorAll(".faq-item.active")
                .forEach(openItem => {

                    if (openItem !== item) {
                        openItem.classList.remove("active");
                    }

                });

            item.classList.toggle("active");

        });

    });


/* =========================================================
   9. QUIZ
========================================================= */

const quizQuestions = [

    {
        question:
            "Qual anomalia costuma dificultar a visão de objetos distantes?",

        answers: [
            "Hipermetropia",
            "Miopia",
            "Presbiopia",
            "Daltonismo"
        ],

        correct: 1
    },

    {
        question:
            "Qual estrutura do olho recebe a luz e participa da formação das imagens?",

        answers: [
            "Retina",
            "Íris",
            "Pupila",
            "Nervo óptico"
        ],

        correct: 0
    },

    {
        question:
            "Qual estrutura controla a quantidade de luz que entra no olho?",

        answers: [
            "Cristalino",
            "Retina",
            "Íris",
            "Nervo óptico"
        ],

        correct: 2
    },

    {
        question:
            "O astigmatismo pode causar:",

        answers: [
            "Somente dificuldade para distinguir cores",
            "Distorção ou borramento da visão",
            "Apenas cegueira noturna",
            "Somente dor de cabeça"
        ],

        correct: 1
    },

    {
        question:
            "O daltonismo está relacionado principalmente à percepção de:",

        answers: [
            "Sons",
            "Temperatura",
            "Cores",
            "Distâncias"
        ],

        correct: 2
    },

    {
        question:
            "A presbiopia está geralmente relacionada:",

        answers: [
            "Ao envelhecimento",
            "À falta de luz",
            "Ao excesso de cores",
            "À alteração da pupila por alguns minutos"
        ],

        correct: 0
    },

    {
        question:
            "Qual destas atitudes ajuda nos cuidados com os olhos?",

        answers: [
            "Ignorar sintomas persistentes",
            "Usar medicamentos por conta própria",
            "Realizar avaliações oftalmológicas quando indicadas",
            "Nunca descansar os olhos"
        ],

        correct: 2
    }

];


let currentQuestion = 0;

let score = 0;

const questionElement =
    document.querySelector("#quizQuestion");

const answersElement =
    document.querySelector("#quizAnswers");

const progressBar =
    document.querySelector("#quizProgress");

const quizResult =
    document.querySelector("#quizResult");

const retryQuiz =
    document.querySelector("#retryQuiz");


function loadQuestion() {

    if (!questionElement ||
        !answersElement) {
        return;
    }

    const question =
        quizQuestions[currentQuestion];

    questionElement.textContent =
        question.question;

    answersElement.innerHTML = "";

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.textContent =
                answer;

            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );

            answersElement.appendChild(
                button
            );

        }
    );

    if (progressBar) {

        const progress =
            (currentQuestion /
                quizQuestions.length) * 100;

        progressBar.style.width =
            `${progress}%`;

    }

}


function selectAnswer(index) {

    const question =
        quizQuestions[currentQuestion];

    const buttons =
        answersElement.querySelectorAll(
            ".answer"
        );

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (index === question.correct) {

        buttons[index]
            .classList.add("correct");

        score++;

    } else {

        buttons[index]
            .classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");

    }

    setTimeout(() => {

        currentQuestion++;

        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            finishQuiz();

        } else {

            loadQuestion();

        }

    }, 900);

}


function finishQuiz() {

    if (questionElement) {

        questionElement.textContent =
            "🧠 Resultado do laboratório";

    }

    if (answersElement) {

        answersElement.innerHTML = `
            <div class="quiz-result">
                <h3>Você acertou ${score} de ${quizQuestions.length}!</h3>
                <p>
                    ${
                        score === quizQuestions.length
                            ? "🏆 Excelente! Você domina o assunto."
                            : score >= 5
                                ? "🔥 Muito bem! Você conhece bastante sobre visão."
                                : score >= 3
                                    ? "👍 Bom trabalho! Continue aprendendo."
                                    : "📚 Que tal revisar o conteúdo e tentar novamente?"
                    }
                </p>
            </div>
        `;

    }

    if (progressBar) {

        progressBar.style.width =
            "100%";

    }

    if (retryQuiz) {

        retryQuiz.style.display =
            "inline-flex";

    }

}


if (retryQuiz) {

    retryQuiz.addEventListener(
        "click",
        () => {

            currentQuestion = 0;

            score = 0;

            retryQuiz.style.display =
                "none";

            loadQuestion();

        }
    );

}

loadQuestion();


/* =========================================================
   10. PESQUISA
========================================================= */

const searchButton =
    document.querySelector("#searchButton");

const searchInput =
    document.querySelector("#searchInput");

if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            if (!searchInput) return;

            const term =
                searchInput.value
                    .trim()
                    .toLowerCase();

            if (!term) return;

            const sections =
                document.querySelectorAll(
                    "section"
                );

            let found = false;

            sections.forEach(section => {

                if (
                    !found &&
                    section.innerText
                        .toLowerCase()
                        .includes(term)
                ) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });

                    found = true;

                }

            });

            if (!found) {

                alert(
                    "Não encontramos esse termo no site."
                );

            }

        }
    );

}


/* =========================================================
   11. ESC — FECHAR MENU
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            if (navLinks) {

                navLinks.classList.remove(
                    "mobile-open"
                );

            }

            if (menuToggle) {

                menuToggle.textContent =
                    "☰";

            }

        }

    }
);


/* =========================================================
   12. BOTÕES "SAIBA MAIS"
========================================================= */

document
    .querySelectorAll("[data-scroll]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.querySelector(
                        button.dataset.scroll
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* =========================================================
   13. EFEITO PARALLAX LEVE NO HERO
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");

if (heroVisual) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (window.innerWidth / 2 -
                    event.clientX) / 50;

            const y =
                (window.innerHeight / 2 -
                    event.clientY) / 50;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* =========================================================
   14. ANO AUTOMÁTICO
========================================================= */

document
    .querySelectorAll("[data-year]")
    .forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


/* =========================================================
   15. LOG
========================================================= */

console.log(
    "%c ANOMALIAS DA VISÃO ",
    "background:#071b2d;color:#00e5ff;font-size:18px;font-weight:bold;padding:8px;"
);

console.log(
    "Laboratório da Visão carregado com sucesso."
);
