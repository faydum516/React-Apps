import React, {useState} from 'react';

function Hello() {
    const [name, setName] = useState("Yui");

    return <h1>Hello {name}.</h1>;
}

export default Hello;