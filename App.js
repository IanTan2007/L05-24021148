import React, {useState} from 'react';
import { TextInput, Text, View, Button, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const App = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('Admin');
    const [pw, setPw] = useState('');
  return (
      <View>
          <Text></Text>
          <Text>User Type:</Text>
          <Picker
              selectedValue={type}
              onValueChange={(value) => setType(value)}
              style={{
                  backgroundColor: 'lightblue',
                  borderRadius: 10,
                  color: 'black'
              }}
          >
              <Picker.Item label="Admin" value="Admin" />
              <Picker.Item label="Guest" value="Guest" />

          </Picker>


          <Text></Text>
          <Text>User Name:</Text>
          <TextInput
              style={{borderWidth: 1}}
              onChangeText={(text) => setName(text)}
          />
          <Text>{name}</Text>

          <Text>Password:</Text>
          <TextInput
              style={{borderWidth: 1}}
              secureTextEntry={true}
              onChangeText={(text) => setPw(text)}
          />
          <Text>{pw}</Text>

          <TouchableOpacity onPress={() => {
              const correctPassword = '123';
              let mymessage = 'Error! Wrong Password!';

              if (pw === correctPassword) {
                  mymessage = 'Welcome ' + type + ' ' + name;
              }

              ToastAndroid.show(mymessage, ToastAndroid.SHORT);
          }}>
              <Text>LOG IN</Text>
          </TouchableOpacity>
      </View>
  );
};

export default App;