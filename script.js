/* =========================================
   ANOMALIAS DA VISÃO
   JAVASCRIPT PRINCIPAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. MENU / NAVEGAÇÃO
    ========================================= */

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });


    /* =========================================
       2. SCROLL SUAVE
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =========================================
       3. BOTÃO VOLTAR AO TOPO
    ========================================= */

    let backToTop = document.getElementById("backToTop");

    if (!backToTop) {

        backToTop = document.createElement("button");

        backToTop.id = "backToTop";
        backToTop.innerHTML = "↑";
        backToTop.setAttribute("aria-label", "Voltar ao topo");

        document.body.appendChild(backToTop);
    }

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================================
       4. FAQ
    ========================================= */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const item = question.parentElement;
            const answer = item.querySelector(".faq-answer");

            const isOpen = item.classList.contains("open");

            document.querySelectorAll(".faq-item").forEach(otherItem => {

                otherItem.classList.remove("open");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                    otherAnswer.style.paddingBottom = "0";
                }

            });

            if (!isOpen) {

                item.classList.add("open");

                if (answer) {

                    answer.style.maxHeight =
                        answer.scrollHeight + "px";

                    answer.style.paddingBottom = "20px";
                }

            }

        });

    });


    /* =========================================
       5. ANIMAÇÃO AO ENTRAR NA TELA
    ========================================= */

    const animatedElements = document.querySelectorAll(
        ".card, .info-box, .section-header, .table-wrapper"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-in");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });


    /* =========================================
       6. ANO AUTOMÁTICO NO FOOTER
    ========================================= */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    /* =========================================
       7. CONTADOR DE CARDS
    ========================================= */

    const counters = document.querySelectorAll("[data-counter]");

    const counterObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = Number(counter.dataset.counter);

                let current = 0;

                const duration = 1200;
                const increment = target / (duration / 16);

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target;
                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);
            });

        },
        {
            threshold: 0.5
        }
    );

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =========================================
       8. INDICADOR DE PROGRESSO DA PÁGINA
    ========================================= */

    const progressBar = document.createElement("div");

    progressBar.id = "readingProgress";

    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "3px";
    progressBar.style.width = "0%";
    progressBar.style.background =
        "linear-gradient(90deg, #1769e0, #54a9ff)";
    progressBar.style.zIndex = "9999";
    progressBar.style.transition = "width 0.1s linear";

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percentage =
            (scrollTop / pageHeight) * 100;

        progressBar.style.width =
            percentage + "%";

    });


    /* =========================================
       9. TROCA DE FONTE
    ========================================= */

    const fonts = [
        "Inter",
        "Poppins",
        "Arial",
        "Georgia",
        "Verdana"
    ];

    let currentFont = 0;

    const fontButton =
        document.getElementById("fontButton");

    if (fontButton) {

        fontButton.addEventListener("click", () => {

            currentFont++;

            if (currentFont >= fonts.length) {
                currentFont = 0;
            }

            document.body.style.fontFamily =
                fonts[currentFont];

            localStorage.setItem(
                "siteFont",
                fonts[currentFont]
            );

        });

    }

    const savedFont =
        localStorage.getItem("siteFont");

    if (savedFont) {
        document.body.style.fontFamily = savedFont;
    }


    /* =========================================
       10. TAMANHO DA FONTE
    ========================================= */

    let fontSize = 16;

    const increaseFont =
        document.getElementById("increaseFont");

    const decreaseFont =
        document.getElementById("decreaseFont");

    if (increaseFont) {

        increaseFont.addEventListener("click", () => {

            if (fontSize < 22) {

                fontSize += 1;

                document.body.style.fontSize =
                    fontSize + "px";
            }

        });

    }

    if (decreaseFont) {

        decreaseFont.addEventListener("click", () => {

            if (fontSize > 13) {

                fontSize -= 1;

                document.body.style.fontSize =
                    fontSize + "px";
            }

        });

    }


    /* =========================================
       11. MODO ESCURO
    ========================================= */

    const darkButton =
        document.getElementById("darkMode");

    if (darkButton) {

        darkButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const enabled =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "darkMode",
                enabled ? "true" : "false"
            );

        });

    }

    if (
        localStorage.getItem("darkMode") === "true"
    ) {

        document.body.classList.add("dark-mode");
    }


    /* =========================================
       12. PESQUISA NO SITE
    ========================================= */

    const searchInput =
        document.getElementById("searchInput");

    const searchableElements =
        document.querySelectorAll(
            ".card, .info-box, .faq-item"
        );

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const search =
                searchInput.value
                    .toLowerCase()
                    .trim();

            searchableElements.forEach(element => {

                const text =
                    element.textContent.toLowerCase();

                if (text.includes(search)) {

                    element.style.display = "";

                } else {

                    element.style.display = "none";
                }

            });

        });

    }


    /* =========================================
       13. BOTÃO DE LIMPAR PESQUISA
    ========================================= */

    const clearSearch =
        document.getElementById("clearSearch");

    if (clearSearch && searchInput) {

        clearSearch.addEventListener("click", () => {

            searchInput.value = "";

            searchableElements.forEach(element => {
                element.style.display = "";
            });

            searchInput.focus();
        });

    }


    /* =========================================
       14. ALERTA DE COPIAR TEXTO
    ========================================= */

    const copyButtons =
        document.querySelectorAll("[data-copy]");

    copyButtons.forEach(button => {

        button.addEventListener("click", async () => {

            const text =
                button.dataset.copy;

            try {

                await navigator.clipboard.writeText(text);

                const original =
                    button.textContent;

                button.textContent = "Copiado!";

                setTimeout(() => {
                    button.textContent = original;
                }, 1500);

            } catch (error) {

                console.log(
                    "Não foi possível copiar."
                );

            }

        });

    });


    /* =========================================
       15. LAZY LOAD DE IMAGENS
    ========================================= */

    const images =
        document.querySelectorAll("img[data-src]");

    const imageObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const image = entry.target;

                    image.src =
                        image.dataset.src;

                    image.removeAttribute("data-src");

                    imageObserver.unobserve(image);

                });

            }
        );

    images.forEach(image => {
        imageObserver.observe(image);
    });


    /* =========================================
       16. ATUALIZA MENU CONFORME O SCROLL
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href === "#" + currentSection
            ) {

                link.classList.add("active");
            }

        });

    });


    /* =========================================
       17. EFEITO PARALLAX NO HERO
    ========================================= */

    const heroVisual =
        document.querySelector(".hero-visual");

    if (heroVisual) {

        window.addEventListener("scroll", () => {

            const scroll =
                window.scrollY;

            if (scroll < 700) {

                heroVisual.style.transform =
                    `translateY(${scroll * 0.08}px)`;
            }

        });

    }


    /* =========================================
       18. CURSOR / HOVER DOS CARDS
    ========================================= */

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `translateY(-8px)
                 perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0)";

        });

    });


    /* =========================================
       19. MENSAGEM DE CARREGAMENTO
    ========================================= */

    document.body.classList.add("site-loaded");


    /* =========================================
       20. LOG
    ========================================= */

    console.log(
        "✓ Site Anomalias da Visão carregado com sucesso."
    );

});
