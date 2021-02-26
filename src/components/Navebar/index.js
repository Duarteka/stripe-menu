import React from 'react';

import { Products, Developers, Company } from '../Content';
import { DropdownProvider, DropdownOption } from '../Dropdown';
import { Container, DropdownStyles } from './styles';
 


function Navbar() {
    return ( 
    <DropdownProvider>
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
</DropdownProvider>
    );
}
export default Navbar;