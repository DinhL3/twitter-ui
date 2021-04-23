
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-top">
                <div>
                    <span class="material-icons site-logo">pets</span>
                </div>
                <div className="nav-link">
                    <span class="material-icons nav-icon">home</span>
                    <span>Home</span>
                </div>
                <div className="nav-link">
                    <span class="material-icons nav-icon">tag</span>
                    <span>Explore</span>
                </div>
                <div className="nav-link">
                    <span class="material-icons nav-icon">notifications</span>
                    <span>Notifications</span>
                </div>
                <div className="nav-link">
                    <span class="material-icons nav-icon">mail_outline</span>
                    <span>Messages</span>
                </div>
                <div className="nav-link">
                    <span class="material-icons nav-icon">list_alt</span>
                    <span>Lists</span>
                </div>
                <div className="nav-link">
                    <span class="material-icons nav-icon">speaker_notes</span>
                    <span>Topics</span>
                </div>
                <div className="nav-link">
                    <span class="material-icons nav-icon">person_outline</span>
                    <span>Profile</span>
                </div>
                <div className="nav-link">
                    <span class="material-icons nav-icon">more_horiz</span>
                    <span>More</span>
                </div>
                <button>Tweet</button>
            </div>
            <div className="navbar-bottom">
                <div className="nav-link user">
                    <img src="dinh.jpg" />
                    <span class="user-name">Dinh</span>
                </div>
            </div>
        </div >
    )



}

export default Navbar