import {build} from 'vite';
import {cp,mkdir,readFile,writeFile} from 'node:fs/promises';

const sponsorAssets=new Set(['imsda.png','stith.png','terry.webp','btc-bank.svg','farmers-bank.png','shelter.svg']);

await build({configFile:'vite.static.config.ts',publicDir:false});
await cp('public','dist',{recursive:true,filter:(source)=>{
  const normalized=source.replaceAll('\\','/');
  const marker='public/images/sponsors/';
  return !normalized.includes(marker)||sponsorAssets.has(normalized.split(marker)[1]);
}});

await build({configFile:'vite.static.config.ts',build:{ssr:'app/render.tsx',outDir:'.prerender',rolldownOptions:{output:{entryFileNames:'render.mjs'}}}});
const {render}=await import('../.prerender/render.mjs');
const template=await readFile('dist/index.html','utf8');

await writeFile('dist/index.html',template.replace('<!--app-html-->',()=>render('/')));

const foodBankTemplate=template
  .replace('ACS Gallatin | Food Assistance & Community Thrift Store','Daviess County Food Bank | ACS Gallatin')
  .replace('Neighbors helping neighbors in Daviess County. Find food assistance, shop our thrift store, donate, or volunteer at Gallatin Adventist Community Services.','Make a Daviess County Food Bank appointment, open the application form, and see what identification, address, income, and household information to bring.')
  .replace('https://acsgallatin.com/','https://acsgallatin.com/foodbank')
  .replace('<!--app-html-->',()=>render('/foodbank'));

await mkdir('dist/foodbank',{recursive:true});
await writeFile('dist/foodbank/index.html',foodBankTemplate);

console.log('Built and prerendered ACS Gallatin home and Food Bank pages.');
