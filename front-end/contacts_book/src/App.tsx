import { Toaster } from "react-hot-toast";
import "./App.css";
import { ClientProvider } from "./contexts/ClientContext";
import { MainRoutes } from "./routes/Routes";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
      <ClientProvider>
        <MainRoutes />
      </ClientProvider>
    </>
  );
}

export default App;
