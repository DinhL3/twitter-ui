import React from "react"

const Tweet = () => {
    return (
        <div className="tweet">
            <div className="tweet-left">
                <img src="dinh.jpg" />
            </div>
            <div className="tweet-right tweet-content">
                <div className="tweet-header">
                    <span className="tweet-user-name">Dinh Le</span>
                    <span className="time"> • 6h</span>
                </div>
                <p className="tweet-text">Yooo! Look at this dog!</p>
                <div className="img-box">
                    <img src="dog.jpg" />
                </div>
                <div className="tweet-reactions">
                    <span class="material-icons">favorite_border</span>
                    <span>169</span>
                </div>
            </div>
        </div>
    )
}

export default Tweet