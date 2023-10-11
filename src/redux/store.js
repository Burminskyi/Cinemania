import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { moviesReducer } from './Movies/slice';
import { themeReducer } from './Theme/slice';

const moviesPersistConfig = {
  key: 'movies',
  storage,
  whitelist: ['favoriteMovies'],
};

const themesPersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['themeStyle'],
};

export const store = configureStore({
  reducer: {
    movies: persistReducer(moviesPersistConfig, moviesReducer),
    theme: persistReducer(themesPersistConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
