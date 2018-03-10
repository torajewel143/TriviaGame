var timeleft = 15;
            var downloadTimer = setInterval(function(){
                timeleft--;
                document.getElementById("time").textContent = timeleft;
                if(timeleft <= 0)
                {
                    var amountCorrect = 0; 
                    var amountWrong = 0;
                    var notfound =5;       
                    var ans=null;
                    var wrong=0;         
                    for(var i = 1; i <= 5; i++) {
                        var radios = document.getElementsByName('answer-'+i);
                        for(var j = 0; j < radios.length; j++) {
                            var radio = radios[j];
                            if(radio.value == "correct" && radio.checked) {
                                ans =++amountCorrect;
                            }
                             if(radio.value == "wrong" && radio.checked) {
                                wrong =++amountWrong;
                            }
                        }
                    }                   
                    document.getElementById("correct-answers").textContent =  ans;
                 
                    document.getElementById("wrong-answers").textContent =  wrong;

                    document.getElementById("no-answers").textContent =  notfound-(wrong+ans);

                    clearInterval(downloadTimer);

                    document.getElementById("quiz-form").style.display = "none";
                    document.getElementById("result").style.display = "block";
                }


            },1000);