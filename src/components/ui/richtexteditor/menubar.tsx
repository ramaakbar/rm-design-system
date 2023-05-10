import { useCallback } from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  MoreHorizontal,
  Redo,
  Strikethrough,
  Undo,
  Unlink,
} from "lucide-react";

import { Button } from "../button";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="sticky left-0 right-0 top-0 z-10 mb-4 rounded-t border-b border-border bg-background">
      <div className="flex flex-wrap items-center gap-2 divide-x divide-border px-3 py-2">
        <div className="space-x-2 pl-2">
          <Button
            variant={editor.isActive("bold") ? "default" : "outline"}
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
          >
            <Bold size={20} />
          </Button>
          <Button
            variant={editor.isActive("italic") ? "default" : "outline"}
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
          >
            <Italic size={20} />
          </Button>
          <Button
            variant={editor.isActive("strike") ? "default" : "outline"}
            size="sm"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
          >
            <Strikethrough size={20} />
          </Button>
        </div>
        <div className="space-x-2 pl-2">
          <Button
            variant={
              editor.isActive("heading", { level: 1 }) ? "default" : "outline"
            }
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <Heading1 size={20} />
          </Button>
          <Button
            variant={
              editor.isActive("heading", { level: 2 }) ? "default" : "outline"
            }
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            <Heading2 size={20} />
          </Button>
          <Button
            variant={
              editor.isActive("heading", { level: 3 }) ? "default" : "outline"
            }
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            <Heading3 size={20} />
          </Button>
        </div>
        <div className="space-x-2 pl-2">
          <Button
            variant={editor.isActive("bulletList") ? "default" : "outline"}
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <List size={20} />
          </Button>
          <Button
            variant={editor.isActive("orderedList") ? "default" : "outline"}
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <ListOrdered size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <MoreHorizontal size={20} />
          </Button>
        </div>
        <div className="space-x-2 pl-2">
          <Button
            variant={editor.isActive("link") ? "default" : "outline"}
            size="sm"
            onClick={setLink}
          >
            <LinkIcon size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().unsetLink().run()}
            disabled={!editor.isActive("link")}
          >
            <Unlink size={20} />
          </Button>
        </div>
        <div className="space-x-2 pl-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <Undo size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <Redo size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
