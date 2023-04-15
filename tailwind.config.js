/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#282A2B',
          300: '#282a2bbf',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.primary'),
            hr: {
              borderColor: theme('colors.slate.100'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            code: {
              color: '#86e1fc',
              '&::before': {
                content: `"" !important`,
              },
              '&::after': {
                content: `"" !important`,
              },
              fontWeight: 'normal',
            },
            '[data-rehype-pretty-code-fragment] pre': {
              '.line::before': {
                content: 'counter(line)',
                counterIncrement: 'line',
                display: 'inline-block',
                width: '1rem',
                marginRight: '1rem',
                textAlign: 'right',
                color: theme('colors.slate.600'),
              },

              '.line--highlighted::before': {
                color: theme('colors.slate.400'),
              },
            },
            pre: {
              opacity: 0.98,
              background: 'var(--tw-prose-pre-bg)',
              padding: '0.75rem 0',
              lineHeight: 2,

              '> code': {
                display: 'grid',
                counterReset: 'line',

                '.word': {
                  background: 'var(--tw-prose-pre-bg)',
                  padding: '0.25rem',
                  borderRadius: '0.25rem',
                },
                '> .line': {
                  padding: '0 1.25rem',
                  borderLeft: `2px solid transparent`,
                },
                '> .line.line--highlighted': {
                  background: 'var(--tw-prose-pre-bg)',
                  borderLeftColor: theme('colors.blue.400'),
                },
              },
            },
            ':not(pre) > code': {
              background: 'var(--tw-prose-pre-bg)',
              padding: '0.25rem',
              fontSize: '0.95rem !important',
              borderRadius: '0.25rem',
            },
          },
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

