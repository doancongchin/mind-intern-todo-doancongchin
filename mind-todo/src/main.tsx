import { Provider } from 'react-redux'
import { store } from "./store/index";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/main.scss";


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
