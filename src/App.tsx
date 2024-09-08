import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider";
import router from "./route";

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
