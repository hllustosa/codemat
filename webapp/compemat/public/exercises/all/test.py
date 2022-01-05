import os
import json

files = os.listdir(".")

for file_name in files:
    if "json" in file_name:
        with open(file_name) as file:
            content = ""
            first = True
            print(file_name)
            json_file_name = file_name.replace("html", "json")
            with open(json_file_name) as json_file:
                json_dict = json.load(json_file)
            
            js_file_name = file_name.replace("json", "js")
            with open(js_file_name, "w") as js_file:
                code = json_dict["problem"].replace("</p>", "<p/>\n").replace("</li>", "</li>\n").replace("<h3>", "\n<h3>").replace("</h3>", "</h3>\n").replace("<script type=\"text/javascript\" id=\"MathJax-script\" async src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js\"></script>", "")
                js_file.write("export default function Exercise() {\n return (<div>\n"+code+"\n </div>);\n}\n" )
           
            #break 
            #print('"'+content+'"')







        
        