  function xadrez(num){
    var str1 = "# # # # ";
    var str2 = " # # # #";

    for(var i = 0; i < num; i++)
      if(i % 2 == 0)
        console.log(str1);
      else
        console.log(str2);

  }

  xadrez(4);
