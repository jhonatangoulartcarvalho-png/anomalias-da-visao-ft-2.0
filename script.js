/* =========================================
   ANOMALIAS DA VISÃO
   SCRIPT.JS
========================================= */


/* =========================================
   DADOS DAS ANOMALIAS
========================================= */

const anomalies = [

    {
        id: "miopia",
        icon: "👁️",
        name: "Miopia",
        description:
            "Dificuldade para enxergar objetos distantes com nitidez.",
        symptom:
            "Visão borrada de longe.",
        what:
            "A miopia é um erro refrativo no qual objetos distantes podem parecer desfocados.",
        causes:
            "Pode estar relacionada ao formato do olho e a fatores genéticos e ambientais.",
        symptoms:
            "Dificuldade para enxergar de longe, apertar os olhos para tentar focar e cansaço visual.",
        effect:
            "A imagem pode se formar antes da retina, dificultando a visão de objetos distantes.",
        diagnosis:
            "Pode ser identificada por meio de avaliação da acuidade visual e exames oftalmológicos.",
        treatment:
            "Pode ser corrigida com óculos, lentes de contato e, em situações específicas, procedimentos cirúrgicos.",
        curiosity:
            "A miopia é uma das alterações refrativas mais comuns."
    },

    {
        id: "hipermetropia",
        icon: "👓",
        name: "Hipermetropia",
        description:
            "Pode dificultar principalmente a focalização de objetos próximos.",
        symptom:
            "Cansaço visual e dificuldade para focar de perto.",
        what:
            "A hipermetropia é um erro refrativo relacionado à dificuldade de focalização adequada.",
        causes:
            "Pode ocorrer quando o olho apresenta características que fazem com que o foco fique atrás da retina.",
        symptoms:
            "Dificuldade para focar de perto, dor de cabeça e desconforto visual podem ocorrer.",
        effect:
            "A formação do foco pode ocorrer atrás da retina quando o olho está em repouso.",
        diagnosis:
            "É identificada por avaliação oftalmológica e testes de refração.",
        treatment:
            "Pode ser corrigida com lentes apropriadas e, em casos selecionados, cirurgia refrativa.",
        curiosity:
            "Algumas crianças podem compensar parte da hipermetropia naturalmente."
    },

    {
        id: "astigmatismo",
        icon: "✨",
        name: "Astigmatismo",
        description:
            "Pode causar borramento ou distorção da imagem.",
        symptom:
            "Visão borrada ou distorcida.",
        what:
            "O astigmatismo ocorre quando a curvatura de estruturas ópticas do olho não é uniforme.",
        causes:
            "Pode estar relacionado principalmente ao formato da córnea e, em alguns casos, ao cristalino.",
        symptoms:
            "Borramento, distorção, cansaço visual e dificuldade para enxergar detalhes.",
        effect:
            "A luz pode não convergir igualmente em diferentes direções.",
        diagnosis:
            "Pode ser identificado durante um exame oftalmológico e avaliação da refração.",
        treatment:
            "Óculos, lentes de contato e determinados procedimentos podem ser opções dependendo do caso.",
        curiosity:
            "O astigmatismo pode ocorrer junto com miopia ou hipermetropia."
    },

    {
        id: "presbiopia",
        icon: "🔍",
        name: "Presbiopia",
        description:
            "Alteração relacionada ao envelhecimento que dificulta o foco de perto.",
        symptom:
            "Dificuldade para ler ou enxergar objetos próximos.",
        what:
            "A presbiopia está relacionada à redução progressiva da capacidade de acomodação do olho.",
        causes:
            "Está principalmente associada às mudanças naturais que ocorrem com o envelhecimento.",
        symptoms:
            "Necessidade de afastar objetos para enxergar melhor e dificuldade de leitura de perto.",
        effect:
            "O cristalino perde parte da capacidade de alterar seu formato para focar objetos próximos.",
        diagnosis:
            "É identificada por avaliação visual e exame oftalmológico.",
        treatment:
            "Pode ser corrigida com lentes para visão próxima ou outras soluções indicadas profissionalmente.",
        curiosity:
            "A presbiopia é uma alteração muito comum com o avanço da idade."
    },

    {
        id: "daltonismo",
        icon: "🎨",
        name: "Daltonismo",
        description:
            "Alteração na percepção ou diferenciação de determinadas cores.",
        symptom:
            "Dificuldade para distinguir algumas cores.",
        what:
            "Daltonismo é um termo usado para diferentes alterações na percepção das cores.",
        causes:
            "Muitas formas estão relacionadas a características genéticas.",
        symptoms:
            "Dificuldade para diferenciar determinados tons ou combinações de cores.",
        effect:
            "Algumas cores podem ser percebidas de maneira diferente ou mais difícil de distinguir.",
        diagnosis:
            "Pode ser investigado por testes específicos de percepção de cores.",
        treatment:
            "Não existe uma correção única para todas as formas. Adaptações podem facilitar atividades do cotidiano.",
        curiosity:
            "Nem todas as pessoas com daltonismo percebem o mundo em preto e branco."
    },

    {
        id: "catarata",
        icon: "🌫️",
        name: "Catarata",
        description:
            "Opacificação do cristalino que pode reduzir a nitidez da visão.",
        symptom:
            "Visão embaçada ou redução da nitidez.",
        what:
            "A catarata ocorre quando o cristalino, que normalmente é transparente, apresenta opacificação.",
        causes:
            "O envelhecimento é um dos principais fatores associados, mas outros fatores também podem contribuir.",
        symptoms:
            "Visão embaçada, maior sensibilidade à luz e dificuldade visual.",
        effect:
            "A passagem da luz pelo cristalino pode ficar prejudicada.",
        diagnosis:
            "É diagnosticada por avaliação oftalmológica.",
        treatment:
            "Quando a catarata compromete significativamente a visão, a cirurgia pode ser indicada.",
        curiosity:
            "A catarata é uma das principais causas de perda visual reversível."
    },

    {
        id: "glaucoma",
        icon: "👁️",
        name: "Glaucoma",
        description:
            "Grupo de condições que pode causar danos ao nervo óptico.",
        symptom:
            "Alterações no campo visual podem ocorrer.",
        what:
            "Glaucoma é um grupo de doenças que pode causar dano progressivo ao nervo óptico.",
        causes:
            "Existem diferentes tipos e fatores de risco, incluindo alterações relacionadas à pressão ocular.",
        symptoms:
            "Pode evoluir sem sintomas perceptíveis nas fases iniciais, tornando exames importantes.",
        effect:
            "O dano ao nervo óptico pode comprometer progressivamente o campo visual.",
        diagnosis:
            "Exames oftalmológicos são necessários para avaliar o nervo óptico, pressão ocular e campo visual.",
        treatment:
            "O tratamento depende do tipo e estágio e pode envolver colírios, laser ou cirurgia.",
        curiosity:
            "O glaucoma pode causar perda visual permanente quando não é identificado e acompanhado adequadamente."
    },

    {
        id: "degeneracao",
        icon: "🟡",
        name: "Degeneração macular",
        description:
            "Alteração que pode comprometer principalmente a visão central.",
        symptom:
            "Dificuldade para enxergar detalhes na região central.",
        what:
            "A degeneração macular afeta a mácula, região central da retina responsável por detalhes da visão.",
        causes:
            "Existem diferentes formas e fatores associados, incluindo envelhecimento e fatores genéticos.",
        symptoms:
            "Distorção de linhas retas e dificuldade de enxergar detalhes podem ocorrer.",
        effect:
            "A região central da visão pode ser comprometida.",
        diagnosis:
            "Pode ser investigada por exames oftalmológicos e exames específicos da retina.",
        treatment:
            "O tratamento depende do tipo e da fase da condição.",
        curiosity:
            "A mácula é fundamental para tarefas que exigem visão central detalhada."
    }

];


/* =========================================
   ELEMENTOS PRINCIPAIS
========================================= */

const anomalyGrid =
    document.getElementById("anomalyGrid");

const anomalyModal =
    document.getElementById("anomalyModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");


/* =========================================
   CRIAR CARDS
========================================= */

function renderAnomalies() {

    if (!anomalyGrid) return;

    anomalyGrid.innerHTML = "";

    anomalies.forEach(anomaly => {

        const card =
            document.createElement("article");

        card.className =
            "glass-card anomaly-card";

        card.innerHTML = `

            <div class="anomaly-icon">
                ${anomaly.icon}
            </div>

            <h3>
                ${anomaly.name}
            </h3>

            <p>
                ${anomaly.description}
            </p>

            <p>
                <strong>
                    Sintoma:
                </strong>

                ${anomaly.symptom}
            </p>

            <button
                class="btn btn-primary"
                onclick="openAnomaly('${anomaly.id}')">

                Saiba mais →

            </button>

        `;

        anomalyGrid.appendChild(card);

    });

}


/* =========================================
   MODAL
========================================= */

function openAnomaly(id) {

    const anomaly =
        anomalies.find(item =>
            item.id === id
        );

    if (!anomaly) return;

    modalBody.innerHTML = `

        <div class="modal-anomaly">

            <div class="anomaly-icon">
                ${anomaly.icon}
            </div>

            <span class="eyebrow">
                ANOMALIA DA VISÃO
            </span>

            <h2>
                ${anomaly.name}
            </h2>

            <p>
                ${anomaly.description}
            </p>

            <hr>

            <h3>
                O que é?
            </h3>

            <p>
                ${anomaly.what}
            </p>

            <h3>
                Causas
            </h3>

            <p>
                ${anomaly.causes}
            </p>

            <h3>
                Sintomas
            </h3>

            <p>
                ${anomaly.symptoms}
            </p>

            <h3>
                Como afeta a visão?
            </h3>

            <p>
                ${anomaly.effect}
            </p>

            <h3>
                Como é diagnosticada?
            </h3>

            <p>
                ${anomaly.diagnosis}
            </p>

            <h3>
                Correção e tratamento
            </h3>

            <p>
                ${anomaly.treatment}
            </p>

            <div class="warning">

                💡 <strong>Curiosidade:</strong>

                ${anomaly.curiosity}

            </div>

        </div>

    `;

    anomalyModal.classList.add("active");

    anomalyModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


function closeAnomaly() {

    anomalyModal.classList.remove("active");

    anomalyModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeAnomaly
    );

}


if (anomalyModal) {

    anomalyModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                anomalyModal
            ) {

                closeAnomaly();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeAnomaly();

        }

    }
);


/* =========================================
   MENU MOBILE
========================================= */

const menuMobile =
    document.getElementById("menuMobile");

const navigation =
    document.getElementById("navigation");


if (menuMobile) {

    menuMobile.addEventListener(
        "click",
        () => {

            navigation.classList.toggle(
                "active"
            );

        }
    );

}


document.querySelectorAll(
    ".navigation a"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navigation.classList.remove(
                "active"
            );

        }
    );

});


/* =========================================
   MODO CLARO / ESCURO
========================================= */

const themeButton =
    document.getElementById("themeButton");


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light"
            );

            if (
                document.body.classList.contains(
                    "light"
                )
            ) {

                themeButton.textContent = "☀️";

                localStorage.setItem(
                    "theme",
                    "light"
                );

            } else {

                themeButton.textContent = "☾";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

        }
    );

}


if (
    localStorage.getItem("theme") ===
    "light"
) {

    document.body.classList.add("light");

    if (themeButton) {

        themeButton.textContent = "☀️";

    }

}


/* =========================================
   ALTO CONTRASTE
========================================= */

const contrastButton =
    document.getElementById(
        "contrastButton"
    );


if (contrastButton) {

    contrastButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "high-contrast"
            );

        }
    );

}


/* =========================================
   TAMANHO DA FONTE
========================================= */

const fontUp =
    document.getElementById("fontUp");

const fontDown =
    document.getElementById("fontDown");

let currentFontSize = 16;


if (fontUp) {

    fontUp.addEventListener(
        "click",
        () => {

            if (currentFontSize < 21) {

                currentFontSize += 1;

                document.documentElement.style
                    .setProperty(
                        "--font-size",
                        `${currentFontSize}px`
                    );

            }

        }
    );

}


if (fontDown) {

    fontDown.addEventListener(
        "click",
        () => {

            if (currentFontSize > 13) {

                currentFontSize -= 1;

                document.documentElement.style
                    .setProperty(
                        "--font-size",
                        `${currentFontSize}px`
                    );

            }

        }
    );

}


/* =========================================
   LABORATÓRIO
========================================= */

const visionCondition =
    document.getElementById(
        "visionCondition"
    );

const visionIntensity =
    document.getElementById(
        "visionIntensity"
    );

const intensityValue =
    document.getElementById(
        "intensityValue"
    );

const affectedScene =
    document.getElementById(
        "affectedScene"
    );

const labExplanation =
    document.getElementById(
        "labExplanation"
    );


const labDescriptions = {

    normal: {
        title:
            "Visão normal",
        text:
            "Nesta simulação, a imagem é apresentada sem um efeito visual aplicado."
    },

    miopia: {
        title:
            "Miopia",
        text:
            "A miopia pode dificultar a visualização de objetos distantes com nitidez. A intensidade abaixo representa apenas uma simulação didática."
    },

    hipermetropia: {
        title:
            "Hipermetropia",
        text:
            "A hipermetropia pode dificultar principalmente a focalização de objetos próximos. A simulação representa uma alteração visual de forma aproximada."
    },

    astigmatismo: {
        title:
            "Astigmatismo",
        text:
            "O astigmatismo pode produzir borramento ou distorção em diferentes direções. O efeito mostrado é apenas uma representação educativa."
    },

    presbiopia: {
        title:
            "Presbiopia",
        text:
            "A presbiopia está relacionada à redução da capacidade de focalização para objetos próximos."
    },

    daltonismo: {
        title:
            "Daltonismo",
        text:
            "Algumas formas de daltonismo alteram a capacidade de diferenciar determinadas cores. Esta simulação é aproximada e não representa todos os tipos existentes."
    }

};


function updateLab() {

    if (
        !visionCondition ||
        !visionIntensity ||
        !affectedScene
    ) return;


    const condition =
        visionCondition.value;

    const intensity =
        Number(
            visionIntensity.value
        );


    intensityValue.textContent =
        `${intensity}%`;


    /* RESET */

    affectedScene.style.filter =
        "none";

    affectedScene.style.transform =
        "none";

    affectedScene.style.opacity =
        "1";

    affectedScene.style.backgroundColor =
        "";


    /*
       Os efeitos abaixo são representações
       visuais simplificadas para fins educativos.
    */

    if (condition === "miopia") {

        const blur =
            (intensity / 100) * 7;

        affectedScene.style.filter =
            `blur(${blur}px)`;

    }


    if (condition === "hipermetropia") {

        const blur =
            (intensity / 100) * 3;

        affectedScene.style.filter =
            `blur(${blur}px)`;

        affectedScene.style.transform =
            `scale(${1 + intensity / 1000})`;

    }


    if (condition === "astigmatismo") {

        const blur =
            (intensity / 100) * 3;

        const skew =
            (intensity / 100) * 4;

        affectedScene.style.filter =
            `blur(${blur}px)`;

        affectedScene.style.transform =
            `skewX(${skew}deg)`;

    }


    if (condition === "presbiopia") {

        const blur =
            (intensity / 100) * 5;

        affectedScene.style.filter =
            `blur(${blur}px)`;

    }


    if (condition === "daltonismo") {

        const saturation =
            1 - intensity / 150;

        affectedScene.style.filter =
            `saturate(${saturation})`;

    }


    const info =
        labDescriptions[condition];


    if (labExplanation && info) {

        labExplanation.innerHTML = `

            <strong>
                ${info.title}
            </strong>

            <br>

            ${info.text}

        `;

    }

}


if (visionCondition) {

    visionCondition.addEventListener(
        "change",
        updateLab
    );

}


if (visionIntensity) {

    visionIntensity.addEventListener(
        "input",
        updateLab
    );

}


/* =========================================
   RESETAR LABORATÓRIO
========================================= */

const resetLab =
    document.getElementById("resetLab");


if (resetLab) {

    resetLab.addEventListener(
        "click",
        () => {

            visionCondition.value =
                "normal";

            visionIntensity.value =
                0;

            updateLab();

        }
    );

}


/* =========================================
   ANTES / DEPOIS
========================================= */

const beforeAfterButton =
    document.getElementById(
        "beforeAfterButton"
    );


let showingAffected = true;


if (beforeAfterButton) {

    beforeAfterButton.addEventListener(
        "click",
        () => {

            showingAffected =
                !showingAffected;


            if (showingAffected) {

                affectedScene.style.display =
                    "block";

                beforeAfterButton.textContent =
                    "👁️ Mostrar visão normal";

            } else {

                affectedScene.style.display =
                    "none";

                beforeAfterButton.textContent =
                    "👁️ Mostrar visão afetada";

            }

        }
    );

}


/* =========================================
   TESTE DE FOCO
========================================= */

const focusTestButton =
    document.getElementById(
        "focusTestButton"
    );

const labExtra =
    document.getElementById(
        "labExtra"
    );


if (focusTestButton) {

    focusTestButton.addEventListener(
        "click",
        () => {

            labExtra.innerHTML = `

                <div class="glass-card">

                    <h3>
                        🔍 Teste de foco
                    </h3>

                    <p>
                        Observe os objetos próximos e distantes.
                        Ajuste a intensidade no laboratório e
                        perceba como a simulação muda.
                    </p>

                    <div
                        style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        gap:20px;
                        padding:30px 10px;
                        "
                    >

                        <span
                            style="
                            font-size:14px;
                            "
                        >
                            🏠 Objeto distante
                        </span>

                        <span
                            style="
                            font-size:38px;
                            "
                        >
                            🔎
                        </span>

                        <span
                            style="
                            font-size:60px;
                            "
                        >
                            👁️
                        </span>

                        <span
                            style="
                            font-size:14px;
                            "
                        >
                            📖 Objeto próximo
                        </span>

                    </div>

                </div>

            `;

            labExtra.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


/* =========================================
   TESTE DE CORES
========================================= */

const colorTestButton =
    document.getElementById(
        "colorTestButton"
    );


if (colorTestButton) {

    colorTestButton.addEventListener(
        "click",
        () => {

            labExtra.innerHTML = `

                <div class="glass-card">

                    <h3>
                        🎨 Teste de cores
                    </h3>

                    <p>
                        Compare os diferentes padrões abaixo.
                        Eles servem como demonstração educativa
                        da importância da percepção cromática.
                    </p>

                    <div
                        style="
                        display:grid;
                        grid-template-columns:
                        repeat(6, 1fr);
                        gap:8px;
                        margin-top:20px;
                        "
                    >

                        <div style="
                        height:60px;
                        background:#ff0000;
                        border-radius:10px;
                        "></div>

                        <div style="
                        height:60px;
                        background:#00ff00;
                        border-radius:10px;
                        "></div>

                        <div style="
                        height:60px;
                        background:#0000ff;
                        border-radius:10px;
                        "></div>

                        <div style="
                        height:60px;
                        background:#ffff00;
                        border-radius:10px;
                        "></div>

                        <div style="
                        height:60px;
                        background:#ff00ff;
                        border-radius:10px;
                        "></div>

                        <div style="
                        height:60px;
                        background:#00ffff;
                        border-radius:10px;
                        "></div>

                    </div>

                </div>

            `;

            labExtra.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


/* =========================================
   DESAFIO DO LABORATÓRIO
========================================= */

const startChallenge =
    document.getElementById(
        "startChallenge"
    );

const challengeText =
    document.getElementById(
        "challengeText"
    );

const challengeOptions =
    document.getElementById(
        "challengeOptions"
    );

const challengeResult =
    document.getElementById(
        "challengeResult"
    );


let challengeAnswer = "";


if (startChallenge) {

    startChallenge.addEventListener(
        "click",
        startVisionChallenge
    );

}


function startVisionChallenge() {

    const challengeAnomalies = [
        "miopia",
        "astigmatismo",
        "daltonismo",
        "presbiopia"
    ];


    const randomIndex =
        Math.floor(
            Math.random() *
            challengeAnomalies.length
        );


    challengeAnswer =
        challengeAnomalies[randomIndex];


    const anomaly =
        anomalies.find(
            item =>
                item.id ===
                challengeAnswer
        );


    const descriptions = {

        miopia:
            "Nesta simulação, objetos distantes parecem menos nítidos.",

        astigmatismo:
            "Nesta simulação, a imagem apresenta distorção ou borramento.",

        daltonismo:
            "Nesta simulação, algumas cores apresentam alteração de percepção.",

        presbiopia:
            "Nesta simulação, a capacidade de focalizar objetos próximos é representada de forma reduzida."

    };


    challengeText.textContent =
        descriptions[challengeAnswer];


    challengeOptions.innerHTML = "";


    const options =
        challengeAnomalies
            .sort(() => Math.random() - 0.5);


    options.forEach(id => {

        const item =
            anomalies.find(
                anomaly =>
                    anomaly.id === id
            );


        const button =
            document.createElement("button");


        button.className =
            "btn";


        button.textContent =
            item.name;


        button.addEventListener(
            "click",
            () => {

                if (
                    id ===
                    challengeAnswer
                ) {

                    challengeResult.innerHTML =
                        `🎉 Correto! Era ${item.name}.`;

                } else {

                    challengeResult.innerHTML =
                        `❌ Não foi dessa vez. A resposta era ${anomalies.find(a => a.id === challengeAnswer).name}.`;

                }

            }
        );


        challengeOptions.appendChild(
            button
        );

    });


    challengeResult.textContent = "";


    document
        .getElementById("challengeBox")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* =========================================
   MITOS E VERDADES
========================================= */

const myths = [

    {
        question:
            "Usar óculos aumenta o grau?",
        answer:
            "Mito. Os óculos corrigem a visão enquanto são utilizados, mas não fazem o grau aumentar por serem usados."
    },

    {
        question:
            "Ficar muito tempo no celular deixa a pessoa míope?",
        answer:
            "O uso prolongado de atividades de perto está sendo estudado em relação ao desenvolvimento da miopia, especialmente junto a outros fatores. Não é correto dizer simplesmente que o celular sozinho causa miopia."
    },

    {
        question:
            "Todo problema de visão precisa de cirurgia?",
        answer:
            "Mito. Muitas alterações visuais podem ser corrigidas ou acompanhadas sem cirurgia, dependendo da condição."
    },

    {
        question:
            "Daltonismo significa enxergar tudo em preto e branco?",
        answer:
            "Mito. Existem diferentes tipos de alterações na percepção das cores e a maioria não significa ausência completa de percepção cromática."
    }

];


const mythsGrid =
    document.getElementById(
        "mythsGrid"
    );


function renderMyths() {

    if (!mythsGrid) return;

    mythsGrid.innerHTML = "";


    myths.forEach(
        (myth, index) => {

            const card =
                document.createElement("article");


            card.className =
                "glass-card myth-card";


            card.innerHTML = `

                <h3>
                    ${myth.question}
                </h3>

                <p>
                    Clique para descobrir.
                </p>

                <div class="myth-answer">

                    <strong>
                        Resposta:
                    </strong>

                    ${myth.answer}

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    card.classList.toggle(
                        "open"
                    );

                }
            );


            mythsGrid.appendChild(card);

        }
    );

}


/* =========================================
   QUIZ
========================================= */

const quizQuestions = [

    {
        question:
            "Qual alteração costuma dificultar principalmente a visão de longe?",
        options: [
            "Miopia",
            "Presbiopia",
            "Daltonismo",
            "Catarata"
        ],
        answer: 0
    },

    {
        question:
            "Qual estrutura é responsável por receber a luz e gerar sinais visuais?",
        options: [
            "Íris",
            "Retina",
            "Pupila",
            "Córnea"
        ],
        answer: 1
    },

    {
        question:
            "Qual estrutura ajuda no ajuste do foco?",
        options: [
            "Cristalino",
            "Nervo óptico",
            "Retina",
            "Íris"
        ],
        answer: 0
    },

    {
        question:
            "O astigmatismo pode causar:",
        options: [
            "Somente cegueira total",
            "Alteração na percepção das cores",
            "Borramento ou distorção",
            "Aumento da audição"
        ],
        answer: 2
    },

    {
        question:
            "Daltonismo está relacionado principalmente à percepção de:",
        options: [
            "Sons",
            "Cores",
            "Temperatura",
            "Distância"
        ],
        answer: 1
    },

    {
        question:
            "Qual estrutura transmite informações visuais ao cérebro?",
        options: [
            "Nervo óptico",
            "Íris",
            "Cristalino",
            "Córnea"
        ],
        answer: 0
    },

    {
        question:
            "Qual atitude pode ajudar nos cuidados com a visão?",
        options: [
            "Ignorar alterações repentinas",
            "Evitar qualquer avaliação profissional",
            "Realizar acompanhamento quando indicado",
            "Usar óculos de outra pessoa"
        ],
        answer: 2
    }

];


const quizCard =
    document.getElementById(
        "quizCard"
    );


let currentQuestion = 0;

let score = 0;


function renderQuiz() {

    if (!quizCard) return;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        showQuizResult();

        return;

    }


    const question =
        quizQuestions[currentQuestion];


    quizCard.innerHTML = `

        <div>

            <p>
                Questão
                ${currentQuestion + 1}
                de
                ${quizQuestions.length}
            </p>

            <div class="quiz-question">

                ${question.question}

            </div>

            <div>

                ${question.options
                    .map(
                        (option, index) => `

                            <button
                                class="quiz-option"
                                data-index="${index}">

                                ${option}

                            </button>

                        `
                    )
                    .join("")}

            </div>

        </div>

    `;


    document
        .querySelectorAll(
            ".quiz-option"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const selected =
                        Number(
                            button.dataset.index
                        );


                    if (
                        selected ===
                        question.answer
                    ) {

                        score++;

                    }


                    currentQuestion++;

                    renderQuiz();

                }
            );

        });

}


function showQuizResult() {

    const percentage =
        Math.round(
            (
                score /
                quizQuestions.length
            ) * 100
        );


    let message;


    if (percentage >= 80) {

        message =
            "🔥 Excelente! Você domina o assunto.";

    } else if (
        percentage >= 50
    ) {

        message =
            "👏 Muito bem! Você já conhece bastante sobre visão.";

    } else {

        message =
            "📚 Continue estudando! Você pode tentar novamente.";

    }


    quizCard.innerHTML = `

        <div class="quiz-result">

            <div class="score">
                ${percentage}%
            </div>

            <h2>
                Resultado
            </h2>

            <p>
                Você acertou
                <strong>
                    ${score}
                </strong>
                de
                <strong>
                    ${quizQuestions.length}
                </strong>
                questões.
            </p>

            <p>
                ${message}
            </p>

            <button
                class="btn btn-primary"
                id="restartQuiz">

                🔄 Tentar novamente

            </button>

        </div>

    `;


    document
        .getElementById(
            "restartQuiz"
        )
        .addEventListener(
            "click",
            restartQuiz
        );

}


function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    renderQuiz();

}


/* =========================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================= */

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
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".info-card, .glass-card, .fact-card, .comparison-card"
    )
    .forEach(element => {

        observer.observe(element);

    });


/* =========================================
   INICIALIZAÇÃO
========================================= */

renderAnomalies();

renderMyths();

renderQuiz();

updateLab();
