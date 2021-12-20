import React from 'react';

const usuario = {
    name: 'Pepe'
}


function Header() {
    return (
        <header>
            <h3>Buenos dias {usuario.name}</h3>
            <div>
                <figure><img src="" alt="Sun" /></figure>
                <figure><img src="" alt="Moon" /></figure>
            </div>
        </header>
    );
}

export { Header };