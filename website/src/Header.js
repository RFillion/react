import  './_Header.scss';

function header() {
    return (
        <header>
            <nav className="navigation">
                <h1>Website</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default header;