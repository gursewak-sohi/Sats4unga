document.addEventListener("alpine:init", () => {
    Alpine.data("data", () => ({
        isMenuOpen: false,
    }));
});