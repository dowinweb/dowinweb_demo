
import wrapwithLoadData from './high.js';
import React from 'react';

class InputWithUserName extends React.Component {
    render() {
        return <input value={this.props.data} />;
    }
}

InputWithUserName = wrapwithLoadData(InputWithUserName, 'username');
export default InputWithUserName;
