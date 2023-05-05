let numLinhas = parseInt(prompt("Quantas linhas?"));

for(let i = 0; i < numLinhas; i++){
          let line = "#";
          for(let j = 0; j<=i; j++){
                    line+="#";
          }
          console.log(line);
}