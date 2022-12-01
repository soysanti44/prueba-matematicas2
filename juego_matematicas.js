player1_name =localStorage.getItem("player1");
player2_name =localStorage.getItem("player2");

player1_score =0;
player2_score =0;

document.getElementById("player_name").innerHTML = player1_name;
document.getElementById("player_name2").innerHTML = player2_name;

document.getElementById("score").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "turno para preguntar "+ player1_name;
document.getElementById("player_anser").innerHTML ="turno para responder "+ player2_name;

question_turn ="player1";
answer_turn ="player2";

function check() {
  get_answer =document.getElementById("input_check_box").value;
  answer =get_answer.toLowerCase();
  console.log("repuesta "+answer)
  if ( word == answer ) {
     if (answer_turn =="player1") {
        player1_score = player1_score + 1;
        document.getElementById("score").innerHTML =player1_score;
     }else {
        player2_score = player2_score + 1;
        document.getElementById("score2").innerHTML =player2_score;
     }
  }
  if (question_turn == "player1") {
     question_turn ="player2";
     document.getElementById("player_question").innerHTML ="turno para preguntar -"+ player2_name;
  }else {
     question_turn ="player1";
     document.getElementById("player_question").innerHTML ="turno para preguntar -"+ player1_name;
  }
  if (answer_turn == "player1") {
     answer_turn ="player2"
     document.getElementById("player_anser").innerHTML ="turno para responder -"+ player2_name;
  }else {
   answer_turn="player1";
   document.getElementById("player_anser").innerHTML ="turno para responder -"+ player1_name;
  }
  document.getElementById("output").innerHTML ="";
}