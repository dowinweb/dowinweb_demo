
import React from 'react';

const Ullist = (props) => {
    console.log(props);
    return (
        props.map((item,index) => {
            return <li><span>{item.name}</span>:{item.content}</li>;
        })
    );
}

export default class Title extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: []
        };
    }

    _onClick(){
        let name = document.getElementById('username').value;
        let content = document.getElementById('content').value;
        if(!name || !content){
            alert('内容不能为空');
            return false;
        }
        console.log(name,content);
        const data = this.state.data;
        data.push({
                name: name,
                content: content
            });
        this.setState({
            data: data
        });
    }

    render(){
        return (
            <div>
                <h1> React 小书 </h1>
                <label htmlFor="username">用户名：</label>
                <input type="text" name="username" id="username"/>
                <br />
                <label htmlFor="content">评论内容：</label>
                <textarea id="content"></textarea>
                <button onClick ={this._onClick.bind(this)}>发布</button>
                <ul>
                    {Ullist(this.state.data)}       
                </ul>
            </div>
        );
    }
}