import React from 'react';

type Props = {
    photo?: string;
}

export const LibraryCard: React.FC<Props> = ({ photo }) => {
    return (
        <div className="w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-md text-gray-900 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-gray-700 hover:dark:text-white cursor-pointer hover:scale-110 hover:mx-1 hover:rounded-xl">
            <a href="#">
                <div className="w-full h-full overflow-hidden">
                    {photo 
                    ?
                        <img className="object-cover aspect-square rounded-lg hover:rounded-xl" src={photo} alt="Test" />
                    :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    }
                </div>
            </a>
        </div>
    );
}
