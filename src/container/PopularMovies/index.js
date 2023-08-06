/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import MoviesFlatList from '../../components/MoviesFlatList';

function PopularMoviesScreen(props) {
  const [page, setPage] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const [lazyLoading, setLazyLoading] = useState(false);
  const {route} = props;
  const {imageBaseUrl, posterSize} = route.params;
  useEffect(() => {
    _fetchMoviesData();
  }, []);

  const _fetchMoviesData = () => {
    //setLazyLoading(true)
    const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`;
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
      .then(json => setMoviesData(json?.results))
      .catch(err => console.error('error:' + err));
  };

  const _fetchMoviesDataMore = () => {
    setLazyLoading(true);
    let nextPage = page + 1;
    setPage(nextPage);
    const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${nextPage}`;
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
        setLazyLoading(false);
        setMoviesData([...moviesData, ...json?.results]);
      })
      .catch(err => console.error('error:' + err));
  };

  return (
    <SafeAreaView>
      <MoviesFlatList
        moviesData={moviesData}
        lazyLoading={lazyLoading}
        imageBaseUrl={imageBaseUrl}
        posterSize={posterSize}
        _fetchMoviesDataMore={_fetchMoviesDataMore}
      />
    </SafeAreaView>
  );
}

export default PopularMoviesScreen;
