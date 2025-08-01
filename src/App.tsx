import { RouterProvider } from "react-router-dom";
import { router } from "./components/Body";
import { Provider } from "react-redux";
import { appStore } from "./utils/configureStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
