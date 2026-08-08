document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const paragraphs = document.querySelectorAll(".message p");

    // Efek muncul untuk kartu utama
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 1.2s ease, transform 1.2s ease";

    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);

    // Efek muncul untuk setiap paragraf
    paragraphs.forEach((paragraph, index) => {
        paragraph.style.opacity = "0";
        paragraph.style.transform = "translateY(15px)";
        paragraph.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        observer.observe(paragraph);
    });
});
