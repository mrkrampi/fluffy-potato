import { PartialBlock } from '@blocknote/core';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';

import '@blocknote/mantine/style.css';
import '@blocknote/core/fonts/inter.css';

import { useEdgeStore } from '@/lib/edgestore';

type Props = {
  editable: boolean;
  initialContent?: string;
  onChange: (value: string) => void;
}

const Editor = ({ initialContent, editable, onChange }: Readonly<Props>) => {
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) as Array<PartialBlock> : undefined,
    uploadFile: handleUpload,
  });

  const handleChange = () => {
    onChange(JSON.stringify(editor.document, null, 2));
  };

  return (
    <BlockNoteView
      editor={editor}
      theme="light"
      editable={editable}
      onChange={handleChange}
    />
  );
};

export default Editor;
