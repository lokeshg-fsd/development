// @flow
// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Home from '../Home'

const Hello = (props) =>
    useMemo(() => {
        return (
            <div>
                Welocome to Ruby On Rails Project, {props.name}!{/*  <Home /> */}
            </div>
        )
    }, [props.name])

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Home />, document.body.appendChild(document.createElement('div')))
})
