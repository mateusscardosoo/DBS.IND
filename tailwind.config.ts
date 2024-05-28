import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/AzGrO4Z61Zueln8M/fundo-banner-mP4pWGrxGWuxzPPz.jpg')",
        'hero-image': "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=574,fit=crop/AzGrO4Z61Zueln8M/arte-do-banner-AVLJ8vW1JqfqlVWD.png')",
        
      },
      colors: {
        "primary": "#08A3CA",
        "secondary": "#1E1E1E"
      }
    },
  },
  plugins: [],
};
export default config;
