"use client";

import React, { useRef, useEffect, FC, HTMLProps } from "react";
import Quill, { Quill as QuillType } from "quill";
import { cn } from "@/lib/utils";
import "quill/dist/quill.snow.css";

interface IEditorProps {
  onChange: (content: string) => void;
  value: string;
  containerClassNames?: HTMLProps<HTMLElement>["className"];
}

const Editor: FC<IEditorProps> = ({ onChange, value, containerClassNames }) => {
  const editorRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<QuillType>();

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6] }],
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
        onChange(quillRef.current?.root.innerHTML || "");
      });
    }

    if (quillRef.current) {
      quillRef.current.root.innerHTML = value;
    }
  }, [value]);

  return <div ref={editorRef} className={cn(containerClassNames)}></div>;
};

export default Editor;
