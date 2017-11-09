class InputWebBaseComponent extends React.Component {
    render() {
        return (
            <div>
                <button className='btn btn-default' style={{width: '150px'}} onClick={() => this.props.onClick()}>{this.props.title}</button>
                <p>{this.props.count}</p>
            </div>
        )
    }
}

export default InputWebBaseComponent