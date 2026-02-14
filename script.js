// Script pour l'anim fond de page //

const glow = document.querySelector(".glow");

if (glow) {
    setInterval(() => {
        glow.style.opacity = 0.6 + Math.random() * 0.3;
    }, 4000);
}




//
document.addEventListener("DOMContentLoaded", () => {

    const timeline = document.getElementById("timeline");

    if (!timeline) return;

    const events = [
        { date: "2025–2026", text: "Fin de la première année du BTS SIO option SLAM (aménagement sur 3 ans)" },
        { date: "3 mars 2025 – 28 mars 2025", text: "Stage BTS SIO au service informatique Estérel Côte d’Azur" },
        { date: "2024–2025", text: "Première année BTS SIO – SLAM" },
        { date: "Janvier 2024", text: "Présentation du BUT Réseaux & Télécommunications aux lycéens" },
        { date: "2023–2024", text: "BUT Réseaux et Télécommunications – Campus Sophiatech (Nice)" },
        { date: "2022–2023", text: "Terminale STI2D option SIN – Lycée Albert Camus" },
        { date: "2021–2022", text: "Première STI2D – Lycée Albert Camus" }
    ];

    timeline.innerHTML = `<div class="timeline-line"></div>`;

    events.forEach(event => {
        const item = document.createElement("div");
        item.classList.add("timeline-item");

        item.innerHTML = `
            <span class="timeline-dot"></span>
            <div class="timeline-content">
                <h3>${event.date}</h3>
                <p>${event.text}</p>
            </div>
        `;

        timeline.appendChild(item);
    });
});

//