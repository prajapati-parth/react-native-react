import React from 'react'

const InputHOC = WrappedComponent => {
    return class InputComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                clickCount: this.props.count || 0
            }

            this.handleClick = this.handleClick.bind(this)
        }

        render() {
            return <WrappedComponent {...this.props} count={this.state.clickCount} onClick={this.handleClick} />
        }

        handleClick() {
            this.setState({
                clickCount: this.state.clickCount + 1
            })
        }
    }
}

export default InputHOC