import { Skeleton, Spinner } from '@heroui/react';
import React from 'react';

const GlobalLoader = () => {
    return (
        <div className="space-y-2 mt-6 mb-8 py-2 container w-11/12 mx-auto">
            
            <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
                <Skeleton animationType="pulse" className="h-20 rounded-lg" />
                <Skeleton animationType="pulse" className="h-3 w-3/5 rounded-lg" />
                <Skeleton animationType="pulse" className="h-3 w-4/5 rounded-lg" />
            </div>
        </div>
    );
};

export default GlobalLoader;