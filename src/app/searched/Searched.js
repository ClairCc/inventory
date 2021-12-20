import React from 'react';
import { ButtonAdd } from '../buttons/ButtonAdd';

function Searched(props) {
    return (
        <section>
            <input type="text" name="" id="" placeholder='Busca por precio, nombre o descripción' />
            <ButtonAdd />
        </section>
    );
}

export { Searched };