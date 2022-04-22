
# Comandos

npm init
npm i express
npm i -D typescript ts-node @types/express @types/node
npx tsc --init 
npm install -D concurrently nodemon

## Guardar en el archivo nodemon.json

{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}