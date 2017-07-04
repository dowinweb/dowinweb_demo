
import wrapwithLoadData from './high.js';
import React from 'react';

class TextareaWithContent extends React.Component {
    render() {
        return <textarea value={this.props.data} />;
    }
}

TextareaWithContent = wrapwithLoadData(TextareaWithContent, 'comments');
export default TextareaWithContent;
