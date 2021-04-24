import React from "react"

const TweetForm = () => {
    return (
        < div >
            <form className="tweet-form">
                <div className="tweet-left">
                    <img src="dinh.jpg" />
                </div>
                <div className="tweet-right">
                    <textarea placeholder="What's happening?" />
                    <div className="tweet-right-bot">
                        <span class="material-icons nav-link">image</span>
                        <button>Tweet</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default TweetForm