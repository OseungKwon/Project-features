import { Editor } from "@toast-ui/react-editor";
import { Viewer } from "@toast-ui/react-editor";
import React, { useState } from "react";

const View = () => {
  const [content, setContent] = useState("a");
  return (
    <div>
      <div>
        <Viewer initialValue={content} />
      </div>
    </div>
  );
};

export default View;
