/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
    content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/container-queries"),
        daisyui,
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake", "emerald", "cyberpunk", "halloween", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    },
};
