/*

edgecoders.com

React -- Javascript Library for building UI's

This is not a framework, it is a library
Other libraries will be needed
React builds the user interfaces in the web browsers
React is declarative (react handles the how)


Components are like functions
    They are reusable
    Can manage a private state that holds data that can change

Reactive updates
    React will...react.
    Take updates to the browser. (document object model)

Virtual views in memory
    Write HTML in JS (virtual DOM)
    Tree reconciliation


Components
    Function component
        const MyComponent = (props) => {
            return (
                <elementOrComponent ../>
            )
        }

    Class component
        class MyComponent extends React.Component {
            render () {
                return (
                    <elementOrComponent ../>
                );
            }
        }

State can change, props cannot. Classes can only change internal states

this was done in https://jscomplete.com/repl
*/

class Button extends React.Component {
 
 handleClick = () => {
  	this.props.onClickFunction(this.props.incrementValue);
    };
	render(){
  	return (
  	<button onClick={this.handleClick}>
    	+{this.props.incrementValue}
    </button>
  );
  }
}

const Result = (props) => {
return (
<div>{props.counter}</div>
);
};

class App extends React.Component {
	 state = {counter: 0};
   incrementCounter = (incrementValue) => {
   this.setState((prevState) => ({
    counter: prevState.counter + incrementValue
    }));
  };
   
	render(){
  	return (
    <div>
    	<Button incrementValue={1} onClickFunction={this.incrementCounter}/>
      <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
      <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
      <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
      <Result counter={this.state.counter}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);