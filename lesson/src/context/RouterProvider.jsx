import React, {useEffect, useRef, useState} from 'react';

// export const RouterProvider = ({children}) => {
//     return (
//         <React.Fragment>
//             {children}
//         </React.Fragment>
//     )
// }

export const RouterProvider = ({router}) => {

    const ref = useRef(window.location.pathname);
    const [El, setEl] = useState(<></>)


    useEffect(() => {
        
        let {element} = router.find(({path}) => path === ref.current)
        setEl(element)
    }, []);

    return (
        <>
            { El == null ? 'loading...' : El }
        </>
    )
}