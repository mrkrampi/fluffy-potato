import { useEffect, useState } from 'react';
import { BlockNoteView } from '@blocknote/mantine';
import { getDefaultReactSlashMenuItems, SuggestionMenuController, useCreateBlockNote } from '@blocknote/react';
import { BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems, insertOrUpdateBlock, PartialBlock } from '@blocknote/core';

import '@blocknote/mantine/style.css';
import '@blocknote/core/fonts/inter.css';
import '@/public/blocknote-styles.css';

import { useEdgeStore } from '@/lib/edgestore';
import { ChooseCourseBlock } from '@/components/blocknote/choose-course-block';

type Props = {
  editable: boolean;
  initialContent?: string;
  theme?: 'light' | 'dark';
  onChange?: (value: string, html: string) => void;
}

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    chooseCourse: ChooseCourseBlock,
  },
});

const insertChooseBlock = (editor: typeof schema.BlockNoteEditor) => ({
  title: "Choose course link",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "chooseCourse",
    });
  },
  group: "Other",
});

const Editor = ({ initialContent, editable = false, onChange, theme = 'light' }: Readonly<Props>) => {
  const [isInited, setIsInited] = useState(false);

  useEffect(() => {
    setIsInited(true);
  }, []);

  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  };

  const editor = useCreateBlockNote({
    schema,
    initialContent: initialContent ? JSON.parse(initialContent) as Array<PartialBlock> : undefined,
    uploadFile: handleUpload,
  });

  const handleChange = async () => {
    if (!editable) {
      return;
    }

    try {
      const html = await editor.blocksToHTMLLossy();
      onChange?.(JSON.stringify(editor.document, null, 2), html);
    } catch (e) {
      console.log(e);
    }
  };

  if (!isInited) {
    return null;
  }

  return (
    <BlockNoteView
      editor={editor}
      theme={theme}
      editable={editable}
      onChange={handleChange}
      slashMenu={false}
      {...(theme === 'dark' && { 'data-theming-css-demo': true })}
    >
      <SuggestionMenuController
        triggerCharacter={"/"}
        getItems={async (query: string) =>
          filterSuggestionItems(
            [...getDefaultReactSlashMenuItems(editor), insertChooseBlock(editor)],
            query
          )
        }
      />
    </BlockNoteView>
  );
};

export default Editor;
