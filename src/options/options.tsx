import React from 'react'
import { createRoot } from 'react-dom/client'
import './options.css'

const test = <p>Hello World! I am from options 🐱</p>

//create root element
const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

//create a root and render the component
const root = createRoot(rootElement)
root.render(test)
