import { Component } from "react";

class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    }
// 렌더링을 하는 동시에 함수를 만들어서 전달하는 방법

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={this.state.message}
//                 onChange={
//                     (e)=> {
//                         this.setState({
//                             message: e.target.value
//                         })
//                     }
//                 }
//                 />
//             <button onClick={
//                 () => {
//                     alert(this.state.message);
//                     this.setState({
//                         message: ''
//                     });
//                 }
//             }>확인</button>
//             </div>
//         );
//     }
// }


    // 함수를 미리 만들어 전달하는 방법

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: ''
    //     })
    // }

    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>이벤트 연습</h1>
    //             <input
    //                 type="text"
    //                 name="message"
    //                 placeholder="아무거나 입력해 보세요"
    //                 value={this.state.message}
    //                 onChange={this.handleChange}
    //             />
    //             <button onClick={this.handleClick}>확인</button>
    //         </div>
    //     );
    // }


    //Property Initializer Syntax를 사용한 메서드 작성

    // handleChange = (e) => {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // handleClick = () => {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>이벤트 연습</h1>
    //             <input
    //                 type="text"
    //                 name="message"
    //                 placeholder="아무거나 입력해 보세요"
    //                 value={this.state.message}
    //                 onChange={this.handleChange}
    //             />
    //             <button onClick={this.handleClick}>확인</button>
    //         </div>
    //     );
    // }

    // evnet 객체를 활용하여 input 여러개 넣기
    
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    // handleClick = () => {
    //     alert(this.state.username + ': ' + this.state.message);
    //     this.setState({
    //         username: '',
    //         message: ''
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>이벤트 연습</h1>
    //             <input
    //                 type="text"
    //                 name="username"
    //                 placeholder="사용자 명"
    //                 value={this.state.username}
    //                 onChange={this.handleChange}
    //             />
    //             <input
    //                 type="text"
    //                 name="message"
    //                 placeholder="아무거나 입력해 보세요"
    //                 value={this.state.message}
    //                 onChange={this.handleChange}
    //             />
    //             <button onClick={this.handleClick}>확인</button>
    //         </div>
    //     );
    // }

    // onKeyPress 이벤트 핸들링

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자 명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}


export default EventPractice;