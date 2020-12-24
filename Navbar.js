import { render } from "@testing-library/react";
import React,{ Component } from 'react';
import Navitem from './Navitems'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'NavitemActive': ''
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    
                    <Navitem item="Home" tolink="/"></Navitem>
                    <Navitem item="About" tolink="/about"></Navitem>
                    <Navitem item="Education" tolink="/education"></Navitem>
                    <Navitem item="Skills" tolink="/skills"></Navitem>
                    <Navitem item="Contact" tolink="/contact"></Navitem>

                </ul>
            </nav>
        )
    }
}

export default Navbar;