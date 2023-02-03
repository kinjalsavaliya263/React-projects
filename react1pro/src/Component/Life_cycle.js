import React, { Component } from 'react'

export default class Life_cycle extends Component {
    constructor(props) {
        super()
        this.state = {
            count: 0
        }
        console.log("I am constructor.....");

    }

    componentDidMount() {
        console.log("I am component didmount.........");
    }
    handleUpdate = () => {
        this.setState({ count: 1 })
    }
    componentDidUpdate = () => {
        console.log("I am component didupdate......");
    }
    shouldComponentUpdate() {
        return true;
    }
    componentWillUnmount() {
        console.log("I am componentwill unmount.....");
    }


    render() {
        console.log("I am Render.....");
        return (
            <>
                <div> Life Cycle</div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleUpdate}>Inc..</button>
            </>
        )
    }
}
