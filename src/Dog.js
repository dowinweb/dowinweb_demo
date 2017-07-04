
import React from 'react';


export default class Dog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           date: new Date(),
           content: <h1>React.js小书</h1>,
           color: 'blue'
        }
    }

    handleShowOrHide() {
        this.setState({
            isShowClock: !this.state.isShowClock
        });
    }

    componentWillMount() {
        this.timer = setInterval(()=>{
            this.setState({ date: new Date() })
        }, 1000);
    }

    render() {
        console.log(this.state.date);
        return (
            <div style={{ color: this.state.color}}>Dog
            {this.state.content}
            </div>
        )
    }
}