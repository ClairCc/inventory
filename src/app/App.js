import React from 'react'
import { Header } from './header/header';
import { Searched } from './searched/Searched';
import { Inventory } from './inventory/Inventory';
function App() {
    return (
        <React.Fragment>
            <Header />
            <Searched />
            <Inventory />
        </React.Fragment>
    );
}

export { App }