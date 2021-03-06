
import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import InputWithUserName from './input.js';
import TextareaWithContent from './textarea.js';

export default class CommentApp extends React.Component{
    static childContextTypes = {
        themeColor: PropTypes.string
    }
    constructor(props){
        super(props);
        this.state={
            comments:[],
            themeColor:'red'
        };
    }
    getChildContext() {
        return {themeColor: this.state.themeColor}
    }
    componentWillMount(){
        this._loadComments();
        this.setState({
            themeColor: 'green'
        });
    }
    _loadComments() {
        let comments = localStorage.getItem('comments');
        if(comments){
            comments = JSON.parse(comments);
            this.setState({
                comments
            });
        }
    }
    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments));
    }
    handleSubmitComment(comment){
        console.log(comment);
        if(!comment) return;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content) return alert('请输入评论内容');
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        });
        this._saveComments(this.state.comments);
    }

    handleDeleteComment(index){
        console.log(index);
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({comments});
        this._saveComments(comments);
    }
    render(){
        return(
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList 
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)}
                />
                <InputWithUserName />
                <TextareaWithContent />
            </div>
        )
    }
}