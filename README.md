# Madera

A front-end storefront concept for home décor and furniture, built with Angular. It features a home page, a shop with category/color filtering, product detail pages, a blog, and an about page — with scroll animations throughout.

## Features

- **Home page** — hero banner and a "products of the week" showcase
- **Shop** — product listing with category filtering (dropdown + checkboxes), color filtering, and a price range slider (`ng5-slider`)
- **Product details** — individual product view reached via `/product-detail/:name/:id`
- **Blog** and **About** pages
- Scroll-triggered animations via [AOS](https://michalsnik.github.io/aos/)

## Tech stack

- [Angular 13](https://angular.io/) (CLI-generated project)
- [RxJS](https://rxjs.dev/)
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- Bootstrap (via CDN/classes) for layout and components
- Karma + Jasmine for unit tests



## Project structure

```
src/app/
├── home/               # Landing page (banner + products of the week)
├── shop/                # Product listing with category/color/price filters
├── product-details/     # Single product view
├── blog/                 # Blog page
├── abput/                # About page
├── navbar/, footer/     # Shared layout components
└── services/
    └── get-data.service.ts   # Static product/collection data
```



## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (compatible with Angular 13, e.g. Node 14–16)
- [Angular CLI](https://angular.io/cli) v13.3.11: `npm install -g @angular/cli@13.3.11`

### Installation

```bash
git clone https://github.com/OGOMIDEEE/madera.git
cd madera
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically when you edit source files.

### Build

```bash
ng build
```

Build artifacts are output to the `dist/` directory.

### Running unit tests

```bash
ng test
```

Runs unit tests via [Karma](https://karma-runner.github.io).

## Routes

| Path | Component |
|---|---|
| `/` | Home |
| `/shop` | Shop |
| `/product-detail/:name/:id` | Product Details |
| `/blog` | Blog |
| `/about` | About |



- Add a cart and checkout flow
- Replace static product/collection arrays with a real backend or headless CMS
- Rename the `abput` folder/component to `about`
