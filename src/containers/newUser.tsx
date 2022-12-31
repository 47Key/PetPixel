import React from 'react';
import { DelayRender, LoadingSpinner, OnboardConfirmation, OnboardPersonal, OnboardSuccess } from '../components';

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

interface ConfirmationData {
    code: number;
}

interface SuccessData {
    name: string;
}

type Step = {
    personal: boolean;
    confirmation: boolean;
    success: boolean;
}

export const NewUser: React.FC = () => {
    const [step, setStep] = React.useState<Step>({
        personal: true,
        confirmation: false,
        success: false
    });

    const handlePersonalSubmit = (formData: PersonalData) => {
        console.log(formData);
        setStep({
            ...step,
            confirmation: true,
        });
        // const stepOneText = document.getElementById("step-1-text");
        document.getElementById("step-1-check")?.classList.remove("hidden");
        document.getElementById("step-1-number")?.classList.add("hidden");
        const stepTwoText = document.getElementById("step-2-text");
        stepTwoText?.classList.add("text-primary-600");
        stepTwoText?.classList.add("dark:text-primary-500");

    }

    const handleConfirmationSubmit = (formData: ConfirmationData) => {
        console.log(formData);
        setStep({
            ...step,
            success: true,
        });
        document.getElementById("step-2-check")?.classList.remove("hidden");
        document.getElementById("step-2-number")?.classList.add("hidden");
        const stepThreeText = document.getElementById("step-3-text");
        stepThreeText?.classList.add("text-primary-600");
        stepThreeText?.classList.add("dark:text-primary-500");
    }

    // const handleSuccessSubmit = (formData: SuccessData) => {}

    return (
        <section className="p-6 rounded-lg shadow bg-white sm:p-8 dark:bg-gray-800 lg:py-0 lg:pt-10">
            <div className="lg:flex">
                <div className="flex items-center justify-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
                    <div className="w-full">
                        <div className="flex items-center justify-center mb-8 space-x-4">
                            <a href="#" className="flex items-center">
                                <img src="logo.png" className="mr-3 h-6 sm:h-9" alt="PetPixel Logo" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Pet Pixel</span>
                            </a>
                        </div>
                        <ol className="flex items-center justify-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base">
                            <li id="step-1-text" className="flex items-center text-primary-600 dark:text-primary-500 sm:after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <div className="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                                    <svg id="step-1-check" className="hidden w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <div id="step-1-number" className="mr-2 sm:mb-2 sm:mx-auto">1</div>
                                    Personal <span className="hidden sm:inline-flex">Info</span>
                                </div>
                            </li>
                            <li id="step-2-text" className="flex items-center after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                <div className="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                                    <svg id="step-2-check" className="hidden w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <div id="step-2-number" className="mr-2 sm:mb-2 sm:mx-auto">2</div>
                                    Account <span className="hidden sm:inline-flex">Info</span>
                                </div>
                            </li>
                            <li id="step-3-text"  className="flex items-center sm:block">
                                <svg id="step-3-check" className="hidden w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <div id="step-3-number" className="mr-2 sm:mb-2 sm:mx-auto">3</div>
                                Confirmation
                            </li>
                        </ol>
                        {step.personal && !step.confirmation && !step.success
                            ?
                            <DelayRender loading={<LoadingSpinner />} time={1000}>
                                <OnboardPersonal onFormSubmit={handlePersonalSubmit} />
                            </DelayRender>
                            :
                            null
                        }
                        {step.personal && step.confirmation && !step.success
                            ?
                            <DelayRender loading={<LoadingSpinner />} time={1000}>
                                <OnboardConfirmation onFormSubmit={handleConfirmationSubmit} />
                            </DelayRender>
                            :
                            null
                        }
                        {step.personal && step.confirmation && step.success
                            ?
                            <DelayRender loading={<LoadingSpinner />} time={1000}>
                                <OnboardSuccess />
                            </DelayRender>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
