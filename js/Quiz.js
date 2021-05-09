class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
  play(){
    question.hide();
    
    background(228, 71, 250);

    stroke(255);
    strokeWeight(4);
    fill(227, 44, 252);
    textSize(35);
    text("𝕽𝖊𝖘𝖚𝖑𝖙 𝖔𝖋 𝖙𝖍𝖊 𝕼𝖚𝖎𝖟", 280, 50);
 
    Contestant.getPlayerInfo();

    if (allContestants !== undefined){
      var display_Answers = 220;

      fill(117, 0, 106);
      stroke(255);
      strokeWeight(2);
      textSize(21);
      text("Note : 𝐂𝐨𝐧𝐭𝐞𝐬𝐭𝐚𝐧𝐭𝐬 𝐰𝐡𝐨 𝐚𝐧𝐬𝐰𝐞𝐫𝐞𝐝 𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐚𝐫𝐞 𝐡𝐢𝐠𝐡𝐥𝐢𝐭𝐞𝐝 𝐢𝐧 𝓖𝓻𝓮𝓮𝓷 𝐜𝐨𝐥𝐨𝐮𝐫 !!", 110, 213)
      fill(0, 255, 0);
      text("𝓖𝓻𝓮𝓮𝓷", 683, 213);

    for(var plr in allContestants){
      var correct_Answer = "2";
      if (correct_Answer === allContestants[plr].answer)
        fill(29, 153, 63);
      else 
         fill(255, 0, 0);
      
      display_Answers += 30;

      textFont("Showcard Gothic");
      strokeWeight(1);
      textSize(28);  
      text(allContestants[plr].name + " : " + allContestants[plr].answer, 220, display_Answers);
    }
   } 
  }
}