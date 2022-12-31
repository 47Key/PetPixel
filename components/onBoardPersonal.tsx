import React, { useState } from 'react';

interface PersonalData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    country: string;
    phone: string;
    newsletter: boolean;
    policyAcceptance: boolean;
}

interface ChildProps {
    onFormSubmit: (formData: PersonalData) => void;
}

export const OnboardPersonal: React.FC<ChildProps> = (props) => {
    const [personalData, setPersonalData] = useState<PersonalData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
        phone: '',
        newsletter: false,
        policyAcceptance: false
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.onFormSubmit(personalData);
    };

    return (
        <>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white">Account details</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-5 my-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input type="text" name="full-name" id="full-name" onChange={(event) => setPersonalData({ ...personalData, name: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Bonnie" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" onChange={(event) => setPersonalData({ ...personalData, email: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" onChange={(event) => setPersonalData({ ...personalData, password: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" onChange={(event) => setPersonalData({ ...personalData, confirmPassword: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                        <select id="country" onChange={(event) => setPersonalData({ ...personalData, country: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected={true}>Choose your country</option>
                            <option value="USA">USA</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="ES">Spain</option>
                            <option value="JP">Japan</option>
                            <option value="AUS">Australia</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="number" name="phone-number" id="phone-number" onChange={(event) => setPersonalData({ ...personalData, phone: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="+123 567 890" required />
                    </div>
                </div>
                <div className="mb-6 space-y-3">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" onChange={(event) => setPersonalData({ ...personalData, policyAcceptance: event.target.checked })}  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">By signing up, you are creating a Flowbite account, and you agree to Flowbite’s <a className="font-medium text-primary-600 dark:text-primary-500 hover:underline" href="#">Terms of Use</a> and <a className="font-medium text-primary-600 dark:text-primary-500 hover:underline" href="#">Privacy Policy</a>.</label>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="newsletter" aria-describedby="newsletter" type="checkbox" onChange={(event) => setPersonalData({ ...personalData, policyAcceptance: event.target.checked })} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">Email me about product updates and resources.</label>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <a href="#" className="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Prev: Personal Info</a>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next: Account Info</button>
                </div>
            </form>
        </>
    );
}
