import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                "bg-gray-background": "#f7f8fc",
                blue: "rgb(29, 78, 216)",
                yellow: "rgb(250, 204, 21)",
                red: "rgb(220, 38, 38)",
                green: "rgb(21, 128, 61)",
                purple: "rgb(168, 85, 247)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xxs: ["0.625rem", { lineHeight: "1rem" }],
            },
        },
    },

    plugins: [forms],
};
