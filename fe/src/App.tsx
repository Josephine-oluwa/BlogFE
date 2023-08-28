import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./Routes/mainRoute"
import { persistStore } from "redux-persist"
import { store } from "./Global/Store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

const persistor = persistStore(store);

let client = new QueryClient()

const App = () => {
  

  return (
    <div>
      <Provider store = {store}>
        <PersistGate persistor={persistor} loading={null} >
        <QueryClientProvider client = {client}>
        <RouterProvider router = {mainRoute} />
        </QueryClientProvider>
       
        </PersistGate>
     
      </Provider>
    
    </div>
  )
}

export default App