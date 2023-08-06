import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
const MoviesFlatList = ({
  moviesData,
  lazyLoading,
  imageBaseUrl,
  posterSize,
  _fetchMoviesDataMore,
}) => {
  const _renderMoviesItem = (item, index) => {
    let imgPath = `${imageBaseUrl}${posterSize}${item.backdrop_path}`;
    return (
      <View style={styles.moviesContainer}>
        <Image
          resizeMode={'stretch'}
          source={
            item?.backdrop_path !== null
              ? {uri: imgPath}
              : require('../../assets/bollywoodmovie.jpeg')
          }
          style={styles.posterImageStyle}
        />
        <View style={styles.nameOverViewReleaseDateContainer}>
          <Text style={styles.nameTextStyle}>{item.name || item.title}</Text>
          {item.overview && (
            <Text style={styles.overviewTextStyle}>{item.overview}</Text>
          )}
          <Text style={styles.releaseDateStyle}>
            {item.first_air_date || item.release_date}
          </Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={styles.footer}>
        {lazyLoading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={moviesData}
        renderItem={({item, index}) => {
          return _renderMoviesItem(item, index);
        }}
        keyExtractor={item => item.id}
        extraData={moviesData}
        ListFooterComponent={renderFooter}
        onEndReached={_fetchMoviesDataMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  moviesContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 5,
    marginVertical: 8,
    // borderRadius:10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  posterImageStyle: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameOverViewReleaseDateContainer: {
    paddingVertical: 8,
    marginHorizontal: 10,
  },
  nameTextStyle: {
    fontSize: 22,
    fontWeight: '800',
    //backgroundColor:'red'
  },
  overviewTextStyle: {
    fontSize: 14,
  },
  releaseDateStyle: {
    fontSize: 12,
    paddingVertical: 6,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default MoviesFlatList;
