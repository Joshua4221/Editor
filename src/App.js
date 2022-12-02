import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

function App() {
  const [sta, setSta] = useState("");
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setSta(data);
  };
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={sta}
        onChange={handleChange}
        config={{
          plugins: [Paragraph, Bold, Italic, Essentials],
          toolbar: ["bold", "italic"],
        }}
      />
    </div>
  );
}

export default App;
