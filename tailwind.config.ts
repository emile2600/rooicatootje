import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        grey:  '#DFCAA0', // '#A9A9A9',
        white: '#dcded5', // alternate #dcded5
        'clear-white': '#ffffff',
        brown: '#3d240c',
        green: '#708090', // '#588157',
        blue: '#83c5be', // `#669BBC`,
      },
      backgroundImage: {
        'concrete-wall': "url('https://www.transparenttextures.com/patterns/concrete-wall-3.png');", /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
        tiles: "url('https://www.transparenttextures.com/patterns/batthern.png');", /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
        axiom: "url('https://www.transparenttextures.com/patterns/axiom-pattern.png');",
      },
      fontFamily: {
        logo: ['Engravers MT']
      },
      gridTemplateColumns: {
        '3-1-1': "3fr 1fr 1fr",
        '1-3-1': "1fr 3fr 1fr",
        '1-1-3': "1fr 1fr 3fr"
      }
    },
  },
  plugins: [],
} satisfies Config;
export default config;
