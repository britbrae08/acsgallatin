import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './page';
export function render(){return renderToString(<Home/>);}

