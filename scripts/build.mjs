import {readFile,mkdir,writeFile,copyFile} from 'node:fs/promises';
const utils=await readFile('worker/recipe.js','utf8');
let html=await readFile('worker/page.html','utf8');
html=html.replace('/*RECIPE_UTILS*/',utils.replace(/export /g,''));
const server=await readFile('worker/server.js','utf8');
await mkdir('dist/server',{recursive:true});await mkdir('dist/.openai',{recursive:true});
await writeFile('dist/server/index.js',utils.replace(/export /g,'')+'\nconst HTML='+JSON.stringify(html)+';\n'+server);
await copyFile('.openai/hosting.json','dist/.openai/hosting.json');
console.log('Built Little Recipe.');
