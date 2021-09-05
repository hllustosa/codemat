import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

export default function CodeEditor(props) {
  const { code, setCode } = props;

  return (
    <AceEditor
      style={{
        height: "400px",
        width: "100%",
      }}
      placeholder=""
      mode="javascript"
      theme="chrome"
      name="basic-code-editor"
      onChange={(currentCode) => setCode(currentCode)}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={false}
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
