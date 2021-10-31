import os
import json

files = os.listdir(".")

for file_name in files:
    if "html" in file_name:
        with open(file_name) as file:
            content = ""
            first = True
            for line in file:
                line = line.strip()
                
                if first:
                    if "<article" in line:
                        first = False
                    continue
                
                if "<h3>Exemplos</h3>" in line or "<h3>Exemplo</h3>" in line:
                    break
                
                content = content +" "+ line#.replace("\\", "\\\\" ).replace('"', '\\"')
            
            json_file_name = file_name.replace("html", "json")
            with open(json_file_name) as json_file:

                json_dict = json.load(json_file)
            
            json_dict["problem"] = content
            fout = open(json_file_name, 'w', encoding='utf-8')
            json_dumps_str = json.dumps(json_dict, indent=4, ensure_ascii=False)
            print(json_dumps_str, file=fout)

            print(json_file_name)
            #break
            
            #print('"'+content+'"')







        
        