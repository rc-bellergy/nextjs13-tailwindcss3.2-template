# Node.js with tailwindcss Template

## Development environment 

    node v18.14.2
    npm 9.5.0
    next 13.2.4
    tailwindcss 3.2.7

## Start

    npm install
    npm run dev

## Export static site to /out directory

    npm run build





---
## Notes of creating this template:

### Setup the export static site

#1 update /package.json:

    "scripts": {
        "build": "next build && next export"
    }
 
#2 add/update /next.config.js

    /**
    * @type {import('next').NextConfig}
    */
    const nextConfig = {
        output: 'export',
        images: {
            loader: "akamai",
            path: "/",
        }
    }
    module.exports = nextConfig


### Embeded tailwindcss to Next.js
https://tailwindcss.com/docs/guides/nextjs

#1 Install

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

#2 update /tailwind.config.js

    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ]

#3 update /postcss.config.js (not sure need it?)

    tailwindcss: { config: './tailwindcss-config.js' }

#4 add it to globals.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### Install styled-components
Use styled-components: https://styled-components.com/docs

    npm i -D styled-components

### Install tailwind-styled-components
Use tailwind-styled-components: https://www.npmjs.com/package/tailwind-styled-components

    npm i -D tailwind-styled-components