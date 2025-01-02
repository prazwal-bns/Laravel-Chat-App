import React, { useState } from "react";

const MessageInput = ({ rootUrl }) => {
    const [message, setMessage] = useState("");

    const messageRequest = async (text) => {
        try {
            await axios.post(`${rootUrl}/message`, {
                text,
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim() === "") {
            alert("Please enter a message!");
            return;
        }

        messageRequest(message);
        setMessage("");
    };

    return (
        <div className="flex items-center gap-2 p-4 bg-white border-t border-gray-300 shadow-sm">
            {/* Input field */}
            <input
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
                type="text"
                className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                value={message}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        sendMessage(e);  // Call sendMessage when Enter is pressed
                    }
                }}
            />

            {/* Send button */}
            <button
                onClick={(e) => sendMessage(e)}
                className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;
