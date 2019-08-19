import React from 'react';
import Collections from './components/Collections';
import Pays from './components/Pays';
import Report from './components/Report'

const routes  = [
    {
        path:'/',
        exact: true,
        component: ()=><Report/>
    },
    {
        path:'/collections',
        exact: true,
        component: ()=><Collections/>
    },
    {
        path:'/pays',
        exact: true,
        component: ()=><Pays/>
    },
];

export default routes