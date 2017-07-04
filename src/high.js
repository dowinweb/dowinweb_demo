import React from 'react';


export default (WrappedComponent, name) => {
    class NewComponent extends React.Component {
        constructor() {
            super();
            this.state={ data: null };
        }
        componentWillMount() {
            let data = localStorage.getItem(name);
            this.setState({data});
        }
        render(){
            return <WrappedComponent data={this.state.data}/>
        }
    }
    return NewComponent;
}