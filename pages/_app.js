import '../styles/globals.scss';

import { ArthurContextProvider } from "../contexts/ArthurContext";

function App({ Component, pageProps }) {
  return (
    <ArthurContextProvider>
      <Component {...pageProps} />
    </ArthurContextProvider>
  )
}

export default App