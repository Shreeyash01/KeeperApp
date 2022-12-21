import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright ©{year} SHREEYASH</p>
        </footer>

    );
}

export default Footer;