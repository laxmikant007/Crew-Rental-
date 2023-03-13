import React from 'react'

function ChatHere() {
    return (
        <>
            <div className="chatHere">
                <div className="chatHere__container">
                    <div className="chatHere__container--header">
                        <h3>Chat Here</h3>
                    </div>
                    <div className="chatHere__container--body">
                        <div className="chatHere__container--body--chat">
                            <div className="chatHere__container--body--chat--message">
                                <div className="chatHere__container--body--chat--message--sender">
                                    <p>Hi, how can I help you?</p>
                                </div>
                                <div className="chatHere__container--body--chat--message--receiver">
                                    <p>Hi, I want to know more about your services</p>

                                </div>
                                <div className="chatHere__container--body--chat--message--sender">

                                    <p>Ok, I will be glad to help you</p>
                                </div>
                                <div className="chatHere__container--body--chat--message--receiver">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ChatHere;