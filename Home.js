import React,{ Component } from 'react';
import Social from '../components/Social'
import ProfilePic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render(){
        return (
            <div className="condiv home">
                <img src={ProfilePic} alt="profile" className="profilepic"/>
                <ReactTypingEffect text={['I\'m Keasinee KhanKhen','I\'m Web Developer']} speed={80} eraseDelay={200} className="typingeffect"></ReactTypingEffect>
                <Social />
            </div>
        )
    }
}

export default Home;