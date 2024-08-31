function customRender(reactElem,Container){

    // const domElement = document.createElement(reactElem.type);
    // domElement.innerHTML = reactElem.children
    // domElement.setAttribute('href',reactElem.props.href);
    // domElement.setAttribute('target',reactElem.props.target);
    // Container.appendChild(domElement);
//#########################################################################
    // Another way
    const domElement = document.createElement(reactElem.type);
    domElement.innerHTML = reactElem.children
    for(const prop in reactElem.props){
        if(prop === 'children')continue;
        domElement.setAttribute(prop,reactElem.props[prop]);
    }
    Container.appendChild(domElement);
}
const reactElem = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"__blank"
    },
    children:'Click me to visit google'
}
const mainContainer = document.getElementById("root");

customRender(reactElem,mainContainer);