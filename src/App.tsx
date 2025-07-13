import { RouterProvider } from "react-router-dom";
import { router } from "./components/Body";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
