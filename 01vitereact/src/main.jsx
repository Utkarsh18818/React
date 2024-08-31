import React, { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){ // here we declare a function which return us an jsx value. 
  return(
    <h1>Custom react ! </h1>
  )
}
    // wrong way to execute in react

    //const domElement = document.createElement(reactElem.type);
    // domElement.innerHTML = reactElem.children
    // domElement.setAttribute('href',reactElem.props.href);
    // domElement.setAttribute('target',reactElem.props.target);
    // Container.appendChild(domElement);

//########################################################################

// here we create an element.

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

//########################################################################

// here we create an object with the help of react

const anotherUser = "  SAM" // here we see how to inject variables in a recat element.
const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:"_blank"},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root'))
.render(
    ReactElement
)
