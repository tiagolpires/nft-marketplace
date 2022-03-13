module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'eerie-black': '#14152C',
        'max-purple': '#82218F',
        'byzantine': '#AA33B5',
        'yankees-blue': '#222345',
        'space-cadet': '#292A58',
        'black-transparent': 'rgba(0,0,0,.45)'
      },
      fontFamily: {
        'mont': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      scale: {
        '65': '0.65',
      }
    },
  },
  plugins: [],
}
