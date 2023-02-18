import React from 'react';

export const Welcome: React.FC = () => {
    return (
        <>
            <div className='inline-flex w-full items-center justify-center'>
                <p id="wave" className='text-3xl absolute left-5 top-5'>👋</p>
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Welcome</h5>
            </div>
            <p className="my-3 font-normal text-gray-700 dark:text-gray-200">
                Get started by uploading your pictures, choose your options, then create your portaits using the Create button below.
            </p>
            <div className='w-full flex flex-row justify-evenly items-center'>
                <a href="#" className="inline-flex items-center text-white bg-blue-600 rounded-md py-2 px-3 text-lg font-medium hover:bg-blue-700">
                    Start Tutorial
                </a>
                <a href="#" className="inline-flex items-center text-white bg-gray-600 rounded-md py-2 px-3 text-lg font-medium hover:bg-gray-800">
                    Skip Tutorial
                </a>
            </div>
        </>
    );
}
