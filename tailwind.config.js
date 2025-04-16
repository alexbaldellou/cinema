/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Verifica que los archivos de React estén incluidos
    theme: {
      extend: {
        colors: {
          verdePastelClaro: "#cde0d7",
          verdePastelOscuro: "#98b7ac",
          cremaPastelClaro: "#fffcf1",
          cremaPastelOscuro: "#f0e7da",
          grisPastel: "#d0c9c9"
        }
      },
    },
    plugins: [],
  };
  