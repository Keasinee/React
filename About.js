import React,{Component} from 'react';
import Pic1 from '../img/img1.jpg'
class About extends Component{
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic"> About Me</h1>
                <img src={Pic1} className="img1"></img>
                <h3>Hi ! I'm Keasinee , You call me is Ploy</h3>
                <p>Good skill in programming language such as JavaScript, Jquery, AJAX, HTML/HTML5, CSS and ability to use MySQL, MSSQL. Capabilities to use Javascript in order to develop website. And able to use these knowledge to complete project called "Apply Blockchain to develop system". Basic English skill in speaking reading and writing. Ability to work with others or team. Willing to learn new knowledge. Managing discipline and dealing with conflict. Planning, making decisions, and good problem solving.</p>
            </div>
        )
    }
}

export default About;