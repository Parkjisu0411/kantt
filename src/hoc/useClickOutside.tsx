import React, { RefObject, useEffect, useState } from 'react';

const useClickOutside = (el: RefObject<HTMLElement>, initialState: boolean):[boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [state, setState] = useState(initialState);
    
    useEffect(() => {
        const clickOutside = (ev:MouseEvent) => {
            if(!el.current?.contains(ev.target as HTMLElement))
                setState(!state);
        }
    
        if(state)
            document.addEventListener('click', clickOutside);

        return () => {
            document.removeEventListener('click', clickOutside);
        }
    }, [el, state]);

    return [state, setState];
}

export default useClickOutside;