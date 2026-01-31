import React from 'react';
import { AppData } from '../data/apps';

interface AppCardProps {
    app: AppData;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const isDownload = app.link.endsWith('.zip');

    const CardContent = (
        <div className={`p-6 h-full flex flex-col items-center text-center transition-all duration-300 ${app.isDisabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl'}`}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold mb-4 shadow-md">
                {getInitials(app.name)}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {app.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {app.description}
            </p>
            {!app.isDisabled ? (
                <span className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                    {isDownload ? 'Download App' : 'Visit App'}
                </span>
            ) : (
                <span className="inline-block bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-lg text-sm font-medium">
                    Coming Soon
                </span>
            )}
        </div>
    );

    if (app.isDisabled) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                {CardContent}
            </div>
        );
    }

    return (
        <a
            href={app.link}
            target={isDownload ? undefined : "_blank"}
            rel={isDownload ? undefined : "noopener noreferrer"}
            download={isDownload}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden block"
        >
            {CardContent}
        </a>
    );
};

export default AppCard;
