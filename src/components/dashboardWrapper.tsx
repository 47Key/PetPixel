import React, { ReactNode, ReactElement } from 'react';
import { DelayRender, LoadingSpinner } from '.';

type Props = {
    children: ReactNode | ReactElement;
};

export const DashboardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative h-full mx-10">
            <DelayRender loading={<LoadingSpinner />} time={1000}>
                <div className="w-full h-full min-h-[50vh] relative flex flex-row justify-start items-start gap-3 flex-wrap p-10 m-10 bg-red-600/50 overflow-y-hidden">
                    {children}
                </div>
            </DelayRender>
        </div>
    );
}
