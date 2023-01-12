import React from "react";
import ImageGrid from "./comps/ImageGrid";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import "semantic-ui-css/semantic.min.css";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Title />
        <UploadForm />
        <ImageGrid />
      </DataProvider>
    </div>
  );
}

export default App;
