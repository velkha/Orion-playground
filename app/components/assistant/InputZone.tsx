
export default function InputZone({id, placeholder}: {id: string, placeholder: string}) {
    return (
        <div id="inputZone">
            <textarea id={id} placeholder={placeholder} />
            <button id="sendButton">Send</button>
        </div>
    );
}