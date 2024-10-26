// math-problem-add/page.tsx
import React from 'react';
import { AppProps } from 'next/app';
import CenteredMathProblemSub from "../CenteredMathProblemSub";
import BackToHomeButton from "../../components/BackToHomeButton";

const Page: React.FC = () => {
    return (
        <div>
            <div><BackToHomeButton/></div>
            <div>
                <CenteredMathProblemSub/>
            </div>
        </div>
    );

};

export default Page;

