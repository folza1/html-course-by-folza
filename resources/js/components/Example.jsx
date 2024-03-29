import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';

function Example() {
    return (
        <>
            <Navbar/>
        </>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
