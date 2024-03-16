"use client";

import React, { useRef, useEffect, useState } from "react";
import Quill, { Quill as QuillType } from "quill";
import "quill/dist/quill.snow.css";

const AddPostEditor = () => {
  const editorRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<QuillType>();
  const [updateContent, setUpdateContent] = useState("");

  // const handleContentChange = (content) => {
  //   console.log("content", content)
  //   setUpdateContent(content)
  // };

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            [{ align: [] }],
            ["clean"],
          ],
        },
      });

      quillRef.current.on("text-change", () => {
        console.log({
          html: quillRef.current?.root.innerHTML,
          text: quillRef.current?.getText(),
          content: quillRef.current?.root.innerHTML,
        });

        // onChange(quillRef?.current?.root.innerHTML);
      });
    }

    // if (quillRef.current) {
    //   quillRef.current.root.innerHTML = value;
    // }
  }, []);

  return <div ref={editorRef} style={{ height: "300px" }}></div>;
};

export default AddPostEditor;
