import { React } from "react";

import "./css/about.css";

class about extends Component {

    render() {

        return(

            <div className="aboutMe">

                <div className="myName">About Me:</div>

                <hr />

                <div className="myself">

                    <img className="profile" src="./images/profilePic.JPEG" alt="Profile Pic"/>
                    <br></br>
                    Hello, my name is Justin Durocher and I am 20 years old and live in Hartford CT. I currently am employed as a overnight supervisor at UPS, and a valet attendant at the Marriot Hotel in Downtown Hartford.
                    <br></br>
                    I have been learning how to code for the past year and want to work in that professional field when I am older. I currently am in a full stack web development bootcamp learning how to build web applications in React.js and Node.js.
                    <br></br>
                    When I am not coding or working, I am usually outside enjoying the weather, playing sports with friends, or watching television with the family at home. 
                </div>

            </div>

        )

    }

}

export default about;