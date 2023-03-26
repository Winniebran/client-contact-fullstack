import { Toaster } from "react-hot-toast";
import "./App.css";
import { ClientProvider } from "./contexts/ClientContext";
import { ContactProvider } from "./contexts/ContactContext";
import { MainRoutes } from "./routes/Routes";

const App = () => {
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
        <ContactProvider>
          <MainRoutes />
        </ContactProvider>
      </ClientProvider>
    </>
  );
}

export default App;
