import { useRef, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

export default function CodeEditor(props) {
  const { code, setCode, readOnly, width, height, border } = props;
  const editor = useRef(null);

  useEffect(() => {
    if (editor) {
      if (readOnly) {
        editor.current.editor.renderer.$cursorLayer.element.style.display =
          "none";
      }
      editor.current.editor.gotoLine(0);
    }
  }, []);

  return (
    <AceEditor
      style={{
        height: height ? height : "50vh",
        width: width ? width : "100%",
        border: border ? "solid 1px #c1c1c1" : "none",
        margin: border ? "auto" : "none",
      }}
      ref={editor}
      placeholder=""
      mode="javascript"
      theme="chrome"
      name="basic-code-editor"
      onChange={(currentCode) => setCode(currentCode)}
      fontSize={16}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={false}
      readOnly={readOnly}
      value={code}
      setOptions={{
        selectionStyle: "text",
        highlightActiveLine: false,
        highlightSelectedWord: false,
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
        behavioursEnabled: false,
        showFoldWidgets: false,
        fadeFoldWidgets: false,
        enableMultiselect: false,
        displayIndentGuides: false,
        enableSnippets: false,
      }}
    />
  );
}
