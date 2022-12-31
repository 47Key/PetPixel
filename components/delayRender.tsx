import React, { useState, useEffect, ReactElement } from 'react';
import { delay } from '../functions/functions';

type Props = {
    children: any,
    time: number,
    loading: ReactElement
}

export const DelayRender: React.FC<Props> = ({ children, time, loading }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Force loading state using the delay function
    useEffect(() => {
        delay(time).then(() => { setIsLoading(false) })
    }, [time]);

    // If the component is still loading, return the specified loading component
    if (isLoading) {
        return loading;
    }

    // Return the wrapped component after the loading is complete
    return children;
}
