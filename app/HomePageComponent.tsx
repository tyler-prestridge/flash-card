"use client";

import React from 'react';

const HomePageComponent: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-2 gap-4 w-full max-w-screen-sm">
                <a href="/math-problem-add" className="p-4 bg-blue-500 text-white text-center rounded">
                    Addition Problems
                </a>
                <br/>
                <br/>
                <a href="/math-problem-sub" className="p-4 bg-green-500 text-white text-center rounded">
                    Subtraction Problems
                </a>
            </div>
        </div>
    );
};

export default HomePageComponent;
