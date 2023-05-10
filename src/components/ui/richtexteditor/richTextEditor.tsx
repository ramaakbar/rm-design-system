import { useEffect } from "react";
import Link from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { twMerge } from "tailwind-merge";

import { MenuBar } from "./menubar";

type TiptapProps = {
  content?: string;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (...event: any[]) => void;
};

export function RichTextEditor({
  content = "",
  onChange,
  className,
}: TiptapProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: twMerge("prose dark:prose-invert mx-auto", "focus:outline-none"),
      },
    },
  });

  useEffect(() => {
    editor?.commands.setContent(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div
      className={twMerge(
        "block w-full rounded-md border border-border text-sm leading-6",
        "focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="w-full px-3 py-2" />
    </div>
  );
}
