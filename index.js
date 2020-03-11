var btn = document.querySelector('button');
var inputVal = document.getElementById("input").value; 
var checkVal = document.getElementById("check").value;
var outputVal = document.getElementById("output");

function reverse(s,t) {
  t = '';
  for (var i = s.length - 1; i >= 0; i--){
      t = t += s[i];
  }
  return t;
}

function endWith(s,t,c){
  t = '';
  var n = 0;
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
  return t;
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
  return t;
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
  return t;
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
  return t;
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
  return t;
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
  return t;
}

function isEmail(s,t,c){
  t = '';
  var c = new RegExp("@mail.com");
  var t = c.exec(s);
  if(t!=null) {
    t = true;
  }
  else  {
    t = false;
    alert("Enter correct email : emailemail@mail.com");
  }
  console.log(c);
  console.log(t);
  console.log(s);
  return t;
}