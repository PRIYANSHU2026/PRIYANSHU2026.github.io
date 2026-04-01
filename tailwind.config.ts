import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['rgb(var(--font-inter) / <alpha-value>)', 'system-ui', 'sans-serif'],
        mono: ['rgb(var(--font-jetbrains) / <alpha-value>)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        background: 'rgb(var(--bg-color) / <alpha-value>)',
        foreground: 'rgb(var(--text-color) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--bg-color-alt) / <alpha-value>)',
          foreground: 'rgb(var(--text-color) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // GSoC / Google-inspired accent colors
        gsoc: {
          green: '#0d9488',
          orange: '#f97316',
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC04',
        },
        emerald: {
          50: 'rgb(var(--c-emerald-50) / <alpha-value>)',
          100: 'rgb(var(--c-emerald-100) / <alpha-value>)',
          200: 'rgb(var(--c-emerald-200) / <alpha-value>)',
          300: 'rgb(var(--c-emerald-300) / <alpha-value>)',
          400: 'rgb(var(--c-emerald-400) / <alpha-value>)',
          500: 'rgb(var(--c-emerald-500) / <alpha-value>)',
          600: 'rgb(var(--c-emerald-600) / <alpha-value>)',
          700: 'rgb(var(--c-emerald-700) / <alpha-value>)',
          800: 'rgb(var(--c-emerald-800) / <alpha-value>)',
          900: 'rgb(var(--c-emerald-900) / <alpha-value>)',
          950: 'rgb(var(--c-emerald-950) / <alpha-value>)',
        },
        teal: {
          50: 'rgb(var(--c-teal-50) / <alpha-value>)',
          100: 'rgb(var(--c-teal-100) / <alpha-value>)',
          200: 'rgb(var(--c-teal-200) / <alpha-value>)',
          300: 'rgb(var(--c-teal-300) / <alpha-value>)',
          400: 'rgb(var(--c-teal-400) / <alpha-value>)',
          500: 'rgb(var(--c-teal-500) / <alpha-value>)',
          600: 'rgb(var(--c-teal-600) / <alpha-value>)',
          700: 'rgb(var(--c-teal-700) / <alpha-value>)',
          800: 'rgb(var(--c-teal-800) / <alpha-value>)',
          900: 'rgb(var(--c-teal-900) / <alpha-value>)',
          950: 'rgb(var(--c-teal-950) / <alpha-value>)',
        },
        orange: {
          400: 'rgb(var(--c-orange-400) / <alpha-value>)',
          500: 'rgb(var(--c-orange-500) / <alpha-value>)',
        },
        amber: {
          500: 'rgb(var(--c-amber-500) / <alpha-value>)',
        },
        cyan: {
          300: 'rgb(var(--c-cyan-300) / <alpha-value>)',
        }
      },
      borderRadius: {
        lg: 'rgb(var(--radius) / <alpha-value>)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      screens: {
        'xs': '475px',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
