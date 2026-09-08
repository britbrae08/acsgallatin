import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import FoodBank from './foodbank';
import Home from './page';
import './globals.css';

const root=document.getElementById('root')!;
const pathname=window.location.pathname.replace(/\/+$/,'')||'/';
const Page=pathname==='/foodbank'?FoodBank:Home;

if(root.children.length)hydrateRoot(root,<Page/>);else createRoot(root).render(<Page/>);
