# Instalacje 
https://code.visualstudio.com/download 
https://nodejs.org/en/download/prebuilt-binaries
https://www.git-scm.com/download/win

node -v 
v20.10.0

npm -v 
10.2.3

git -v 
git version 2.43.0.windows.1

code -v 
1.89.1

tsc -v 
Version 5.4.5

# Terminal
View -> Terminal Ctrl + ~


# NVM
https://github.com/coreybutler/nvm-windows

nvm list 
nvm install lts 
nvm use lts

node -v 

# TypeScript 
npm install --global typescript@latest
npm i -g typescript

tsc -v 
Version 5.4.5

# GIT 

F1 
-> Git Clone 
-> Paste
https://bitbucket.org/ev45ive/testuj-sii-typescript2.git
-> Clone from URL 
-> Select location
-> Open window

git clone https://bitbucket.org/ev45ive/testuj-sii-typescript2.git

## Package JSON
npm init -y

npm i // package.json + ^updates
npm ci // package-lock.json - exact! no updates

# Semver
https://semver.org/lang/pl/ 
https://semver.npmjs.com/


npm outdated

Package  Current  Wanted  Latest  Location             Depended by
jquery     3.6.4   3.6.4   3.7.1  node_modules/jquery  1_migracja 

npm update >> Wanted
npm install@latest >> Latest

npm audit
found 0 vulnerabilities

# TSC

cd trener/1_migracja/
tsc index.ts
tsc --strict index.ts
tsc --strict --target es2015 index.ts
tsc --strict --target es2015 --watch index.ts

# Source maps

tsc --target es2015 --sourceMap index.ts
node --enable-source-maps trener/1_migracja/index.js

tsc --strict --target es2015  --sourceMap  --outDir ./dist --watch index.ts

tsc --strict --target es2015  --sourceMap  --outDir ./dist --watch ./src/**.ts

# TsConfig.json

tsc --init 
tsc --strict --target es2015  --sourceMap  --outDir ./dist --init ./src/**.ts
Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es6
  module: commonjs
  outDir: ./dist
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig

# JSDoc

https://jsdoc.app/

https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis


# Declaration .d.ts
tsc --declaration --emitDeclarationOnly --allowJs  ./src/lib.js


  Try `npm i --save-dev @types/react` if it exists or add a new declaration (.d.ts) file containing `declare module 'react';


# Node JS 
Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`

- package.json
  - npm init -y 

- Install
  - npm i express express-session 
  - npm i --save-dev @types/express @types/express-session 

- gitignore
  echo 'node_modules' >> .gitignore
  echo 'dist' >> .gitignore

- TypeScript
  - tsc --init 
  - tsc --init --target es2022 --outDir ./dist --lib es2022 --sourceMap ./src/*.ts

  - tsc 
  - tsc --watch

  - package.json scripts + nodemon, concurently, etc..


## Frontend TS

- package.json
  - npm init -y 

- Install
  npm i react 
  npm i -D @types/react 

- gitignore
  echo 'node_modules' >> .gitignore
  echo 'dist' >> .gitignore

- TypeScript
  - tsc --init --target es2022 --outDir ./dist --sourceMap ./src/*.ts
  - tsc --init --target es2022 --outDir ./dist --lib es2022,dom --sourceMap ./src/*.ts

# Webpack
npx webpack init

Need to install the following packages:
webpack@5.92.0
Ok to proceed? (y) y

CLI for webpack must be installed.
  webpack-cli (https://github.com/webpack/webpack-cli)

We will use "npm" to install the CLI via "npm install -D webpack-cli".
Do you want to install 'webpack-cli' (yes/no): y

npx webpack init

[webpack-cli] For using this command you need to install: '@webpack-cli/generators' package.
[webpack-cli] Would you like to install '@webpack-cli/generators' package? (That will run 'npm install -D @webpack-cli/generators') (Y/n) y 

? Which of the following JS solutions do you want to use? Typescript
? Do you want to use webpack-dev-server? Yes
? Do you want to simplify the creation of HTML files for your bundle? Yes
? Do you want to add PWA support? No
? Which of the following CSS solutions do you want to use? CSS only
? Will you be using PostCSS in your project? Yes
? Do you want to extract CSS for every file? Only for Production
? Do you like to install prettier to format generated configuration? Yes
? Pick a package manager: npm

```
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true
  },
  "files": ["src/index.ts"]
}
```

# Next
npx create-next-app@latest

Need to install the following packages:
create-next-app@14.2.4
Ok to proceed? (y) y
√ What is your project named? ... sii-testuj-ts
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes
√ What import alias would you like configured? ... @app/*
Creating a new Next.js app in C:\Projects\testuj-sii-typescript2\sii-testuj-ts.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- postcss
- tailwindcss
- eslint
- eslint-config-next

# Extensions

Snippets
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

Tailwind
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

Quicktype
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

F1 -> Pastee JSON as Types
https://developer.spotify.com/documentation/web-api/reference/get-an-album

Ts Pretty Errors
https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors

NextJS
https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets

# Dev Tools
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en


# Tailwind config
// .vscode\settings.json
{
    "tailwindCSS.emmetCompletions": true
}



# Zoom
https://us06web.zoom.us/j/88001001408 


# Form Hooks
https://react-hook-form.com/get-started


# Ts Toolbelt
https://github.com/millsp/ts-toolbelt