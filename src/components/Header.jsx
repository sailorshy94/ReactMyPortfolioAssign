import NavMenu from "./NavMenu";

function Header() {
    return (
        <><section style={{
            paddingTop: '15px',
            paddingLeft: '20px',
            fontSize: '5em'
        }}>
            <div class="row">
                <header class='col-md-6' style={{fontFamily: "monospace"}}>Shy</header>
                <nav class='col-md-6'>
                    <NavMenu />
                </nav>
            </div>
        </section>
        </>
    );
}

export default Header;

