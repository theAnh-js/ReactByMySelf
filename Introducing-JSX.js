'use strict';


const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

// Cách 1 : Viết trực tiếp
// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// )

// Cách 2 : Đặt biến và cho vào dấu ngoặc nhọn - curly braces

// const name = 'Josh Perez'
// const element = <h1>Hello, {name}</h1>
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

function formatName(user){
    return  user.firstName + ' ' + user.lastName
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'https://'
}
var element = <h1>Hello, {formatName(user)}!</h1>
ReactDOM.render(
    element,
    document.getElementById('root')
)

//Bạn có thể sử dụng dấu ngoặc kép để 
//chỉ định các ký tự chuỗi làm thuộc tính:
var element = <a href = "https://www.reactjs.org"> link </a>
//Bạn cũng có thể sử dụng dấu ngoặc nhọn để 
//nhúng biểu thức JavaScript vào một thuộc tính:
var element = <img src = {user.avatarUrl}></img>

// use quotes for string values.
// use curly braces for expressions.
// not both in the attribute.

// Warning:
// Since JSX is closer to JavaScript than to HTML, 
// React DOM uses camelCase property naming convention 
// instead of HTML attribute names.

// For example, class becomes className in JSX, 
// and tabindex becomes tabIndex.


// If a tag is empty, you may close it immediately with />, like XML:
var element = <img src = {user.avatarUrl}/>

// JSX tags may contain children:
var element = (
    <div>
        <h1>Hello</h1>
        <h2>Good to see you here.</h2>
    </div>
)


// Ngoài cách khai báo như:
var element = (
    <h1 className = "greeting" >Hello, world!</h1>
)
// Ta có thể gọi đến React.createElement
var element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!',
)

// Thực chất React.createElement tạo ra một Object like this:
var element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    },
}