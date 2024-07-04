// Importa `Config` desde tailwindcss
import type { Config } from "tailwindcss";

// Define la configuración de Tailwind CSS
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verdePrimario: '#51ae32',
        amarilloPrimario: 'rgb(255 193 7)',
        // Puedes añadir más colores personalizados aquí si es necesario
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Puedes añadir más gradientes de fondo personalizados aquí si es necesario
      },
    },
  },
  // Define plugins para Tailwind CSS, como addVariablesForColors si es relevante para tu aplicación
  plugins: [addVariablesForColors],
};

// Este plugin agrega cada color de Tailwind como una variable CSS global, ej. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = theme("colors");
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

// Exporta la configuración de Tailwind CSS
export default config;
