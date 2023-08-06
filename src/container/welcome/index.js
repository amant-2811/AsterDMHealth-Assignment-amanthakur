import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import RoundedButton from '../../components/RoundedButton';

const WelcomeScreen = props => {
  const [imageBaseUrl, setImageBaseUrl] = useState('');
  const [posterSize, setPosterSize] = useState('');

  useEffect(() => {
    _fetchImagesBasePathAndPosterSize();
  }, []);
  const _fetchImagesBasePathAndPosterSize = () => {
    const url = 'https://api.themoviedb.org/3/configuration';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzRlNmJmY2I2NDMxYjFmYWMwMzlkYzcxNjExZjQ2NSIsInN1YiI6IjY0Y2JlYjQxZTFmYWVkMDExZTM4NDExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yMcnuupq8sAuTH_v6UCUPRG8mnRPZLsfCDlQeCzhL0',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setImageBaseUrl(json?.images?.secure_base_url);
        setPosterSize(json?.images?.poster_sizes[3]);
      })
      .catch(err => console.error('error:' + err));
  };
  const handleButton1Press = () => {
    //console.log('props',props);
    props.navigation.navigate('PopularMoviesScreen', {
      imageBaseUrl: imageBaseUrl,
      posterSize: posterSize,
    });
  };

  const handleButton2Press = () => {
    // Handle button 2 press
    props.navigation.navigate('SearchMoviesFormScreen', {
      imageBaseUrl: imageBaseUrl,
      posterSize: posterSize,
    });
  };

  return (
    <View style={styles.container}>
      <RoundedButton title="Search  Movies" onPress={handleButton2Press} />
      <RoundedButton title="Popular Movies" onPress={handleButton1Press} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
