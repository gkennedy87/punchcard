require('./bootstrap');

import {InertiaApp} from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import {InertiaProgress } from '@inertiajs/progress'

const el = document.getElementById('app');

render(
    <InertiaApp 
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={name => import(`./components/${name}`).then(module => module.default)}
    />,
    el
)
