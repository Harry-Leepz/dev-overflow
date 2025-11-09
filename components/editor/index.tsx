"use client";

// setup from docs: https://mdxeditor.dev/editor/docs/getting-started
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
} from "@mdxeditor/editor";

import "./dark-editor.css";

type EditorProps = {
  value: string;
  fieldChange: (value: string) => void;
  editorRef: ForwardedRef<MDXEditorMethods> | null;
};

export default function Editor({
  value,
  fieldChange,
  editorRef,
  ...props
}: EditorProps) {
  return (
    <MDXEditor
      className='background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border'
      markdown={value}
      onChange={fieldChange}
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
