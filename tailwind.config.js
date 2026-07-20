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
          overlay: 'rgba(253, 251, 247, 0.85)',
        }
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        serif: ['Noto Serif KR', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(139, 90, 43, 0.08)',
        'soft': '0 15px 35px -5px rgba(200, 138, 117, 0.15)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(200, 138, 117, 0.06)',
      }
    },
  },
  plugins: [],
}
