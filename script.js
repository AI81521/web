var num_;
var meaning = [];
var word = [];
var visit_ = [];
var wrong_answer = [];
var c;
var random_;
var answer_;
var co;
var flag;
function reset()
{
  if (document.getElementById("control").value==='start')
  {
    var in_ = prompt("단어의 개수를 입력해주세요.");
    num_ = Number(in_);
    for (var i = 1; i <= num_; i++)
    {
      word[i] = prompt(i+"번째 단어를 입력해주세요.");
      meaning[i] = prompt(i+"번째 단어의 뜻을 입력해주세요.");
    }
    flag=1;
  }
}
function active()
{
  if (flag===1)
  {
    c=0;
    co=0;
    for (i=1; i<=num_;i++)
    {
      visit_[i]=0;
      wrong_answer[i]=0;
    }
    document.getElementById("output").innerHTML = '';
    document.getElementById("c").innerHTML = '';
    document.getElementById("wrong").innerHTML = '';
    random_ = Math.floor(Math.random()*(num_))+1;
    visit_[random_]=1;
    document.getElementById("question").innerHTML = word[random_]+"의 뜻은?";
    document.getElementById("control").value = 'check';

  }
  else alert('설정을 먼저하세요!');
}
function next()
{
  while (true)
  {
    random_ = Math.floor(Math.random()*(num_))+1;
    if (visit_[random_]===1);
    else break;
  }
  visit_[random_]=1;
  document.getElementById("question").innerHTML = word[random_]+"의 뜻은?";
}
function check()
{
  answer_ = document.getElementById("answer").value;
  if (answer_===meaning[random_])
  {
    document.getElementById("output").innerHTML = 'correct';
    c++;
  }
  else
  {
    document.getElementById("output").innerHTML = 'incorrect, 답은:'+meaning[random_];
    wrong_answer[random_]=1;
  }
  co++;
  if (co===num_) document.getElementById("control").value='confirm';
  else document.getElementById("control").value='next';
}
function end()
{
  var wrong_='';
  document.getElementById("c").innerHTML = c+'/'+num_;
  for (i = 1; i <=num_ ; i++)
  {
    if (wrong_answer[i]===1)
    {
        wrong_ = wrong_+word[i]+'의 뜻 : '+meaning[i]+'<br>';
    }
  }
  document.getElementById("wrong").innerHTML = wrong_;
  document.getElementById("control").value = 'start';
}
