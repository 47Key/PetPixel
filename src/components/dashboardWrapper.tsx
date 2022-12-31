import React, { ReactNode, ReactElement } from 'react';
import { DelayRender, LoadingSpinner } from '.';

type Props = {
    children: ReactNode | ReactElement;
};

export const DashboardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative h-full mx-10">
            <DelayRender loading={<LoadingSpinner />} time={1000}>
                <div className="w-full h-full flex flex-row justify-start items-start gap-3 flex-wrap overflow-y-auto mt-2 pt-5 mx-10">
                    {children}
                </div>
            </DelayRender>
        </div>
    );
}
