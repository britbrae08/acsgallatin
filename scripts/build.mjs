import {build} from 'vite';
import {readFile,writeFile,cp} from 'node:fs/promises';
const sponsorAssets=new Set(['imsda.png','stith.png','terry.webp','btc-bank.svg','farmers-bank.png','shelter.svg']);
await build({configFile:'vite.static.config.ts',publicDir:false});
await cp('public','dist',{recursive:true,filter:(source)=>{const normalized=source.replaceAll('\\','/');const marker='public/images/sponsors/';return !normalized.includes(marker)||sponsorAssets.has(normalized.split(marker)[1]);}});
await build({configFile:'vite.static.config.ts',build:{ssr:'app/render.tsx',outDir:'.prerender',rolldownOptions:{output:{entryFileNames:'render.mjs'}}}});
const {render}=await import('../.prerender/render.mjs');
const template=await readFile('dist/index.html','utf8');
await writeFile('dist/index.html',template.replace('<!--app-html-->',()=>render()));
console.log('Built and prerendered ACS Gallatin.');


