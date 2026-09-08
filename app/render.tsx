import React from 'react';
import {renderToString} from 'react-dom/server';
import FoodBank from './foodbank';
import Home from './page';

export function render(pathname='/'){
  const normalized=pathname.replace(/\/+$/,'')||'/';
  const Page=normalized==='/foodbank'?FoodBank:Home;
  return renderToString(<Page/>);
}
