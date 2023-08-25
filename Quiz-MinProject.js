var pos=0,board,status,ques,choice,A,B,C,correct=0;
var questions=[
    ["ShortCut For the Saving?","Ctrl+S","Ctrl+D","Ctrl+E","A"],
    ["10+10=?","100","20","0","B"],
    ["Capital Of India","Jammu","Punjab","New Delhi","C"],
    ["10*10=?","100","10000","1","A"],
];
function displayquestion(){
    board=document.getElementById("board");
    console.log(board);
    if(pos>=questions.length)
    {
      board.innerHTML="You Got "+correct+" of "+questions.length;
      document.getElementById("status").innerHTML="Quiz Completed</h2>";
      pos=0;
      correct=0;
      return false;
    }
    document.getElementById("status").innerHTML="<h6 style='text-align:center;'>Question "+(pos+1)+" of "+questions.length+"</h6>";
    ques=questions[pos][0];
    A=questions[pos][1];
    B=questions[pos][2];
    C=questions[pos][3];
    board.innerHTML="<h1 style='text-align:center;'>"+ques+"</h1>";
    board.innerHTML+="<h4 style='text-align:center;'><label><input type='radio' name='choices' value='A'>"+A+"</label></h4>";
    board.innerHTML+="<h4 style='text-align:center;'><label><input type='radio' name='choices' value='B'>"+B+"</label></h4>";
    board.innerHTML+="<h4 style='text-align:center;'><label><input type='radio' name='choices' value='C'>"+C+"</label></h4>";
    board.innerHTML+="<h4 style='text-align:center; bgcolor:green'><button onclick='call()'>Submit</h4></button>";
}
function call()
{
    let choices;
    choices=document.getElementsByName("choices");
    for(let i=0;i<choices.length;i++)
    {
    if(choices[i].checked)
    {
        choice=choices[i].value;
    }
}
    if(choice==questions[pos][4])
    {
        correct++;
    }
    pos++; 
    displayquestion();
}