import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../src/features/user"
import stepReducer from "../src/features/step"
import fundReducer from "../src/features/fund"

const store = configureStore({
  reducer: {
    user: userReducer,
    step: stepReducer,
    fund : fundReducer,
    // email: emailReducer,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>)
}

export default MyApp
