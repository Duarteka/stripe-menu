import React from 'react';

import { Products, Developers, Company } from '../Content';
import { DropdownOption } from '../Dropdown';
import { Container, DropdownStyles } from './styles';



function Navbar() {
    return (
        <DropdownStyles>
    <Container>
        <ul>
            <li>
                <DropdownOption
                    name="Productos"
                    content={Products}
                />
            </li>
            <li>
                <DropdownOption
                    name="Desarollo"
                    content={Developers}
                />
            </li>
            <li>
                <DropdownOption
                    name="Empresa"
                    content={Company}
                />
            </li>
        </ul>
        </Container>
    </DropdownStyles>
    );
}
export default Navbar;