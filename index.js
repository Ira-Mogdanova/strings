var btn = document.querySelector('button');
var input = document.getElementById("input"); 
var check = document.getElementById("check");
var output = document.getElementById("output");
var inputVal = input.value;
var outputVal = output.value;
var checkVal = check.value;


function reverse(s,t) {
  t = '';
    for (var i = s.length - 1; i >= 0; i--){
        t = t += s[i];
    }
    console.log(t);
}

function endWith(s,t,c){
  t = '';
  var n = 0;
  var d = '';
  if(c != ''){
    for(var i = (s.length - c.length); i < s.length; i++){
      for(var j = 0; j < c.length; j++){
        if(s[i] == c[j]) n++;
      }
    }
    if(n == c.length) {
      t = true;
    }
    else t = false;
  }
  else alert("Enter some end to check it!");
  console.log(t);
}

function startWith(s,t,c){
  t = '';
  var n = 0;
  if(c != ''){
    for(var i = 0; i < c.length; i++){
      if(s[i] == c[i]) n++;
    }
    if(n == c.length) {
      t = true;
    }
    else t = false;
  }
  else alert("Enter some start to check it!");
  console.log(t);
}

function isCamelCase(s,t){
  t = '';  
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
    t = true;
  } else t = false;

  console.log(t);
}

function isSnakeCase(s,t){
  t = '';  
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
    t = true;
  } else t = false;

  console.log(t);
}

function isNan(s,t){
  t = '';
  d = '0123456789';
  var k = 0;
  for(var i = 0; i < s.length; i++){
    if(d.search(s[i]) == -1){
      k++;
    }
  }
  if(k == s.length){
    t = true;
  }
  else 
    t = false;

  console.log(t);
}

function isPhone(s,t){
  t = '';
  d = '0123456789';
  if((s[0] == '+') && (d.search(s[1]) == '3') && (d.search(s[2]) == '7') && (d.search(s[3]) == '5') 
  && (d.search(s[4]) != -1) && (d.search(s[5]) != -1) && (d.search(s[6]) != -1) 
  && (d.search(s[7]) != -1) && (d.search(s[8]) != -1) && (d.search(s[9]) != -1) 
  && (d.search(s[10]) != -1) && (d.search(s[11]) != -1) && (d.search(s[12]) != -1))  {
    t = true;
  }
  else 
    t = false;

  console.log(t);
}

function isEmail(s,t,c){
  t = '';
  k = 0;
  var n = 0;
  var c = '@mail.com';
  for(var i = 0; i < s.length-8; i++){
    if((s[i] == ' ') || (s[i] == '#') || (s[i] == '?') 
    || (s[i] == '$') || (s[i] == '%') || (s[i] == '&')
    || (s[i] == ',') || (s[i] == '"') || (s[i] == ''))
      k++;
  }
  for(var i = (s.length - 8); i < s.length; i++){
    for(var j = 0; j < 8; j++){
      if(s[i] == c[j]) n++;
    }
  }
  if((n == 8) && (k == 0)) {
    t = true;
  }
  else 
    if((k != 0) && (n == 8)) 
      alert("Enter correct email : emailemail@mail.com");
    else t = false;
  console.log(t);
}