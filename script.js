// =====================================================
// ANOMALIAS DA VISÃO — SCRIPT FINAL
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================================
    // TEMA
    // =================================================

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            themeToggle.textContent =
                document.body.classList.contains("light-mode")
                    ? "☀️"
                    : "🌙";
        });
    }


    // =================================================
    // ACESSIBILIDADE — TAMANHO DA FONTE
    // =================================================

    let fontSize = 100;

    const increaseFont = document.getElementById("increaseFont");
    const decreaseFont = document.getElementById("decreaseFont");

    if (increaseFont) {

        increaseFont.addEventListener("click", () => {

            if (fontSize < 130) {

                fontSize += 10;

                document.documentElement.style.fontSize =
                    fontSize + "%";
            }
        });
    }


    if (decreaseFont) {

        decreaseFont.addEventListener("click", () => {

            if (fontSize > 80) {

                fontSize -= 10;

                document.documentElement.style.fontSize =
                    fontSize + "%";
            }
        });
    }


    // =================================================
    // ESCOLHER FONTE
    // =================================================

    const fontSelector =
        document.getElementById("fontSelector");

    if (fontSelector) {

        fontSelector.addEventListener("change", () => {

            document.body.style.fontFamily =
                fontSelector.value;

        });
    }


    // =================================================
    // PESQUISA
    // =================================================

    const searchInput =
        document.getElementById("searchInput");

    const searchButton =
        document.getElementById("searchButton");


    function pesquisar() {

        if (!searchInput) return;

        const termo =
            searchInput.value.trim().toLowerCase();

        if (!termo) return;

        const elementos =
            document.querySelectorAll(
                "section h2, section h3"
            );

        let encontrado = null;

        elementos.forEach(elemento => {

            if (
                !encontrado &&
                elemento.textContent
                    .toLowerCase()
                    .includes(termo)
            ) {

                encontrado = elemento;

            }

        });


        if (encontrado) {

            encontrado.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            encontrado.style.transition =
                "0.3s";

            encontrado.style.transform =
                "scale(1.05)";

            setTimeout(() => {

                encontrado.style.transform =
                    "scale(1)";

            }, 1000);

        } else {

            alert(
                "Não encontramos esse conteúdo no site."
            );

        }
    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            pesquisar
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    pesquisar();

                }

            }
        );

    }



    // =================================================
    // LABORATÓRIO DA VISÃO
    // =================================================

    const visionType =
        document.getElementById("visionType");

    const intensity =
        document.getElementById("intensity");

    const intensityValue =
        document.getElementById("intensityValue");

    const simulationObject =
        document.getElementById("simulationObject");

    const labExplanation =
        document.getElementById("labExplanation");

    const resetLab =
        document.getElementById("resetLab");


    // Verificação para saber se o laboratório existe

    if (
        visionType &&
        intensity &&
        intensityValue &&
        simulationObject &&
        labExplanation
    ) {


        function atualizarLaboratorio() {

            const tipo =
                visionType.value;

            const valor =
                Number(intensity.value);


            intensityValue.textContent =
                valor + "%";


            // Remove efeitos antigos

            simulationObject.style.filter = "";

            simulationObject.style.transform = "";

            simulationObject.style.background = "";

            simulationObject.style.boxShadow = "";

            simulationObject.style.opacity = "1";


            // =========================================
            // VISÃO NORMAL
            // =========================================

            if (tipo === "normal") {

                labExplanation.innerHTML = `
                    <strong>👁️ Visão normal</strong>
                    <br>
                    A imagem está sendo apresentada
                    sem uma alteração visual simulada.
                `;

            }


            // =========================================
            // MIOPIA
            // =========================================

            if (tipo === "miopia") {

                const blur =
                    (valor / 100) * 8;

                simulationObject.style.filter =
                    `blur(${blur}px)`;

                labExplanation.innerHTML = `
                    <strong>🔵 Miopia</strong>
                    <br>
                    Na miopia, objetos distantes podem
                    apresentar menor nitidez.
                    <br><br>
                    Intensidade da simulação:
                    ${valor}%.
                `;

            }


            // =========================================
            // HIPERMETROPIA
            // =========================================

            if (tipo === "hipermetropia") {

                const blur =
                    (valor / 100) * 6;

                simulationObject.style.filter =
                    `blur(${blur}px) brightness(1.08)`;

                labExplanation.innerHTML = `
                    <strong>🟣 Hipermetropia</strong>
                    <br>
                    A focalização de objetos próximos
                    pode apresentar dificuldade.
                    <br><br>
                    Intensidade da simulação:
                    ${valor}%.
                `;

            }


            // =========================================
            // ASTIGMATISMO
            // =========================================

            if (tipo === "astigmatismo") {

                const blur =
                    (valor / 100) * 4;

                const rotate =
                    (valor / 100) * 1.5;

                simulationObject.style.filter =
                    `blur(${blur}px)`;

                simulationObject.style.transform =
                    `skew(${rotate}deg, ${rotate}deg)`;

                labExplanation.innerHTML = `
                    <strong>✨ Astigmatismo</strong>
                    <br>
                    O astigmatismo pode provocar
                    borramento ou distorção das imagens.
                    <br><br>
                    Intensidade da simulação:
                    ${valor}%.
                `;

            }


            // =========================================
            // PRESBIOPIA
            // =========================================

            if (tipo === "presbiopia") {

                const blur =
                    (valor / 100) * 7;

                simulationObject.style.filter =
                    `blur(${blur}px)`;

                labExplanation.innerHTML = `
                    <strong>🔍 Presbiopia</strong>
                    <br>
                    A capacidade de focalizar objetos
                    próximos diminui progressivamente
                    com o envelhecimento.
                    <br><br>
                    Intensidade da simulação:
                    ${valor}%.
                `;

            }


            // =========================================
            // DALTONISMO
            // =========================================

            if (tipo === "daltonismo") {

                const grau =
                    valor / 100;

                simulationObject.style.filter =
                    `grayscale(${grau * 0.8}) 
                     sepia(${grau * 0.2})`;

                labExplanation.innerHTML = `
                    <strong>🎨 Daltonismo</strong>
                    <br>
                    O daltonismo envolve diferenças
                    na percepção de determinadas cores.
                    <br><br>
                    A simulação é apenas ilustrativa
                    e não representa todos os tipos
                    de daltonismo.
                    <br><br>
                    Intensidade:
                    ${valor}%.
                `;

            }

        }


        visionType.addEventListener(
            "change",
            atualizarLaboratorio
        );


        intensity.addEventListener(
            "input",
            atualizarLaboratorio
        );


        if (resetLab) {

            resetLab.addEventListener("click", () => {

                visionType.value = "normal";

                intensity.value = 0;

                atualizarLaboratorio();

            });

        }


        // Inicializa

        atualizarLaboratorio();

    }



    // =================================================
    // QUIZ
    // =================================================

    const quizQuestion =
        document.getElementById("quizQuestion");

    const quizAnswers =
        document.getElementById("quizAnswers");

    const quizProgress =
        document.getElementById("quizProgress");

    const retryQuiz =
        document.getElementById("retryQuiz");


    const perguntas = [

        {
            pergunta:
                "Qual condição costuma dificultar a visão de objetos distantes?",

            respostas: [
                "Miopia",
                "Presbiopia",
                "Daltonismo",
                "Catarata"
            ],

            correta: 0
        },


        {
            pergunta:
                "Qual estrutura do olho recebe os estímulos luminosos?",

            respostas: [
                "Íris",
                "Retina",
                "Pupila",
                "Córnea"
            ],

            correta: 1
        },


        {
            pergunta:
                "Qual estrutura ajuda a focalizar a imagem?",

            respostas: [
                "Cristalino",
                "Nervo óptico",
                "Íris",
                "Retina"
            ],

            correta: 0
        },


        {
            pergunta:
                "O astigmatismo pode causar:",

            respostas: [
                "Somente perda de cores",
                "Distorção ou borramento visual",
                "Apenas dor de cabeça",
                "Aumento da pupila"
            ],

            correta: 1
        },


        {
            pergunta:
                "O daltonismo está relacionado principalmente à percepção de:",

            respostas: [
                "Sons",
                "Temperatura",
                "Cores",
                "Distâncias"
            ],

            correta: 2
        },


        {
            pergunta:
                "Qual estrutura transporta informações visuais ao cérebro?",

            respostas: [
                "Córnea",
                "Nervo óptico",
                "Íris",
                "Cristalino"
            ],

            correta: 1
        },


        {
            pergunta:
                "A presbiopia está relacionada principalmente à dificuldade de:",

            respostas: [
                "Enxergar cores",
                "Focalizar objetos próximos",
                "Enxergar no escuro",
                "Perceber movimentos"
            ],

            correta: 1
        },


        {
            pergunta:
                "Qual é uma atitude importante para cuidar da saúde ocular?",

            respostas: [
                "Nunca consultar um profissional",
                "Usar qualquer colírio sem orientação",
                "Realizar avaliações quando necessário",
                "Evitar completamente a luz"
            ],

            correta: 2
        }

    ];


    let perguntaAtual = 0;

    let pontuacao = 0;


    function iniciarQuiz() {

        perguntaAtual = 0;

        pontuacao = 0;

        if (retryQuiz) {

            retryQuiz.style.display =
                "none";

        }

        mostrarPergunta();

    }


    function mostrarPergunta() {

        if (
            !quizQuestion ||
            !quizAnswers
        ) return;


        const pergunta =
            perguntas[perguntaAtual];


        quizQuestion.textContent =
            pergunta.pergunta;


        quizAnswers.innerHTML = "";


        // Progresso

        if (quizProgress) {

            const progresso =
                ((perguntaAtual) /
                perguntas.length) * 100;

            quizProgress.style.width =
                progresso + "%";

        }


        pergunta.respostas.forEach(
            (resposta, indice) => {

                const button =
                    document.createElement("button");


                button.className =
                    "quiz-answer";


                button.textContent =
                    resposta;


                button.addEventListener(
                    "click",
                    () => {

                        responder(indice);

                    }
                );


                quizAnswers.appendChild(button);

            }
        );

    }


    function responder(indice) {

        const pergunta =
            perguntas[perguntaAtual];


        const botoes =
            quizAnswers.querySelectorAll(
                ".quiz-answer"
            );


        botoes.forEach(
            botao => {

                botao.disabled = true;

            }
        );


        if (indice === pergunta.correta) {

            pontuacao++;

            botoes[indice].classList.add(
                "correct"
            );

        } else {

            botoes[indice].classList.add(
                "wrong"
            );

            botoes[
                pergunta.correta
            ].classList.add(
                "correct"
            );

        }


        setTimeout(() => {

            perguntaAtual++;


            if (
                perguntaAtual <
                perguntas.length
            ) {

                mostrarPergunta();

            } else {

                finalizarQuiz();

            }

        }, 900);

    }


    function finalizarQuiz() {

        quizQuestion.innerHTML = `
            🏆 Quiz concluído!
        `;


        quizAnswers.innerHTML = `
            <div class="quiz-result">

                <div class="score-circle">
                    ${pontuacao}/${perguntas.length}
                </div>

                <h3>
                    Você acertou
                    ${pontuacao}
                    de
                    ${perguntas.length}
                    perguntas!
                </h3>

                <p>
                    ${mensagemResultado()}
                </p>

            </div>
        `;


        if (quizProgress) {

            quizProgress.style.width =
                "100%";

        }


        if (retryQuiz) {

            retryQuiz.style.display =
                "inline-flex";

        }

    }


    function mensagemResultado() {

        const porcentagem =
            (pontuacao /
            perguntas.length) * 100;


        if (porcentagem === 100) {

            return "🔥 Perfeito! Você domina o assunto!";

        }

        if (porcentagem >= 75) {

            return "👏 Muito bom! Você conhece bastante sobre visão.";

        }

        if (porcentagem >= 50) {

            return "👍 Bom trabalho! Continue estudando.";

        }

        return "📚 Continue estudando. Você vai melhorar!";

    }


    if (retryQuiz) {

        retryQuiz.addEventListener(
            "click",
            iniciarQuiz
        );

    }


    // Inicia o quiz

    if (
        quizQuestion &&
        quizAnswers
    ) {

        iniciarQuiz();

    }



    // =================================================
    // FAQ
    // =================================================

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(item => {

        const question =
            item.querySelector(
                ".faq-question"
            );


        if (question) {

            question.addEventListener(
                "click",
                () => {

                    item.classList.toggle(
                        "active"
                    );

                }
            );

        }

    });



    // =================================================
    // MITOS E VERDADES
    // =================================================

    const mythCards =
        document.querySelectorAll(
            ".myth-card"
        );


    mythCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.toggle(
                    "active"
                );

            }
        );

    });



    // =================================================
    // ANIMAÇÕES AO ROLAR
    // =================================================

    const reveals =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    reveals.forEach(element => {

        observer.observe(element);

    });



    // =================================================
    // ANO DO FOOTER
    // =================================================

    const year =
        document.querySelector(
            "[data-year]"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
