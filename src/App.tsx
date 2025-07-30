import { RouterProvider } from "react-router-dom";
import { router } from "./components/Body";
import { Provider } from "react-redux";
import { appStore, persistor } from "./utils/configureStore";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
