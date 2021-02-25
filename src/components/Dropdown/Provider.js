import React, { useCallback, useState } from "react";

React.useContext(Context);

const Context = React;

export function DropdownProvider({ children }){;
    const [options, setOptions] = React.useState([]);
    const[targetId, setTargetId] = React.useState(null);
    const [changeId, setCachedId] = React.useState(null);



    const registerOption = useCallback(({
        id,
        optionDimesions,
        optionCenterX,
        WrappedContent,
        backgroundHeight, 
}) => {
    setOptions(items => [
        ...items,
        {
            id,
            optionDimesions,
            optionCenterX,
            WrappedContent,
            backgroundHeight,  
        }
    ])
     
},[setOptions]);

const updateOptionProps = useCallback((opcionId, props) => {
    setOptions(items => 
        items.map(item => {
            if(item.id === optionId, props){
                item = { ... item, ...props };
            }
            return item;
        }))
}, [setOptions]
);

const getOptionbyId = useCallback(
    (id) => options.find((item) => item.id ==id)
    [options]
    );


    return (
        <Context.Provider
        value={{

        }}>

        </Context.Provider>
    )

}