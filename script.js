```javascript
/* =========================================================
   VISÃO EM FOCO
   SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS PRINCIPAIS
       ===================================================== */

    const body = document.body;

    const menuButton =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".navigation");

    const progressBar =
        document.querySelector(".scroll-progress");

    const accessibilityButton =
        document.querySelector("#accessibilityButton");

    const accessibilityPanel =
        document.querySelector(".accessibility-panel");

    const closePanel =
        document.querySelector(".close-panel");

    const librasButton =
        document.querySelector("#librasButton");

    const librasModal =
        document.querySelector("#librasModal");

    const closeModal =
        document.querySelector(".close-modal");


    /* =====================================================
       MENU MOBILE
       ===================================================== */

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("open");

            const opened =
                navigation.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                opened
            );

        });

    }


    /* Fecha o menu quando clicar em um link */

    document
        .querySelectorAll(".navigation a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navigation?.classList.remove("open");

                menuButton?.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


    /* =====================================================
       BARRA DE PROGRESSO
       ===================================================== */

    function updateScrollProgress() {

        if (!progressBar) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight
            - window.innerHeight;

        if (documentHeight <= 0) {

            progressBar.style.width = "0%";

            return;
        }

        const percentage =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width =
            `${Math.min(100, percentage)}%`;

    }

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );

    updateScrollProgress();


    /* =====================================================
       ANIMAÇÕES DE ENTRADA
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target
                                .classList
                                .add("visible");

                            revealObserver
                                .unobserve(entry.target);

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

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       ACESSIBILIDADE — PAINEL
       ===================================================== */

    function openAccessibility() {

        if (!accessibilityPanel) return;

        accessibilityPanel
            .classList
            .add("open");

        accessibilityPanel
            .setAttribute(
                "aria-hidden",
                "false"
            );

    }


    function closeAccessibility() {

        if (!accessibilityPanel) return;

        accessibilityPanel
            .classList
            .remove("open");

        accessibilityPanel
            .setAttribute(
                "aria-hidden",
                "true"
            );

    }


    if (accessibilityButton) {

        accessibilityButton.addEventListener(
            "click",
            openAccessibility
        );

    }


    if (closePanel) {

        closePanel.addEventListener(
            "click",
            closeAccessibility
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeAccessibility();

                closeLibrasModal();

            }

        }
    );


    /* =====================================================
       TAMANHO DA FONTE
       ===================================================== */

    let fontScale =
        Number(
            localStorage.getItem(
                "visaoFonteEscala"
            )
        ) || 1;

    function applyFontScale() {

        document.documentElement.style
            .fontSize =
            `${16 * fontScale}px`;

    }

    applyFontScale();


    const increaseFont =
        document.querySelector("#increaseFont");

    const decreaseFont =
        document.querySelector("#decreaseFont");

    const resetFont =
        document.querySelector("#resetFont");


    if (increaseFont) {

        increaseFont.addEventListener(
            "click",
            () => {

                fontScale =
                    Math.min(
                        1.35,
                        fontScale + 0.05
                    );

                localStorage.setItem(
                    "visaoFonteEscala",
                    fontScale
                );

                applyFontScale();

            }
        );

    }


    if (decreaseFont) {

        decreaseFont.addEventListener(
            "click",
            () => {

                fontScale =
                    Math.max(
                        0.85,
                        fontScale - 0.05
                    );

                localStorage.setItem(
                    "visaoFonteEscala",
                    fontScale
                );

                applyFontScale();

            }
        );

    }


    if (resetFont) {

        resetFont.addEventListener(
            "click",
            () => {

                fontScale = 1;

                localStorage.setItem(
                    "visaoFonteEscala",
                    fontScale
                );

                applyFontScale();

            }
        );

    }


    /* =====================================================
       FONTE ACESSÍVEL
       ===================================================== */

    const readableFont =
        document.querySelector("#readableFont");

    let readable =
        localStorage.getItem(
            "visaoFonteLegivel"
        ) === "true";

    if (readable) {

        body.classList.add(
            "readable-font"
        );

    }


    if (readableFont) {

        readableFont.addEventListener(
            "click",
            () => {

                readable =
                    !readable;

                body.classList.toggle(
                    "readable-font",
                    readable
                );

                localStorage.setItem(
                    "visaoFonteLegivel",
                    readable
                );

            }
        );

    }


    /* =====================================================
       ALTO CONTRASTE
       ===================================================== */

    const contrastButton =
        document.querySelector("#highContrast");

    let highContrast =
        localStorage.getItem(
            "visaoAltoContraste"
        ) === "true";


    if (highContrast) {

        body.classList.add(
            "high-contrast"
        );

    }


    if (contrastButton) {

        contrastButton.addEventListener(
            "click",
            () => {

                highContrast =
                    !highContrast;

                body.classList.toggle(
                    "high-contrast",
                    highContrast
                );

                localStorage.setItem(
                    "visaoAltoContraste",
                    highContrast
                );

            }
        );

    }


    /* =====================================================
       ANATOMIA DO OLHO
       ===================================================== */

    const partButtons =
        document.querySelectorAll(
            ".part-button"
        );

    const informationNumber =
        document.querySelector(
            ".information-number"
        );

    const informationLabel =
        document.querySelector(
            ".information-label"
        );

    const informationTitle =
        document.querySelector(
            ".anatomy-information h3"
        );

    const informationText =
        document.querySelector(
            ".anatomy-information > p"
        );


    const eyeParts = {

        cornea: {

            number: "01",

            label: "ESTRUTURA EXTERNA",

            title: "Córnea",

            text:
                "A córnea é a camada transparente localizada na parte frontal do olho. Ela ajuda a proteger as estruturas internas e participa diretamente da focalização da luz."

        },

        iris: {

            number: "02",

            label: "CONTROLE DA LUZ",

            title: "Íris",

            text:
                "A íris é a região colorida do olho. Ela controla a quantidade de luz que entra no olho por meio da abertura chamada pupila."

        },

        retina: {

            number: "03",

            label: "CAPTAÇÃO DA IMAGEM",

            title: "Retina",

            text:
                "A retina fica na parte posterior do olho e contém células sensíveis à luz. Ela transforma os estímulos luminosos em sinais que seguem pelo nervo óptico."

        },

        lens: {

            number: "04",

            label: "FOCALIZAÇÃO",

            title: "Cristalino",

            text:
                "O cristalino é uma estrutura transparente que muda sua forma para ajudar o olho a focalizar objetos que estão em diferentes distâncias."

        }

    };


    function updateEyePart(part) {

        const data =
            eyeParts[part];

        if (!data) return;

        if (informationNumber)
            informationNumber.textContent =
                data.number;

        if (informationLabel)
            informationLabel.textContent =
                data.label;

        if (informationTitle)
            informationTitle.textContent =
                data.title;

        if (informationText)
            informationText.textContent =
                data.text;

        partButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.part === part
            );

        });

    }


    partButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                updateEyePart(
                    button.dataset.part
                );

            }
        );

    });


    /* Pontos do olho */

    document
        .querySelectorAll(".eye-point")
        .forEach(point => {

            point.addEventListener(
                "click",
                () => {

                    const part =
                        point.dataset.part;

                    if (part) {

                        updateEyePart(part);

                    }

                }
            );

        });


    /* =====================================================
       ANOMALIAS DA VISÃO
       ===================================================== */

    const anomalyCards =
        document.querySelectorAll(
            ".anomaly-card"
        );

    const detailTitle =
        document.querySelector(
            ".detail-content h3"
        );

    const detailText =
        document.querySelector(
            ".detail-content p"
        );


    const anomalyData = {

        miopia: {

            title: "Miopia",

            text:
                "Na miopia, objetos próximos costumam ser vistos com mais nitidez enquanto objetos distantes podem ficar desfocados. Isso acontece quando o sistema óptico do olho faz a imagem se formar antes da retina."

        },

        hipermetropia: {

            title: "Hipermetropia",

            text:
                "Na hipermetropia, a focalização pode ocorrer além da retina. Dependendo do grau e da idade, isso pode dificultar principalmente a visão de objetos próximos."

        },

        astigmatismo: {

            title: "Astigmatismo",

            text:
                "O astigmatismo está relacionado a uma curvatura irregular da córnea ou do cristalino, podendo causar diferentes níveis de desfoque ou distorção visual."

        },

        presbiopia: {

            title: "Presbiopia",

            text:
                "A presbiopia está relacionada às mudanças naturais na capacidade de acomodação do olho ao longo do envelhecimento, dificultando a focalização de objetos próximos."

        },

        catarata: {

            title: "Catarata",

            text:
                "A catarata ocorre quando o cristalino perde sua transparência. A visão pode ficar embaçada e com menor contraste."

        },

        daltonismo: {

            title: "Daltonismo",

            text:
                "O daltonismo envolve diferenças na percepção de determinadas cores. Existem diferentes tipos e intensidades de alterações na visão das cores."

        }

    };


    anomalyCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const anomaly =
                    card.dataset.anomaly;

                const data =
                    anomalyData[anomaly];

                if (!data) return;

                anomalyCards.forEach(item => {

                    item.classList.remove(
                        "selected"
                    );

                });

                card.classList.add(
                    "selected"
                );

                if (detailTitle)
                    detailTitle.textContent =
                        data.title;

                if (detailText)
                    detailText.textContent =
                        data.text;

            }
        );

    });


    /* =====================================================
       LABORATÓRIO DE VISÃO
       ===================================================== */

    const visionSelect =
        document.querySelector(
            "#visionCondition"
        );

    const intensityRange =
        document.querySelector(
            "#intensityRange"
        );

    const intensityValue =
        document.querySelector(
            "#intensityValue"
        );

    const visionPreview =
        document.querySelector(
            ".vision-preview"
        );

    const previewName =
        document.querySelector(
            "#previewName"
        );


    function updateVisionSimulation() {

        if (!visionPreview) return;

        const condition =
            visionSelect
                ? visionSelect.value
                : "normal";

        const intensity =
            intensityRange
                ? Number(
                    intensityRange.value
                )
                : 0;


        const filterClasses = [

            "filter-miopia",
            "filter-hipermetropia",
            "filter-astigmatismo",
            "filter-presbiopia",
            "filter-catarata",
            "filter-daltonismo"

        ];


        filterClasses.forEach(
            className => {

                visionPreview
                    .classList
                    .remove(className);

            }
        );


        if (condition !== "normal") {

            visionPreview
                .classList
                .add(
                    `filter-${condition}`
                );

        }


        const blurAmount =
            intensity / 100;


        if (condition === "miopia") {

            visionPreview.style.filter =
                `blur(${blurAmount * 7}px)`;

        } else if (
            condition === "hipermetropia"
        ) {

            visionPreview.style.filter =
                `blur(${blurAmount * 4}px)`;

        } else if (
            condition === "astigmatismo"
        ) {

            visionPreview.style.filter =
                `blur(${blurAmount * 5}px)`;

        } else if (
            condition === "presbiopia"
        ) {

            visionPreview.style.filter =
                `blur(${blurAmount * 4}px)`;

        } else if (
            condition === "catarata"
        ) {

            visionPreview.style.filter =
                `
                blur(${blurAmount * 8}px)
                brightness(${1 + blurAmount * .25})
                saturate(${1 - blurAmount * .45})
                `;

        } else if (
            condition === "daltonismo"
        ) {

            visionPreview.style.filter =
                `
                saturate(${1 - blurAmount * .7})
                contrast(${1 + blurAmount * .08})
                `;

        } else {

            visionPreview.style.filter =
                "none";

        }


        if (intensityValue) {

            intensityValue.textContent =
                `${intensity}%`;

        }


        if (previewName) {

            const names = {

                normal: "Visão normal",
                miopia: "Miopia",
                hipermetropia:
                    "Hipermetropia",
                astigmatismo:
                    "Astigmatismo",
                presbiopia:
                    "Presbiopia",
                catarata:
                    "Catarata",
                daltonismo:
                    "Daltonismo"

            };

            previewName.textContent =
                names[condition]
                || "Visão normal";

        }

    }


    if (visionSelect) {

        visionSelect.addEventListener(
            "change",
            updateVisionSimulation
        );

    }


    if (intensityRange) {

        intensityRange.addEventListener(
            "input",
            updateVisionSimulation
        );

    }


    updateVisionSimulation();


    /* =====================================================
       QUIZ
       ===================================================== */

    const quizForm =
        document.querySelector(
            "#quizForm"
        );

    const scoreElement =
        document.querySelector(
            "#quizScore"
        );

    const resultElement =
        document.querySelector(
            "#quizResult"
        );


    if (quizForm) {

        quizForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const correctAnswers = {

                    q1: "a",
                    q2: "b",
                    q3: "c",
                    q4: "a",
                    q5: "b"

                };


                let score = 0;

                let answered = 0;


                Object.entries(
                    correctAnswers
                ).forEach(
                    ([question, answer]) => {

                        const selected =
                            quizForm.querySelector(
                                `input[name="${question}"]:checked`
                            );

                        if (selected) {

                            answered++;

                            if (
                                selected.value ===
                                answer
                            ) {

                                score++;

                            }

                        }

                    }
                );


                if (scoreElement) {

                    scoreElement.textContent =
                        score;

                }


                if (resultElement) {

                    if (answered === 0) {

                        resultElement.textContent =
                            "Responda às questões para descobrir sua pontuação.";

                    } else if (score === 5) {

                        resultElement.textContent =
                            "Excelente! Você domina o conteúdo.";

                    } else if (score >= 3) {

                        resultElement.textContent =
                            "Muito bem! Você já conhece bastante sobre o assunto.";

                    } else {

                        resultElement.textContent =
                            "Bom começo! Revise os conteúdos e tente novamente.";

                    }

                }

            }
        );

    }


    /* =====================================================
       LIBRAS
       ===================================================== */

    function openLibrasModal() {

        if (!librasModal) return;

        librasModal.classList.add(
            "open"
        );

        librasModal.setAttribute(
            "aria-hidden",
            "false"
        );

        body.style.overflow =
            "hidden";

    }


    function closeLibrasModal() {

        if (!librasModal) return;

        librasModal.classList.remove(
            "open"
        );

        librasModal.setAttribute(
            "aria-hidden",
            "true"
        );

        body.style.overflow =
            "";

    }


    if (librasButton) {

        librasButton.addEventListener(
            "click",
            openLibrasModal
        );

    }


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeLibrasModal
        );

    }


    if (librasModal) {

        librasModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    librasModal
                ) {

                    closeLibrasModal();

                }

            }
        );

    }


    /* =====================================================
       BOTÕES DE NAVEGAÇÃO
       ===================================================== */

    document
        .querySelectorAll(
            '[data-scroll]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const targetId =
                        button.dataset.scroll;

                    const target =
                        document.getElementById(
                            targetId
                        );

                    if (!target) return;

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       ATALHO HOME
       ===================================================== */

    const homeButton =
        document.querySelector(
            ".logo"
        );

    if (homeButton) {

        homeButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       FECHAR PAINEL AO CLICAR FORA
       ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (!accessibilityPanel) return;

            const clickedInside =
                accessibilityPanel.contains(
                    event.target
                );

            const clickedButton =
                accessibilityButton &&
                accessibilityButton.contains(
                    event.target
                );

            if (
                accessibilityPanel.classList.contains(
                    "open"
                ) &&
                !clickedInside &&
                !clickedButton
            ) {

                closeAccessibility();

            }

        }
    );


    /* =====================================================
       DATA / ANO AUTOMÁTICO
       ===================================================== */

    document
        .querySelectorAll(
            "[data-current-year]"
        )
        .forEach(element => {

            element.textContent =
                new Date()
                    .getFullYear();

        });


    /* =====================================================
       INICIALIZAÇÃO
       ===================================================== */

    updateEyePart("cornea");

    console.log(
        "Visão em Foco carregado com sucesso."
    );

});
```

