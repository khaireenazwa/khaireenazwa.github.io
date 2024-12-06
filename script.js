document.addEventListener("DOMContentLoaded", () => {
    const birkinImage = document.getElementById("birkinImage");
    const introScreen = document.getElementById("introScreen");
    const mainContent = document.getElementById("mainContent");
    const menuButtons = document.querySelectorAll(".menu-bar button");
    const sections = document.querySelectorAll(".content-section");

    if (birkinImage && introScreen && mainContent) {
        birkinImage.addEventListener("click", () => {
            introScreen.style.opacity = "0";
            introScreen.style.transition = "opacity 1s ease";

            setTimeout(() => {
                introScreen.style.display = "none";
                mainContent.style.display = "block";
                mainContent.style.opacity = "0"; 
                mainContent.style.transition = "opacity 1s ease";
                mainContent.style.opacity = "1";
                document.body.style.overflow = "auto";
            }, 1000); 
        });
    }

    if (menuButtons && sections) {
        menuButtons.forEach((button) => {
            button.addEventListener("click", () => {
                sections.forEach((section) => {
                    section.classList.add("hidden");
                    section.classList.remove("active");
                });

                const targetSection = document.getElementById(button.dataset.section);
                console.log("Activating section:", button.dataset.section); 
                if (targetSection) {
                    targetSection.classList.remove("hidden");
                    targetSection.classList.add("active");

                    menuButtons.forEach((btn) => btn.classList.remove("active"));
                    button.classList.add("active");
                }
            });
        });
    }

    const conclusionSection = document.getElementById("conclusion");
    if (conclusionSection) conclusionSection.classList.add("hidden");

    const slides = document.querySelectorAll(".slide");
    const prevSlideButton = document.getElementById("prevSlide");
    const nextSlideButton = document.getElementById("nextSlide");
    let currentSlideIndex = 0;

    if (slides.length && prevSlideButton && nextSlideButton) {
        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add("active");
                    slide.classList.remove("hidden");
                } else {
                    slide.classList.remove("active");
                    slide.classList.add("hidden");
                }
            });
        };

        prevSlideButton.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            console.log(`Showing previous slide: ${currentSlideIndex}`);
            showSlide(currentSlideIndex);
        });

        nextSlideButton.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length; 
            console.log(`Showing next slide: ${currentSlideIndex}`);
            showSlide(currentSlideIndex);
        });
    }

    const chartDataUrls = {
        chart1: "https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Price%20Growth%20Comparison%20(1st%20Project%20Chart).json",
        chart2: "https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Inflation%20Adjusted%20project.json",
        chart3: "https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Annual%20Percentage%20Return%20(1).json",
        chart4: "https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/supply%20and%20demand%20project.json",
        chart5: "https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/volatility%20project.json",
        chart6: "https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/correlation%20project.json",
        chart7: "https://raw.githubusercontent.com/khaireenazwa/khaireenazwa.github.io/refs/heads/main/Cumulative%20Return%20Over%20Time%20(project).json"
    };

    const chartDimensions = {
        chart1: { width: 600, height: 400 },
        chart2: { width: 600, height: 350 },
        chart3: { width: 500, height: 350 },
        chart4: { width: 550, height: 250 },
        chart5: { width: 500, height: 350 },
        chart6: { width: 600, height: 400 },
        chart7: { width: 500, height: 350 },
    };

    Object.keys(chartDataUrls).forEach((chart) => {
        const containerId = `#${chart}-container`;
        const { width, height } = chartDimensions[chart];
        vegaEmbed(containerId, chartDataUrls[chart], {
            actions: false,
            renderer: "svg",
            width: width,
            height: height,
        })
            .then(() => console.log(`${chart} embedded successfully!`))
            .catch((err) => console.error(`Error embedding ${chart}:`, err));
    });
});
