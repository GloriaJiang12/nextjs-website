/*
 * @Author: jwj
 * @Date: 2023-07-24 21:08:01
 * @LastEditors: jwj
 * @LastEditTime: 2023-07-24 23:22:58
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "banner-animate": "bounce 1s",
      },
    },
  },
  plugins: [],
};
