import React from "react";
import Search from "./Search";

class Header extends React.Component {
    render() {
        return(
            <header>
                <form >
                    <Search btnValue = {'FIND WEATHER'} />
                </form>
            </header>
        )
    }
}
export default Header 