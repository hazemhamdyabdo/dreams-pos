import { createStore } from 'vuex';

// Modules
import app from './app';

export default createStore({
  modules: {
    app,
  },
  strict: process.env.DEV,
});