import React, { ReactElement, useState } from 'react';

type ModalOpenState = {
    welcome: boolean,
    upload: boolean,
    create: boolean
}

interface Props {
    type: string,
    id: string
    component: ReactElement,
    openState: [
        ModalOpenState, 
        React.Dispatch<React.SetStateAction<ModalOpenState>>
    ],
}

export const Modal: React.FC<Props> = ({ type, id, component, openState }) => {
    const [open, setOpen] = openState; 
    
    function changeModal() {
        setOpen({
            ...open,
            [type]: false,
        });
        console.log("WELCOME STATE: " + open.welcome);
    }

    return (
        <>
        {openState &&
            <div id={id} className={`shadow-[0_3px_20px_0px] shadow-black rounded-lg absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 overflow-x-hidden overflow-y-auto w-96`}>
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={changeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <div>
                                {component}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
}
