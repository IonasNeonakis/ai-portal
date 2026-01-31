import React from 'react';
import { apps } from '../data/apps';
import AppCard from './AppCard';

const AppGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {apps.map((app) => (
                <AppCard key={app.name} app={app} />
            ))}
        </div>
    );
};

export default AppGrid;
