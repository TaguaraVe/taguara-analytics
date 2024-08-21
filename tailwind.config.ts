import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        error: '#FF3B30',
        success: '#34C759',
        myGrayDark: '#292929',
        myGrayLight: '#DFE7D9',
        myWhite: '#fffbf5',
        myColor1: '#DFE7D9',
        ctaInv: '#5210ac',
        cta: '#eb6909',
      },
      backgroundImage: {
        'home-pattern': "url('/assets/images/bgs/3.png')",
        'access-pattern': "url('/assets/images/bgs/3.png')",
        'login-pattern': "url('/assets/images/bgs/3.png')",
        'about-pattern': "url('/assets/images/bgs/result.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        clamped: 'clamp(0.6rem, 3vw, 2rem)',
      },
    },
  },
  plugins: [],
};
export default config;
