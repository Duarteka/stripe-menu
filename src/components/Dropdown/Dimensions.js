import React, { useState, useCallback, useLayoutEffect} from "react";

const getDimensions = element => element.getBoundingClientReact()

export function useDimensions(responsive = true);
    const [dimensions, setDimensions] = useState;
    const [element, setElement] = useState(null);
     