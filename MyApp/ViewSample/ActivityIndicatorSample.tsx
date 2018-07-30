import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default class ActivityIndicatorSample extends React.Component<{}>{

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.ts to start working on your app!</Text>
                <ActivityIndicator size= "large" color = "#0000ff" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});