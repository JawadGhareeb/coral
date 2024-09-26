import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Index from "./pages/Index";
import Home from "./pages/home/home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [{ index: true, element: <Home /> }],
  },
]);

const query = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
