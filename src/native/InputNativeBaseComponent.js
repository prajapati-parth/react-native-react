import React from 'react'
import {Button, View, Text} from 'react-native'

class InputNativeBaseComponent extends React.Component {
    render() {
        return (
            <View>
                <Button style={{height: 40, width: 150}} title={this.props.title} onPress={() => this.props.onClick()}/>
                <View>
                    <Text>{this.props.count}</Text>
                </View>
            </View>
        )
    }
}

export default InputNativeBaseComponent