
import React from 'react';
import PropTypes from 'prop-types';

export default class Comment extends React.Component{
    static propTypes ={
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }
    static contextTypes = {
        themeColor: PropTypes.string
    }
    constructor(){
        super();
        this.state={
            timeString: ''
        };
    }
    componentWillMount() {
        // const that = this;
        this._updateTimeString();
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        );
    }
    handleDeleteComment() {
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index);
        }
    }
    componentWillUnmount(){
        clearInterval(this._timer);
    }
    _updateTimeString(){
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createdTime) / 1000;
        this.setState({
            timeString: duration>60
            ? `${Math.round(duration/60)}分钟前`:
              `${Math.round(Math.max(duration,1))}秒前`
        })
    }
    _getProcessedContent(content){
        return content
               .replace(/&/g,"&amp;")
               .replace(/</g,"&lt;")
               .replace(/>/g,"&gt;")
               .replace(/"/g,"&quot;")
               .replace(/'/g,"&#039;")
               .replace(/`([\S\s]+?)`/g,'<code>$1</code>');
    }
    render(){
        const {comment} = this.props;
        return(
            <div className="comment">
                <div className="comment-user">
                    <span style={{ color: this.context.themeColor }}>{comment.username}</span>   :   
                </div>
                <p dangerouslySetInnerHTML={{ __html: this._getProcessedContent(comment.content) }}/>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>删除</span>
            </div>
        )
    }
} 