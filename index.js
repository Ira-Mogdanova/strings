var btn = document.querySelector('button');
var input = document.getElementById("input"); 
var check = document.getElementById('check');
var output = document.getElementById("output");
var inputVal = input.value;
var checkVal = check.value;

function reverse(s){
  check.style.visibility = 'hidden';
  output.value = '';
  for(var i = s.length -1; i>=0; i--){
    output.value = output.value +=s[i];
  }
}

function endWith(s){
  output.value = '';  
  if((checkVal == s[s.length - 1]) && (checkVal.length == 1)){
    output.value = 'true';
  }  
  else {
    output.value = 'false';
  }
}

function startWith(s){
  output.value = '';
  output.value = '';  
  if((checkVal == s[0]) && (checkVal.length == 1)){
    output.value = 'true';
  }  
  else {
    output.value = 'false';
  }
}

function isCamelCase(s){
  output.value = '';  
  var j = 0, k = 0, n =0;
  for(var i = 0; i < s.length; i++){
    if((s[i] == s[i].toUpperCase()) && (s[i] != ' '))
      j++;
    else 
      if(s[i] != ' ')
       k++;
      else 
        n++;
  }
  if((n == 0) && (k >= 2) && (j >= 2)){
    output.value = 'true';
  } else output.value = 'false';
}

function isSnakeCase(s){
  output.value = '';  
  var j = 0, k = 0, n =0, l = 0;

  for(var i = 0; i < s.length; i++){
    if((s[i] == s[i].toUpperCase()) && (s[i] != ' ') && (s[i] != '_'))
      j++;
    else 
      if((s[i] != ' ') && (s[i] != '_'))
       k++;
      else 
        if(s[i] != '_')
          n++;
        else 
          l++;
  }

  if((n == 0) && (k >= 2) && (j == 0) && (l >= 1)){
    output.value = 'true';
  } else output.value = 'false';
}

function isNan(s){
  output.value = '';
  t = '0123456789';
  var k = 0;
  for(var i = 0; i < s.length; i++){
    if(t.search(s[i]) == -1){
      k++;
    }
  }
  if(k == s.length){
    output.value = 'true';
  }
  else 
    output.value = 'false';
}

function isPhone(s){
  output.value = '';
  t = '0123456789';
  if((s[0] == '+') && (s[4] == '(') && (s[7] == ')') 
  && (t.search(s[1]) != -1) && (t.search(s[2]) != -1) && (t.search(s[3]) != -1) 
  && (t.search(s[5]) != -1) && (t.search(s[6]) != -1) && (t.search(s[8]) != -1)
  && (t.search(s[9]) != -1) && (t.search(s[10]) != -1) && (t.search(s[11]) != -1)
  && (t.search(s[12]) != -1) && (t.search(s[13]) != -1) && (t.search(s[14]) != -1) && (s.length == 15))  {
    output.value = 'true';
  }
  else 
    output.value = 'false';
}

function isEmail(s){
  output.value = ''; 
  var k = 0, n = 0;
  var t = "@mail.com"; 
  for(var i = 0; i < s.length; i++){
    while(s[i] != '@'){
      k++;
    }
  }

  for(var i = k; i <  s.length; i++){
    if(t.length == s.length - k){
      if(s[i] == t[i]){
        n++;
      }
    }
  }
  if(n == t.length){
    output.value = 'true';
  }
  else{
    output.value = 'false';
  }
}