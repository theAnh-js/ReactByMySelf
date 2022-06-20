//State is similar to props, 
//but it is private and fully controlled by the component.
function Clock1(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
}
  
function tick() {
    ReactDOM.render(
      <Clock1 date={new Date()} />,
      document.getElementById('root')
    );
}
setInterval(tick, 1000);



//                           Converting a Function to Class

// We can convert a function component like Clock to a class
// in 5 steps:
// 1. Create an ES6 class, with the same name, 
//    that extends React.Component.
// 2. Add a single empty method to it called render().
// 3. Move the body of the function into the render() method.
// 4. Replace props with this.props in the render() body.
// 5. Delete the remaining empty function declaration.
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}
  
function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
}
setInterval(tick, 1000);
  

//                             Adding Local State to a Class

class Clock3 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    render() {
        return(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is 
                {this.state.date.toLocaleTimeString()}
                </h2>
        </div>
        )
    }
}
ReactDOM.render(
    <Clock3 />,
    document.getElementById('root')
)


//                           Adding Lifecycle Methods to a Class
class Clock5 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock5 />,
    document.getElementById('root')
);


//                              Using State Correctly
// There are three things you should know about setState().

// 1. Do Not Modify State Drectly
// Wrong => this.state.comment = 'Hello';
// Correct => this.setState({comment: 'Hello'});
// The only place where you can assign "this.state" is the constructor.

// 2. State Updates May Be Asynchronous
// 3. State Updates are Merged
