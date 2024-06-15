
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

npm update > Wanted
npm install@latest > Latest

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
