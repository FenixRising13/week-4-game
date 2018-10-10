var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var btnNeed = 0;
var btnProcured = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {
  // Assigns btnNeed a value between 19-100
  var btnNeed = Math.floor(Math.random() * 120) + 19;
  // Assigns each button a value from the array "value"
  // ----------------Does not appear to be working properly-----------------
  btn1 = value[Math.floor(Math.random() * 10) + 1];
  btn2 = value[Math.floor(Math.random() * 10) + 1];
  btn3 = value[Math.floor(Math.random() * 10) + 1];
  btn4 = value[Math.floor(Math.random() * 10) + 1];
  // Changes HTML to show btnNeed (Random)
  $("#btnNeed").html(btnNeed);

  // Changes HTML to show btnProcured (0)
  $("#btnProcured").html(btnProcured);

  // Button 1 function to update Buttons and call score function
  $("#btn1").click(function() {
    btnNeed = btnNeed - btn1;
    btnProcured = btnProcured + btn1;
    $("#btnNeed").html(btnNeed);
    $("#btnProcured").html(btnProcured);
    score();
  });

  // Button 2 function to update Buttons and call score function
  $("#btn2").click(function() {
    btnNeed = btnNeed - btn2;
    btnProcured = btnProcured + btn2;
    $("#btnNeed").html(btnNeed);
    $("#btnProcured").html(btnProcured);
    score();
  });

  // Button 3 function to update Buttons and call score function
  $("#btn3").click(function() {
    btnNeed = btnNeed - btn3;
    btnProcured = btnProcured + btn3;
    $("#btnNeed").html(btnNeed);
    $("#btnProcured").html(btnProcured);
    score();
  });
  // Button 4 function to update Buttons and call score function
  $("#btn4").click(function() {
    btnNeed = btnNeed - btn4;
    btnProcured = btnProcured + btn4;
    $("#btnNeed").html(btnNeed);
    $("#btnProcured").html(btnProcured);
    score();
  });

  // Score Function
  // Sets Condition for btnNeed < 0
  function score() {
    if (btnNeed < 0) {
      alert("You're over budget");
      losses++;
      $("#losses").html("Losses: " + losses);
      reset();
    }
    // Sets Condition for btnNeed < 0
    else if (btnNeed === 0) {
      alert("You've won the war... this time");
      wins++;
      $("#wins").html("Wins: " + wins);
      reset();
    }
  }
  // End Score Function

  // Reset Function (called by Score Function)
  function reset() {
    btnNeed = Math.floor(Math.random() * 120) + 19;
    $("#btnNeed").html(btnNeed);
    btnProcured = 0;
    $("#btnProcured").html(btnProcured);
    btn1 = value[Math.floor(Math.random() * 10) + 1];
    btn2 = value[Math.floor(Math.random() * 10) + 1];
    btn3 = value[Math.floor(Math.random() * 10) + 1];
    btn4 = value[Math.floor(Math.random() * 10) + 1];
  }
});
