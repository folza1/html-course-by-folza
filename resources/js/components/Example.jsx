import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Feed from './components/feed/Feed.jsx';
import Rightbar from './components/rightbar/Rightbar.jsx';

function Example() {
    return (
        <>
            <Header/>
            <div className="flex w-100">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
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
