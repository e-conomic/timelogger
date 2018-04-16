import React from 'react';
import ReactDOM from 'react-dom';
import Application from './app/App';
import projectsApi from './app/api/projects';


projectsApi.getAll().then(values => console.log(values));
ReactDOM.render(<Application />, document.getElementById('root'));
