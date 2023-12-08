/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'card': '320px'
      },
      height: {
        'card': '170px'
      },
      backgroundColor: {
        btn: '#21092f'
      },
      backgroundImage: {
        'mobile': "url('./assets/images/bg-main-mobile.png')",
        'desktop': "url('./assets/images/bg-main-desktop.png')",
        'back-card': "url('./assets/images/bg-card-back.png')",
        'front-card': "url('./assets/images/bg-card-front.png')",
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'san-serif']
      },
      fontSize: {
        'body': '18px'
      },
      // textColor: {
      //   btn: '#21092f'
      // }
    },
  },
  plugins: [],
}