import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const html=await readFile('dist/index.html','utf8');
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(id),`Broken anchor ${id}`);
for(const [,src] of html.matchAll(/(?:src|href)="(\/[^"?#]+)"/g))await access('dist'+src);
assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
assert(!html.includes('1207')&&!html.includes('fna.usda'));
assert(html.includes('1210 S Willow St')&&html.includes('gacsc.fb@gmail.com'));
const photos=JSON.parse(await readFile('app/photos.json','utf8'));
assert.equal(photos.length,27);
for(const photo of photos){assert(photo.alt.length>10);await access('dist'+photo.src);}
assert(html.includes('aria-expanded="false"')&&html.includes('id="store-gallery" hidden=""'));
console.log('PASS: prerendered content, unique IDs, internal links, local assets, address, 27 labeled photos, collapsed gallery.');

