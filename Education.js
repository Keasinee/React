import React, {Component} from 'react';
import Widecard from '../components/Widecard'

class Education extends Component {
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Front-end Developer" where="IT-Element Co., ltd" from="08/2019" to="Present"/>
                <Widecard title="Information Developer" where="Panyapiwat Technological College" from="11/2018" to="07/2019"/>
                <Widecard title="Bachelor of science program in Information Technology" where="Burapha University" from="08/2014" to="07/2018"/>
            </div>
        )
    }
}

export default Education;