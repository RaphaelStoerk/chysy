module.exports = {
    content: [
      './pages/**/*.{vue,js}',
      './components/**/*.{vue,js}',
      './layouts/**/*.{vue,js}',
      './app.vue',
    ],
    theme: {
      extend: {},
      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'poppins': ['poppins', 'serif'],
        'fira-mono': ['fira-mono'],
      },
    },
    plugins: [
      require('daisyui'),
    ],
    // daisyUI config (optional)
    daisyui: {
        themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true,
    },
  }