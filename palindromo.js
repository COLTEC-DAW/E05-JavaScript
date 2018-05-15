var l

function palindrome(s) {
    var re = /[^A-Za-z0-9]/g;
    s = s.toLowerCase().replace(re, '');
    var len = s.length;
    for (var i = 0; i < len/2; i++) {
      if (s[i] !== s[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }

   l = prompt("String: ")

   palindrome(l);