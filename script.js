/* =========================================================
   ANOMALIAS DA VISÃO — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("mobile-open");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("mobile-open");
            });
        });
    }


    /* =====================================================
       MODO CLARO / ESCURO
       ===================================================== */

    const themeButton = document.querySelector("#themeToggle");

    if (themeButton) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
            themeButton.textContent = "🌙";
        }

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            const isLight =
                document.body.classList.contains("light-mode");

            localStorage.setItem(
                "theme",
                isLight ? "light" : "dark"
            );

            themeButton.textContent =
                isLight ? "🌙" : "☀️";
        });
    }


    /* =====================================================
       TAMANHO DA FONTE
       ===================================================== */

    const increaseFont =
        document.querySelector("#increaseFont");

    const decreaseFont =
        document.querySelector("#decreaseFont");

    let fontScale = 1;

    if (increaseFont) {

        increaseFont.addEventListener("click", () => {

            if (fontScale < 1.3) {

                fontScale += 0.1;

                document.documentElement.style.fontSize =
                    `${fontScale}em`;
            }
        });
    }

    if (decreaseFont) {

        decreaseFont.addEventListener("click", () => {

            if (fontScale > 0.8) {

                fontScale -= 0.1;

                document.documentElement.style.fontSize =
                    `${fontScale}em`;
            }
        });
    }


    /* =====================================================
       ANIMAÇÃO AO ROLAR A PÁGINA
       ===================================================== */

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


    /* =====================================================
       FAQ
       ===================================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            const isOpen =
                item.classList.contains("active");

            faqItems.forEach(other => {
                other.classList.remove("active");
            });

            if (!isOpen) {
                item.classList.add("active");
            }
        });
    });


    /* =====================================================
       MITOS E VERDADES
       ===================================================== */

    const mythCards =
        document.querySelectorAll(".myth-card");

    mythCards.forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("active");

        });
    });


    /* =====================================================
       LABORATÓRIO DA VISÃO
       ===================================================== */

    const visionType =
        document.querySelector("#visionType");

    const intensity =
        document.querySelector("#intensity");

    const intensityValue =
        document.querySelector("#intensityValue");

    const simulationObject =
        document.querySelector(".simulation-object");

    const labExplanation =
        document.querySelector("#labExplanation");

    const resetLab =
        document.querySelector("#resetLab");


    const explanations = {

        normal: {
            text:
                "Visão normal: os objetos são percebidos com nitidez e sem uma alteração visual simulada.",
            filter: "none"
        },

        miopia: {
            text:
                "Miopia: objetos distantes podem parecer borrados. Na simulação, quanto maior a intensidade, maior será o desfoque.",
            filter:
                "blur(2px)"
        },

        hipermetropia: {
            text:
                "Hipermetropia: objetos próximos podem apresentar dificuldade de foco. A simulação representa essa perda de nitidez.",
            filter:
                "blur(2px)"
        },

        astigmatismo: {
            text:
                "Astigmatismo: a curvatura irregular da córnea ou do cristalino pode causar distorções e visão borrada.",
            filter:
                "blur(1.5px)"
        },

        presbiopia: {
            text:
                "Presbiopia: relacionada à perda gradual da capacidade de focalizar objetos próximos, geralmente associada ao envelhecimento.",
            filter:
                "blur(2px)"
        },

        daltonismo: {
            text:
                "Daltonismo: algumas pessoas apresentam dificuldade para distinguir determinadas cores. A percepção varia conforme o tipo.",
            filter:
                "grayscale(70%)"
        }
    };


    function updateLaboratory() {

        if (!visionType ||
            !intensity ||
            !simulationObject) {

            return;
        }

        const type =
            visionType.value;

        const value =
            Number(intensity.value);

        const data =
            explanations[type];

        if (intensityValue) {

            intensityValue.textContent =
                `${value}%`;
        }


        /* =============================================
           EFEITOS
           ============================================= */

        let filter =
            data.filter;

        if (type === "normal") {

            filter = "none";

        } else if (type === "miopia") {

            filter =
                `blur(${value / 12}px)`;

        } else if (type === "hipermetropia") {

            filter =
                `blur(${value / 14}px)`;

        } else if (type === "astigmatismo") {

            filter =
                `blur(${value / 18}px)`;

        } else if (type === "presbiopia") {

            filter =
                `blur(${value / 15}px)`;

        } else if (type === "daltonismo") {

            filter =
                `grayscale(${value}%)`;
        }


        simulationObject.style.filter =
            filter;


        /* =============================================
           DISTORÇÃO
           ============================================= */

        if (type === "astigmatismo") {

            simulationObject.style.transform =
                `scaleX(${1 + value / 500}) scaleY(${1 - value / 700})`;

        } else {

            simulationObject.style.transform =
                "scale(1)";
        }


        /* =============================================
           EXPLICAÇÃO
           ============================================= */

        if (labExplanation) {

            labExplanation.innerHTML =
                `<strong>${capitalize(type)}</strong><br>${data.text}`;
        }
    }


    if (visionType) {

        visionType.addEventListener(
            "change",
            updateLaboratory
        );
    }

    if (intensity) {

        intensity.addEventListener(
            "input",
            updateLaboratory
        );
    }


    if (resetLab) {

        resetLab.addEventListener("click", () => {

            if (visionType)
                visionType.value = "normal";

            if (intensity)
                intensity.value = 0;

            updateLaboratory();
        });
    }


    /* =====================================================
       COMPARAÇÃO NORMAL × ANOMALIA
       ===================================================== */

    const comparisonSlider =
        document.querySelector("#comparisonSlider");

    const affectedVision =
        document.querySelector("#affectedVision");

    if (comparisonSlider && affectedVision) {

        comparisonSlider.addEventListener(
            "input",
            () => {

                affectedVision.style.width =
                    `${comparisonSlider.value}%`;

            }
        );
    }


    /* =====================================================
       QUIZ
       ===================================================== */

    const quizQuestions = [

        {
            question:
                "Qual problema costuma dificultar a visão de objetos distantes?",

            answers: [
                "Miopia",
                "Presbiopia",
                "Daltonismo",
                "Catarata"
            ],

            correct: 0
        },

        {
            question:
                "Qual estrutura do olho recebe a luz e participa da formação da imagem?",

            answers: [
                "Retina",
                "Íris",
                "Pálpebra",
                "Cílio"
            ],

            correct: 0
        },

        {
            question:
                "Qual estrutura controla a quantidade de luz que entra no olho?",

            answers: [
                "Retina",
                "Pupila",
                "Nervo óptico",
                "Cristalino"
            ],

            correct: 1
        },

        {
            question:
                "O astigmatismo pode causar:",

            answers: [
                "Distorção ou visão borrada",
                "Audição reduzida",
                "Alteração na pressão arterial",
                "Perda de memória"
            ],

            correct: 0
        },

        {
            question:
                "O daltonismo está relacionado principalmente à percepção de:",

            answers: [
                "Sons",
                "Cores",
                "Temperatura",
                "Texturas"
            ],

            correct: 1
        },

        {
            question:
                "Qual estrutura ajuda a focalizar a luz dentro do olho?",

            answers: [
                "Cristalino",
                "Pálpebra",
                "Íris",
                "Nervo óptico"
            ],

            correct: 0
        },

        {
            question:
                "Qual atitude ajuda nos cuidados com a visão?",

            answers: [
                "Ignorar alterações visuais",
                "Usar medicamentos por conta própria",
                "Realizar avaliações oftalmológicas quando indicadas",
                "Evitar qualquer contato com luz"
            ],

            correct: 2
        }
    ];


    let currentQuestion = 0;
    let score = 0;

    const questionElement =
        document.querySelector("#question");

    const answersElement =
        document.querySelector("#answers");

    const nextButton =
        document.querySelector("#nextQuestion");

    const quizResult =
        document.querySelector("#quizResult");

    const quizProgress =
        document.querySelector("#quizProgress");

    const restartQuiz =
        document.querySelector("#restartQuiz");


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
                    () => selectAnswer(
                        index,
                        button
                    )
                );

                answersElement.appendChild(
                    button
                );
            }
        );


        if (quizProgress) {

            const progress =
                ((currentQuestion) /
                    quizQuestions.length) * 100;

            quizProgress.style.width =
                `${progress}%`;
        }


        if (nextButton) {

            nextButton.style.display =
                "none";
        }
    }


    function selectAnswer(index, button) {

        const question =
            quizQuestions[currentQuestion];

        const allAnswers =
            document.querySelectorAll(".answer");

        allAnswers.forEach(answer => {

            answer.disabled = true;

        });


        if (index === question.correct) {

            button.classList.add("correct");

            score++;

        } else {

            button.classList.add("wrong");

            allAnswers[
                question.correct
            ].classList.add("correct");
        }


        if (nextButton) {

            nextButton.style.display =
                "inline-flex";
        }
    }


    function nextQuestion() {

        currentQuestion++;

        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            finishQuiz();

        } else {

            loadQuestion();
        }
    }


    function finishQuiz() {

        if (questionElement)
            questionElement.textContent =
                "🎉 Quiz concluído!";

        if (answersElement)
            answersElement.innerHTML = "";

        if (nextButton)
            nextButton.style.display = "none";


        if (quizProgress)
            quizProgress.style.width = "100%";


        let message;

        const percentage =
            (score /
                quizQuestions.length) * 100;


        if (percentage >= 85) {

            message =
                "Excelente! Você domina o assunto. 🧠";

        } else if (percentage >= 60) {

            message =
                "Muito bom! Você conhece bastante sobre visão. 👁️";

        } else {

            message =
                "Boa tentativa! Que tal explorar mais o laboratório? 🔬";
        }


        if (quizResult) {

            quizResult.innerHTML = `
                <h3>Resultado</h3>
                <p>
                    Você acertou
                    <strong>${score}</strong>
                    de
                    <strong>${quizQuestions.length}</strong>
                    questões.
                </p>
                <p>${message}</p>
            `;

            quizResult.style.display =
                "block";
        }
    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextQuestion
        );
    }


    if (restartQuiz) {

        restartQuiz.addEventListener(
            "click",
            () => {

                currentQuestion = 0;

                score = 0;

                if (quizResult)
                    quizResult.style.display =
                        "none";

                loadQuestion();
            }
        );
    }


    if (questionElement) {

        loadQuestion();
    }


    /* =====================================================
       BUSCA
       ===================================================== */

    const searchButton =
        document.querySelector("#searchButton");

    const searchInput =
        document.querySelector("#searchInput");

    if (searchButton && searchInput) {

        searchButton.addEventListener(
            "click",
            () => {

                const query =
                    searchInput.value
                        .trim()
                        .toLowerCase();

                if (!query) return;

                const elements =
                    document.querySelectorAll(
                        "h1, h2, h3, p, .anomaly-card"
                    );

                let found = false;

                elements.forEach(element => {

                    const text =
                        element.textContent
                            .toLowerCase();

                    if (
                        !found &&
                        text.includes(query)
                    ) {

                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        element.style.outline =
                            "3px solid #00e5ff";

                        setTimeout(() => {

                            element.style.outline =
                                "";

                        }, 2500);

                        found = true;
                    }
                });


                if (!found) {

                    alert(
                        "Nenhum resultado encontrado."
                    );
                }
            }
        );


        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    searchButton.click();
                }
            }
        );
    }


    /* =====================================================
       BOTÕES "SAIBA MAIS"
       ===================================================== */

    const detailsButtons =
        document.querySelectorAll(
            ".details-button"
        );

    detailsButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    button.dataset.target;

                const section =
                    document.querySelector(
                        target
                    );

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        );
    });


    /* =====================================================
       BOTÃO VOLTAR AO TOPO
       ===================================================== */

    const topButton =
        document.querySelector("#backToTop");

    if (topButton) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 600) {

                    topButton.classList.add(
                        "show"
                    );

                } else {

                    topButton.classList.remove(
                        "show"
                    );
                }
            }
        );


        topButton.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }


    /* =====================================================
       DATA / ANO
       ===================================================== */

    const year =
        document.querySelector("#currentYear");

    if (year) {

        year.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       FUNÇÃO AUXILIAR
       ===================================================== */

    function capitalize(text) {

        return text.charAt(0).toUpperCase() +
            text.slice(1);
    }

});
