import React from "react";

/*class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city"/>
                <input type="text" name="country" placeholder="country"/>
                <button>Get Weather</button>
            </form>
        );
    }
    //what happens onSubmit is that we go through a full page refresh - s
    //we'll see the data for sometime but however since it was a full page refresh
    //the data didn't stay with us
    //now to prevent this - we add an event object in the getWeather() method
    //and use preventDefault() - now if you click on the button - u can see the data on 
    //on the console.
}
*/
const Form = props => (
    <form onSubmit={props.getWeather}>
     <input type="text" name="city" placeholder="city"/>
     <input type="text" name="country" placeholder="country"/>
     <button>Get Weather</button>
    </form>
);

export default Form;