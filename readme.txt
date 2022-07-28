npx create-react-app cm-mui-and-tailwind-demo --template typescript
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/icons-material


- npx tailwindcss init -p
- In index.css, add the last line

  @tailwind components;
  @tailwind utilities;

- In tailwind.config.js, update content and important

    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    important: '#root',
    theme: {
        extend: {},
    },
    plugins: [],
    }

- copy and paste InjectTailwind.tsx in src
- In index.tsx,   
  import InjectTailwind from './InjectTailwind' 
    and 
  <InjectTailwind>
      <App />
  </InjectTailwind>




# vscode extension for tailwind
bradlc.vscode-tailwindcss

# document
https://tailwindcss.com/

# Useful example 
<div className="hover:text-yellow-400">1234</div>