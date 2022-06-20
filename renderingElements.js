// const element = <h1>Hello, world!</h1>
// ReactDOM.render(element,
//     document.getElementById('root'),
// )
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
    ReactDOM.render(
        element,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)

// => Nếu mở phần element ở browser tools lên sẽ thấy, chỉ
// có phần thời gian được cập nhật sau mỗi lần hàm setInterval
// chạy. Còn các node khác ko nhấp nháy.

// => Chứng tỏ, chỉ những text node có contents thay đổi - 
// have changed thì mới được cập nhập - gets updated bởi 
// react DOM. - by React DOM.