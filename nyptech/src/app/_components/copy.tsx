import { Check, Copy } from "lucide-react";
import React, { useState } from 'react';

interface Props {
    text: string;
}

const CopyCode = ({ text }: Props) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => {
                    setCopySuccess(false);
                }, 1000); // Revert back to copy icon after 1 second
            })
            .catch(err => console.error('Failed to copy: ', err));
    };

    return (
        <div className="text-base mockup-code flex justify-between m-5 w-full">
            <code className="flex text-center">{text}</code>
            <button className="btn btn-circle btn-sm mx-5" onClick={copyToClipboard}>
                {copySuccess ? <Check size={15} /> : <Copy size={15} />}
            </button>
        </div>
    );
}

export default CopyCode;
