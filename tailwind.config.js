/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shop: {
          bg: '#FDFBF7',     // 따뜻한 웜 화이트
          sub: '#F5EFEB',    // 소프트 베이지
          text: '#4A3E3D',   // 차콜 브라운
          primary: '#C88A75',// 로즈 브라운 / 테라코타
          secondary: '#8B5A2B', // 우드 브라운
          rose: '#F3D1C9',   // 소프트 로즈
          gold: '#D2B48C',   // 골드/베이지
        }
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        serif: ['Noto Serif KR', 'serif'],
      }
    },
  },
  plugins: [],
}
