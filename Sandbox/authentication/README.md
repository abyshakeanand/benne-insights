# authentication

## Project Setup
- Firebase app nickname being used - Third time charm
- Resolving babel/loose error/warning - npm i @babel/core@7.13.15 @babel/preset-env@7.13.15
- Installing Tailwind
- -- npm uninstall @nuxtjs/tailwindcss tailwindcss
- -- npm install -D @nuxtjs/tailwindcss tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
- -- '@nuxtjs/tailwindcss' (in nuxt.config.js, in buildModules)
- -- npx tailwindcss init
- -- Following config in tailwind.config.js

purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],

- Include tailwind in your css
- Create file /assets/css/tailwind.css

/* ./assets/css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

# Adding firebase
- https://www.davidroyer.me/blog/nuxtjs-firebase-auth/
- 
