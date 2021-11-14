import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

export default function CodeEditor(props) {
  const { code, setCode, readOnly, width, height, border } = props;

  return (
    <AceEditor
      style={{
        height: height? height :"50vh",
        width: width ? width: "100%",
        border: border ? "solid 1px black" : "none",
        margin : border ? "auto" : "none"
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
      disabled={true}
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
