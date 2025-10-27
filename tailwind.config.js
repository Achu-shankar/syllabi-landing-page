/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/nextra-theme-docs/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'gradient-ai': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  			'gradient-ai-2': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
  			'gradient-ai-3': 'linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%)',
  			'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(261, 87%, 68%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(241, 83%, 66%, 1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(192, 85%, 56%, 1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(280, 76%, 62%, 1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(310, 79%, 62%, 1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(240, 76%, 64%, 1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(210, 84%, 64%, 1) 0px, transparent 50%)'
  		},
  		animation: {
  			'gradient': 'gradient 8s linear infinite',
  			'glow': 'glow 2s ease-in-out infinite alternate',
  			'float-slow': 'float-slow 8s ease-in-out infinite',
  		},
  		keyframes: {
  			gradient: {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			},
  			glow: {
  				'from': {
  					'box-shadow': '0 0 20px rgba(139, 92, 246, 0.5)'
  				},
  				'to': {
  					'box-shadow': '0 0 30px rgba(139, 92, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.5)'
  				}
  			},
  			'float-slow': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)',
  				},
  				'33%': {
  					transform: 'translate(30px, -30px) scale(1.1)',
  				},
  				'66%': {
  					transform: 'translate(-20px, 20px) scale(0.9)',
  				}
  			}
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
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
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}