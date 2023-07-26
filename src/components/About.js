import UserClass from "./UserClass";
import User from "./user";

const About =()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name={"Harsha (functional)"} location={"Hyderabad"} contact={"7780791364"} />
            <UserClass name={"Harsha (class)"} location={"Hyderabad"} contact={"7780791364"}/>
            
        </div>
    )
}
export default About;
