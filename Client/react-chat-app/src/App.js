import MyRoutes from "./Routes";
import  React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "ChatNow"
  }, [])
  return (
   < MyRoutes />
  );
}

export default App;
