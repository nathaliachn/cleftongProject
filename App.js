import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>Hola mundo!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
