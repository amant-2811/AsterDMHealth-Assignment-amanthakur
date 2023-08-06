import {View, TextInput, StyleSheet} from 'react-native';

const RoundedTextInput = ({placeholder, _onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onChangeText={(text) => _onChangeText(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: '80%',
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
});
export default RoundedTextInput;
