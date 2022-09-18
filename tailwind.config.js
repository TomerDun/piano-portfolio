module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        // 'main': '#0A0742',
        // 'sec': '#00C8A0',
        // 'info': '#3F3273',  
        
        main: {
          300: '#2a2d32',
          500: '#151719'
        },

        info: '#1CB68B',

        sec: {
          300: '#6b6dff',
          500: '#5658DD '
        }
      },
      fontFamily: {
        'roboto': ['Roboto']
      },
    },
  },
  plugins: [],
}
