# Explore Page

This test project is showcasing my developer skills to build a website based on a provided design. I mostly adhered to making it pixel perfect although because I was only provided a single screen size I improvised in some specifics so that the end result is more responsive for all screen sizes and adheres to a global design system like offered in Tailwind.

## Lighthouse scores:

### Desktop
![Screenshot](.github/explore-page-lighthouse--desktop.png)


### Mobile
![Screenshot](.github/explore-page-lighthouse--mobile.png)


## Deployment:

- CD setup for `main` branch, deployed on vercel
- https://david-explore-page.vercel.app/

## Features

- Responsive across mobile and desktop and tablet screensizes
- Accessibility focused code with aria-labels, etc
- Resusable Vue components for future flexibilty
- Locally installed fonts for maximum performance (via fontsource)

## Areas to improve

- Integrate a more robust animation library like [GSAP](https://gsap.com/) or [VueUse's Motion](https://motion.vueuse.org/) library

## Uses

- Vuejs 3 with Vite
- Tailwind CSS

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
