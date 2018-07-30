import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import ActivityIndicatorSample from './MyApp/ViewSample/ActivityIndicatorSample';
import General from './MyApp/General/General'

const RootStack = createStackNavigator({
  ActivityIndicatorSample: {
    screen: ActivityIndicatorSample
  },
  General: {
    screen: General
  }
},
  {
    initialRouteName: "General"
  })

export default class App extends React.Component<{}> {
  render() {
    return (
      <RootStack />
    );
  }
}