let numLinhas = parseInt(prompt("Quantas linhas?"));

for(let i = 0; i < numLinhas; i++){
          let line="";
          if(i % 2 == 0){
                    for(let j = 0; j < numLinhas; j++){
                              if(j % 2 == 0){
                                        line+= "#";
                              } else {
                                        line+= " ";
                              }
                    }
          } else {
                    for(let j = 0; j < numLinhas; j++){
                              if(j % 2 == 0){
                                        line+= " ";
                              } else {
                                        line+= "#";
                              }
                    }
          }
          console.log(line);

}