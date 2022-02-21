import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const create = React.createElement;

const span = create(span, null, "Mundo");

const p = create(p, null, "Olá" + span);

const h2 = create(h2, null, "OLÁ");

const div = create(div, null, h2 + p);

const body = create(body, null, div);