<template>
  <form>
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
        <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
          <div class="flex items-center space-x-1 sm:pr-4">
            <button
              type="button"
              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              :class="{ 'text-gray-900 bg-gray-100': editor.isActive('bold') }"
            >
              <UiIcon
                class="flex text-gray-600"
                icon="bold"
                @click="editor.chain().focus().toggleBold().run()"
              />
              <span class="sr-only">Embed map</span>
            </button>
            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <UiIcon
                class="flex text-gray-600"
                :class="{ 'text-gray-900 bg-gray-100': editor.isActive('italic') }"
                icon="italic"
                @click="editor.chain().focus().toggleItalic().run()"
              />
              <span class="sr-only">Upload image</span>
            </button>
            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <UiIcon
                class="flex text-gray-600"
                :class="{ 'text-gray-900 bg-gray-100': editor.isActive('link') }"
                icon="link"
                @click="setLink"
              />
              <span class="sr-only">Format code</span>
            </button>
            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <UiIcon
                class="flex text-gray-600"
                :class="{ 'text-gray-900 bg-gray-100': editor.isActive('strike') }"
                icon="strike-through"
                @click="editor.chain().focus().toggleStrike().run()"
              />
              <span class="sr-only">Add emoji</span>
            </button>
          </div>
          <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
            <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <UiIcon
                class="flex text-gray-600"
                icon="undo"
                @click="editor.chain().focus().undo().run()"
              />
              <span class="sr-only">Full screen</span>
            </button>
            <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <UiIcon
                class="flex text-gray-600"
                icon="redo"
                @click="editor.chain().focus().redo().run()"
              />
              <span class="sr-only">Full screen</span>
            </button>
          </div>
        </div>
        <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
          <UiIcon
            class="flex text-gray-600"
            icon="code"
            @click="editor.chain().focus().toggleCode().run()"
          />
          <span class="sr-only">Full screen</span>
        </button>
        <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Show full screen
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
        <label for="editor" class="sr-only">Publish post</label>
        <editor-content :editor="editor" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" />
      </div>
    </div>
    <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
      Publish post
    </button>
  </form>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Code from '@tiptap/extension-code';
import Link from '@tiptap/extension-link';
export default {
  components: {
    EditorContent
  },

  data() {
    return {
      editor: new Editor({
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
        extensions: [
          StarterKit,
          Document,
          Paragraph,
          Text,
          Bold,
          Code,
          Link.configure({
            openOnClick: false
          })
        ]
      })
    };
  },
  beforeUnmount() {
    this.editor.destroy();
  },
  methods: {
    setLink() {
      const previousUrl = this.editor.getAttributes('link').href;
      const url = window.prompt('URL', previousUrl);

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === '') {
        this.editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .unsetLink()
          .run();

        return;
      }

      // update link
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    }
  }
};
</script>
