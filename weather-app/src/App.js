import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "3611ec118346f436bb0b0ea7837cdc49";
//stateless functional components ??? 
class App extends React.Component{
   state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
   }
   //it is an object which contains key value pairs
   //this is the initial state of the object & is going to change if some user interaction occurs


  getWeather = async (e) => {
    e.preventDefault(); //singnifies single page apps
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); //use name values of the form here for passing the data dynamically
    //newer method of the JS fetch() - throw in the url you wanna make the call to
    //since we need to feed the url, along with api key and also the location -
    //we are going to use the template strings - normal strings just allow us
    //to inject the strings which we have created
    //async await - great way to make http calls - makes web requestes very easy
    
    const data = await api_call.json(); //converts the data tht we get from fetch api in the form of json
    //console.log(data);

    //since we dont want it to get displayed on the console and on the screen
    //we are going to use "States" - state lives within the component - and its repsonsible for keeping track of changing data within a component
    //that change could be any user interaction or any form of interaction with the webpage for changing the state
    
    //this.state.temperature = (whateevrr u get back from api)
    //never ever do this - always use setState() method
    if(city && country){ //to not break our application if any error i.e. no data entered by user
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      });
    }

  }
  render(){
    //props are like html attributes, so u can name them whatever you want
    //all we are doing it setting up a prop and setting its value to this function
    //this would now mean that we have access to getWeather function now in Form.js

    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                 <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
     
export default App;
