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
