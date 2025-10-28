/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0F',
        'dark-secondary': '#121218',
        'dark-tertiary': '#1A1A24',
        'accent-purple': '#A246FF',
        'accent-cyan': '#2DE8B5',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #A246FF 0%, #2DE8B5 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(162, 70, 255, 0.3)',
        'glow-md': '0 0 20px rgba(162, 70, 255, 0.4)',
        'glow-lg': '0 0 30px rgba(162, 70, 255, 0.5)',
        'glow-purple': '0 0 40px rgba(162, 70, 255, 0.4)',
        'glow-cyan': '0 0 40px rgba(45, 232, 181, 0.4)',
      },
    },
  },
  plugins: [],
}

