import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import RoundedButton from '../../../components/RoundedButton';
import RoundedTextInput from '../../../components/RoundedTextInput';

const SearchMoviesFormScreen = props => {
  const [title, setTitle] = useState('');
  const {route} = props;
  const {imageBaseUrl, posterSize} = route.params;
  const handleButton1Press = () => {
    console.log('title', title);
    if (title !== '' || title.length !== 0) {
      props.navigation.navigate('SearchMoviesList', {
        title: title,
        imageBaseUrl: imageBaseUrl,
        posterSize: posterSize,
      });
    }
  };

  const _onChangeText = text => {
    setTitle(text);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RoundedTextInput
          placeholder="Enter your movie title here"
          _onChangeText={_onChangeText}
        />
        <RoundedButton title="Submit" onPress={handleButton1Press} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SearchMoviesFormScreen;
