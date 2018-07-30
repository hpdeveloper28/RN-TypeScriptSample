import * as React from 'react';
import { View, Text } from 'react-native';
type MyProps = {};
type MyState = { userName1: string, userName2: string }

export default class General extends React.Component<MyProps, MyState>{

    constructor(props: any) {
        super(props)
        this.state = { userName1: getUserName1('Hiren', 'Patel'), userName2: getUserName2('Hiren', 'Patel') }
    }

    onUserNamePressed() {
        runCommand()
    }

    render() {
        // Option 1
        // let userName1 = this.state.userName1
        // let userName2 = this.state.userName2
        
        // Option 2
        let userNames = this.state
        return (
            <View>
                <Text>
                    {userNames.userName2}
                </Text>
                <Text onPress={runCommand} style={{ padding: 20 }}>
                    {userNames.userName1}
                </Text>
            </View>
        )
    }
}

function getUserName1(firstName: String, lastName: String): string {
    return `${firstName}${lastName}`.toLowerCase();
}

const getUserName2 = (firstName: String, lastName: String): string => `${firstName}${lastName}`;

const runCommand = (): void => {
    console.log('runCommand')
};