import React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World !!</Text>
        <Text>Hello World !!</Text>
        <Text>Hello World !!</Text>
        <Text>Hello World !!</Text>
        <Button title="Click Me" onPress={() => alert('Button Clicked!')} />
      </View>
    </SafeAreaView>
  );
}

export default App;
