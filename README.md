<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->


# Getting Started

## 1. Start project
- Node version: 20.0.0 or above
- Git clone the source code
  
```bash
npm install
# or
yarn
```
then 

```bash
npm run dev
# or
yarn dev
```
- Local url: http://localhost:3000
- Deployment url: https://credit-card-management-challenge.netlify.app

## 2. Project description

- Nextjs because of the poplation & reputation.
- Use typescript for type validation.
- Dummy data is mock JSON file with api return which is supported by Nextjs.
- Use `redux`, `react-redux` & `reduxt-thunk` to handle state management.
- When start, 2 cards are ready, the browser fetch next 2 cards.

### 2.1 Features
- Mobile version (responsive).
- Desktop version.
- Add new card: expiration date, card's number & cvc will be generated automatically.
- Freeze card: depend on card's status, card is freezed or not. Freeze button will be toggle depend on card's context.

### 2.2 Additional libraries & noted
- `react-slick` for carousel
- Mobile UI has been changed to adapt with the responsive design, element position & faster development.
- Well folders/files structure for easy to read, maintain & visualized.
- Requirements are fullfiled.

