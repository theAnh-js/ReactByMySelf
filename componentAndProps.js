// Conceptually - về mặt khái niệm, components are like 
// JavaScript functions.

// Components accept những đầu vào tùy ý - arbitrary inputs
// arbitrary inputs are called "props". 
// And components return React elements describing what 
// should appear on the screen. 

//              Function and Class Components.
// - The simplest way to define a component is to write a 
//   JavaScript function:
function Welcome1(props) {
    return <h1>Hello, {props.name}!</h1>;
}
// => We call components = "function components"
// because they are literally JavaScript functions.


// We can also use an ES6-class to define a component:
class Welcome2 extends React.Component {
    render() {
        return <h1>Hello, {props.name}!</h1>;
    }
}

//               Rendering a Component
// Previously, we only encountered React elements that 
// represent DOM tags:     const element = <div />;

// However, elements can also represent 
// user-defined components: const element = <Welcome name="Sara" />;

// Khi React nhìn thấy an element đại diện cho a user-defined components
// nó sẽ chuyển - passes các JSX attributes and children
// cho component này như một đối tượng duy nhất - single object.
// => We call this object "props"
function Welcome3(props){
    return <h1>Hello, {props.name}!</h1>
}
const element = <Welcome3 name = "Sara" />
ReactDOM.render(
    element,
    document.getElementById('root')
)
// Let’s recap - tóm tắt lại  what happens in this example:
// 1.We call ReactDOM.render() with the <Welcome3 name="Sara" /> element.
// 2.React calls the Welcome component with {name: 'Sara'} as the props.
// 3.Our Welcome3 component returns a <h1>Hello, Sara</h1> element as the result.
// 4.React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

// Note - Lưu ý: Always start component names with 
// a capital letter - Chữ viết Hoa.
// Convention - Quy ước: - lowercase letter represents a HTML tag. <div />
//                       - a capital letter represents a components. <Welcome />


//                      Composing Components
// Components can refer to - tham chiếu đến other components in their output.
// For example, we can create an App component that renders Welcome4 many times.
function Welcome4(props) {
    return <h1>Hello, {props.name}!</h1>
}
function App(){
    return (
        <div>
            <Welcome4 name = "Sara"/>
            <Welcome4 name = "SonTung"/>
            <Welcome4 name = "ChiPu"/>
            <Welcome4 name = "Ronaldo"/>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)

 
//                 Extracting Components - Giải nén, trích xuất component

function formatDate(date){
    return date.toLocaleDateString()
}

function Avatar(props) {
    return (
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props) {
    return (    
        <div className="Comment">
            <UserInfo user={props.author}/>

            <div className="Comment-text">
                {props.text}
            </div>

            <div className="Comment-date">
                {formatDate(props.date)}
            </div>

        </div>
    )
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
}

ReactDOM.render(
    <Comment 
        date = {comment.date}
        text = {comment.text}
        author = {comment.author}
    />,
    document.getElementById('root')
)

// pure functions: they do attempt to change their inputs, and always return
// the same result for the same inputs.
function sum(a, b) {
    return a + b;
}

// impure functions: change its own input
function withdraw(account, amount) {
    account.total -= amount;
}

// => React is pretty flexible but it has a single strict rule:
//          All React components must act like pure functions
//                  with respect to their props.