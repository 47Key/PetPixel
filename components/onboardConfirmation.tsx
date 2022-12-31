import React, { useEffect } from 'react';

interface ConfirmationData {
    code: number;
}

interface ChildProps {
    onFormSubmit: (formData: ConfirmationData) => void;
}

export const OnboardConfirmation: React.FC<ChildProps> = (props) => {

    function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const formData: ConfirmationData = {
            code: parseInt((document.getElementById('code-1') as HTMLInputElement)?.value + (document.getElementById('code-2') as HTMLInputElement)?.value + (document.getElementById('code-3') as HTMLInputElement)?.value + (document.getElementById('code-4') as HTMLInputElement)?.value + (document.getElementById('code-5') as HTMLInputElement)?.value + (document.getElementById('code-6') as HTMLInputElement)?.value)
        }
        props.onFormSubmit(formData);
    }

    function focusNextInput(el: string, prevId: string, nextId: string): void {
        if (el === '' && (document.getElementById(prevId) != null)) {
            document.getElementById(prevId)?.focus();
        } else if (document.getElementById(nextId) != null) {
            document.getElementById(nextId)?.focus();
        } else {
            return;
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 leding-tight dark:text-white">Verify your email address</h1>
            <p className="font-light text-gray-500 dark:text-gray-400">We emailed you a six-digit code to <span className="font-medium text-gray-900 dark:text-white">name@company.com</span>. Enter the code below to confirm your email address.</p>
            <form onSubmit={handleSubmit}>
                <div className="flex my-4 space-x-2 sm:space-x-4 md:my-6">
                    <div>
                        <label htmlFor="code-1" className="sr-only">First code</label>
                        <input type="text" maxLength={1} onKeyUp={(e) => focusNextInput((e.target as HTMLInputElement).value, 'code-1', 'code-2')} id="code-1" className="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                    </div>
                    <div>
                        <label htmlFor="code-2" className="sr-only">Second code</label>
                        <input type="text" maxLength={1} onKeyUp={(e) => focusNextInput((e.target as HTMLInputElement).value, 'code-1', 'code-3')} id="code-2" className="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                    </div>
                    <div>
                        <label htmlFor="code-3" className="sr-only">Third code</label>
                        <input type="text" maxLength={1} onKeyUp={(e) => focusNextInput((e.target as HTMLInputElement).value, 'code-2', 'code-4')} id="code-3" className="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                    </div>
                    <div>
                        <label htmlFor="code-4" className="sr-only">Fourth code</label>
                        <input type="text" maxLength={1} onKeyUp={(e) => focusNextInput((e.target as HTMLInputElement).value, 'code-3', 'code-5')} id="code-4" className="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                    </div>
                    <div>
                        <label htmlFor="code-5" className="sr-only">Fivth code</label>
                        <input type="text" maxLength={1} onKeyUp={(e) => focusNextInput((e.target as HTMLInputElement).value, 'code-4', 'code-6')} id="code-5" className="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                    </div>
                    <div>
                        <label htmlFor="code-6" className="sr-only">Sixth code</label>
                        <input type="text" maxLength={1} onKeyUp={(e) => focusNextInput((e.target as HTMLInputElement).value, 'code-5', 'code-6')} id="code-6" className="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                    </div>
                </div>
                <p className="p-4 mb-4 text-sm text-gray-500 rounded-lg bg-gray-50 dark:text-gray-400 md:mb-6 dark:bg-gray-800">Make sure to keep this window open while check your inbox.</p>
                <div className="flex space-x-3">
                    <a href="#" className="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Prev: Account Info</a>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verify account</button>
                </div>
            </form>
        </div>
    );
}
