tsconfig.json =>
🔹 module -> How your code is imported/exported (module system)
             In simple terms:
             It decides how files talk to each other.
             e.g., CommonJS or ES Modules.
             Using ES Modules (import/export) for modern Node.js backend.


🔹 rootDir
👉 “Where my source code lives”
All your .ts files should be inside src/

🔹 outDir
👉 “Where compiled JS goes”
TypeScript converts .ts → .js
Output goes into dist/

rootDir: Folder where TypeScript source files are located.
outDir: Folder where compiled JavaScript files are generated.

