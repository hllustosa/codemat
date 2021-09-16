import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

export default function CodeEditor(props) {
  const { code, setCode, readOnly } = props;

  return (
    <AceEditor
      style={{
        height: "320px",
        width: "100%",
      }}
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
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
