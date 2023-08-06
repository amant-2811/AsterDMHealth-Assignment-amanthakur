import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../container/welcome/index.js';
import PopularMoviesScreen from '../../container/PopularMovies/index.js';
import SearchMoviesFormScreen from '../../container/SearchMovies/SearchMoviesForm/index.js';
import SearchMoviesList from '../../container/SearchMovies/SearchMoviesList/index.js';

const Stack = createStackNavigator();

export function MyStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen
        name="PopularMoviesScreen"
        component={PopularMoviesScreen}
      />
      <Stack.Screen
        name="SearchMoviesFormScreen"
        component={SearchMoviesFormScreen}
      />
      <Stack.Screen name="SearchMoviesList" component={SearchMoviesList} />
    </Stack.Navigator>
  );
}
