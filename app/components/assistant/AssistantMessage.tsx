import Image from 'next/image';

type AssistantMessageProps = {
    message: string;
    button?: string;
    type: string;
};

export default function AssistantMessage({message, button, type}: AssistantMessageProps) {
    return (
        <div className="assistantMessage">
            {type === "image" && <Image src={message} alt="assistant" />}
            {type === "text" && <span>{message}</span>}
            {type === "button" && button && <button>{button}</button>}
            {type === "button-text" && button && 
                <div>
                    <span>{message}</span>
                    <button>{button}</button>
                </div>
            }
        </div>
    );
}