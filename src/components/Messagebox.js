export default function Messagebox({ message }) {
    return (
        <div>
            <div>
                <p>
                    <b>{message.user}</b>
                </p>
                <p>{message.message}</p>
                <p>{message.createdAt}</p>
            </div>
        </div>
    );
}
