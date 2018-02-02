import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {guess: '', num: parseInt(Math.floor(Math.random() * 100)), output: 'Guess a number between 0 - 100!', counter: 1}
        }
    
    guessButton = () => {
        
        const num = this.state.num;
        const guess = parseInt(this.state.guess);
        const counter = parseInt(this.state.counter);
        
        if(num > guess) {
           const output = 'Your guess ' + guess + ' is too low';
            
            this.setState(() => {
                return {output : output, counter : this.state.counter + 1}
            });
           
        } if(num < guess) {
            
           const output = 'Your guess ' + guess + ' is too high';
           const counter = counter +1;
            
            this.setState(() => {
                return {output : output, counter : this.state.counter + 1}
            });
        } if (num == guess) {
            
            const output = 'Congratulations!'
            Alert.alert('You guessed the number in ' + counter + ' guesses');
            
            this.setState(() => {
                return {output : output}
            });
        }
    }
    
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.output}</ Text>
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            keyboardType={'numeric'}
            onChangeText={(guess) => this.setState({guess})}
            />
            
        <Button title="Guess!" onPress={this.guessButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
