//----------------Team Container Button drag Effect Start-------------------//

document.addEventListener("DOMContentLoaded", function () {
    const teamContainer = document.querySelector(".team-container");

    let isDragging = false;
    let startX;
    let scrollLeft;

    // Mouse events
    teamContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - teamContainer.offsetLeft;
        scrollLeft = teamContainer.scrollLeft;
    });

    teamContainer.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    teamContainer.addEventListener("mouseup", () => {
        isDragging = false;
    });

    teamContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - teamContainer.offsetLeft;
        const walk = (x - startX) * 3; // Change 3 to control speed
        teamContainer.scrollLeft = scrollLeft - walk;
    });

    // Touch events
    teamContainer.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - teamContainer.offsetLeft;
        scrollLeft = teamContainer.scrollLeft;
    });

    teamContainer.addEventListener("touchend", () => {
        isDragging = false;
    });

    teamContainer.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - teamContainer.offsetLeft;
        const walk = (x - startX) * 3; // Change 3 to control speed
        teamContainer.scrollLeft = scrollLeft - walk;
    });
});

//----------------Team Container Button drag Effect End-------------------//