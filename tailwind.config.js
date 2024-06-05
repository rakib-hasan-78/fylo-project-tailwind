
export default {
  content: [
    './*.{html,js}', 
    './src/**/*.{html,js}'
  ],
  darkMode:'class',

  screens:{
    sm:'480px',
    md:'767px',
    lg:'976px',
    xl:'1440px'
  },
  theme: {
    extend: {
      fontFamily:{
        raleway:['Raleway', 'sans-serif'],
        opensans:['Open Sans', 'sans-serif']
      },
      backgroundImage:(theme)=>({
        'logo-dark-mode':"url('./src/images/logo-dark-mode.svg')",
        'logo-light-mode':"url('./src/images/logo-light-mode.svg')",
        'curvy-dark-mode':"url('./src/images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode':"url('./src/images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants:{
    extend:{
      backgroundImage:['dark'],
    },
  },
  plugins: [],
}

