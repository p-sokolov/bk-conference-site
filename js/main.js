window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;

    document.querySelector(".hero").style.backgroundPositionY =
        `${scrolled * 0.4}px`;

});