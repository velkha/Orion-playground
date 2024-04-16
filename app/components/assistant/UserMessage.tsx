export default function UserMessage({message}: {message: string}) {
    return (
        <div className="userMessage">
            <span>{message}</span>
        </div>
    );
}