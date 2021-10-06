//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion

//Possible - Personality Traits
// 15 -21- You Need Help
// 10 - 15 - Good Soul
// 5- 10 - Meh 
// 5 - Are You Even Real


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';


        


        if (totalScore <= 13){  //ENFJ

            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ENFJ.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>압둘 알리</h1>
    
    
               <p>당신은 따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많습니다. 상당히 이타적이고 민첩하고 인화를 중요시하며 참을성이 많으며 다른 사람들의 생각이나 의견을 들을 줄 압니다.
    
               \n 
               오징어 게임 중 기훈을 살려주고 줄다리기까지 버텨내지만, /n 구슬치기에서 결국 상우의 배신으로 죽고 맙니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 15){  //ESFJ
 

            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ESFJ.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>지하철 역에서 만난 딱지치개</h1>
    
    
               <p>협력자로서 동료가 많고 친절하며 능동적인 구성원이다. 이야기 하기를 즐기며 정리정돈을 잘합니다. 그리고 능력과 권위를 즐길 줄 압니다.


               의문의 남자는 지하철 역에서 기훈에게 딱지치기를 제안합니다. 그리고 이길 때마다 뺨을 한대씩 치다 10만원을 건네줍니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;


        }else

        if (totalScore <= 18){  //ENTP
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ENTP.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>덕수</h1>
    
    
               <p>상대방에게 자주 농담, 또는 짓궂은 장난을 던집니다. 플러팅 멘트를 서슴없이 뱉지만, 정말 중요한 이 앞에서는 다소 수다가 줄어듭니다.

               조폭답게 오징어 게임에서 난동과 행패를 많이 부리다, 배신에 대한 인과응보를 당해 죽게 됩니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 21){  //ISFP
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ISFP.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>정수</h1>
    
    
               <p>당신은 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않습니다. 그리고 의견 충돌을 피하고, 인화를 중시합니다. 그리고 주변 파악을 잘 할 줄 압니다.

               정수는 유리업계에서 장기근무한 실력답게 징검다리 게임을 건너던 도중, 시간이 얼마 남지 않게 되어 상호에 의해 밀치기를 당하게 됩니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else


















        if (totalScore <= 23){  //ESFP
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ESFP.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>미녀</h1>
    
    
               <p>당신은 종종 즉각적인 즐거움에 심취해 정작 이들의 안락한 삶 영위를 가능케 하는 의무나 책임은 회피하고, 현재의 상황을 즐길 줄 압니다.

               미녀는 여러 게임들을 무난히 해왔지만, 배신을 잊지 못해 덕수를 끌어안고 아래로 떨어져 탈락하게 됩니다.

              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 25){  //ISFJ
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ISFJ.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>기훈</h1>
    
    
               <p> 당신은 실적을 다른 사람들이 알아차리게 하는 데 어려움을 느낍니다. 종종 자신이 이룬 성취를 과소평가하는 경향이 있으며 이러한 이유로 때로는 존경을 받기도 합니다.


               주인공 기훈은 오징어 게임에서 탈락하지 않고 살아남게 되어 우승 상금을 들고 집으로 돌아가게 됩니다.

              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 28){  //INFP
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/INFP.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>지영</h1>
    
    
               <p>당신은 최악의 상황이나 악한 사람에게서도 좋은 면만을 바라보며 더 나은 상황을 만들고자 노력하는 진정한 이상주의자입니다. 

               지영은 오징어 게임 속 새벽과 구슬치기를 하면서, 유일하게 자신의 말에 공감해주는 새벽을 위해 희생합니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 30){  //ENFP
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ENFP.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>사람이름</h1>
    
    
               <p>당신은 통찰력 있는 비전으로 호기심과 에너지 사이의 선을 명확히 구분할 줄 알며, 인생을 하나로 연결된 크고 복잡한 퍼즐로 보는 경향이 있습니다.


               당신은 동그라미입니다. 여러 가지 잡일을 도맏아 하며, 게임의 진행을 돕습니다. 다만, 사람을 죽이지는 않습니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else







 




        if (totalScore <= 33){  //ESTP
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ESTP.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>324번 참가자</h1>
    
    
               <p>당신은 사실적이고 관대하며 개방적이고 사람이나 사물에 대한 선입견이 별로 없으며 모험을 즐깁니다.

               오징어 게임 속, 술래에게 들켜 첫 번째 게임에서 탈락해 첫 번째 탈락자가 됩니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 35){  //ISTP
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ISTP.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>병기</h1>
    
    
               <p>당신은 상황을 파악하는 민감성과 도구를 다루는 뛰어난 능력이 있습니다. 말이 없으며, 객관적이고 합리적으로 인생을 관찰합니다.

               병기는 의사 경력을 살려 다른 참가자들이 잠을 자는 시간에 비밀의 방에서 탈락자에게서 장기를 빼내고 그 대가로 진행 측에게서 다음 게임에 대한 힌트와 음식을 받는 거래를 하다 놀이터에서 프론트먄에게 발각되어 탈락된다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 38){  //INFJ
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/INFJ.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>새벽</h1>
    
    
               <p>
               당신은 인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구합니다. 창의력이 좋으며, 성숙한 경우엔 강한 직관력으로 타인에게 말없이 영향력을 끼칩니다.
               
               
               새벽은 탈북 새터민으로 소매치기를 하다 오징어게임에 참가해 여러 정보들을 알아내 게임을 예측해나간다. 그리고 마지막 결국 상호에 의해 탈락된다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 40){  //ISTJ
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ISTJ.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>세모</h1>
    
    
               <p>당신은 집중력이 강한 현실 감각을 지녔으며 조직적이고 침착하며, 자신과 타인의 감정과 기분을 이해하는 능력이 부족합니다.
               오징어 게임의 관리자로 탈락자들을 가차없이 처리합니다. 항상 무기를 지니고 있으며 게임 내 질서를 관리합니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

















        if (totalScore <= 43){  //INTP
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/INTP.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>일남 할아버지</h1>
    
    
               <p>당신은 조용하고 과묵하며 논리와 분석으로 문제를 해결하기 좋아합니다. 먼저 대화를 시작하지 않는 편이나 관심이 있는 분야에 대해서는 말을 많이 합니다.

               오징어게임의 최종보스로, 모든 것은 일남 할아버지의 계획대로였습니다. 그는 남은 삶을 즐기기 위해 참가했습니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        if (totalScore <= 46){  //ESTJ
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/ESTJ.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>상우</h1>
    
    
               <p>당신은 현실적, 구체적이고 사실적이며 활동을 조직화하고 주도해 나가는 지도력이 있습니다. 그리고 실질적이고 현실 감각이 뛰어나며 일을 조직하고 계획하여 추진시킵니다.
               서울대 출신으로 주식선물을 하다 큰 빚을 져 게임에 참가하게 되었습니다. 그리고 마지막 오징어 게임에서 그는 기훈을 위해 스스로 탈락합니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else




        if (totalScore <= 49){  //ENTJ
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">

            </br>
    
            <img src="squidgame/ENTJ.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>FRONTMEN</h1>
    
    
               <p> 당신은 단호하고 지도력과 통솔력이 있습니다.일 처리에 있어 사전 준비를 철저히 하며 논리, 분석적으로 계획하고 조직하여 체계적으로 추진해 나가는 유형입니다.
               오징어 게임의 총관리자, 실질적 리더로 오징어 게임의 질서를 주도합니다. 그는 호스트를 도와 오징어 게임을 관리합니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else 

        if (totalScore >= 53){  //INTJ
 
            result.innerHTML =
            `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
            <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
            <div class="summary">
            </br>
    
            <img src="squidgame/INTJ.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
               <h1>네모</h1>
    
    
               <p>당신은 체스를 두는 듯한 정확하고 계산된 움직임과 풍부한 지식을 소유하고 있으며, 완벽함을 추구하고자 하거나 도덕적 잣대에 따라 철저히 계획을 세우는 시간을 가지기도 합니다. 
               네모는 오징어 게임에서 모니터링, 오리엔테이션을 담당합니다. 그리고 게임을 안내합니다.
              </p>
    
    
           </div>
           <a style="font-family: bm11;">#오겜테스트 를 </br></br>태그해 올려보세요!</a>
           </br>
           <button class="restart" onclick="share()">결과 공유하기</button>
           <button class="restart">다시하기</button>`;
        } else

        notice.innerHTML =
        `<h1 class="final-score" style="font-family: bm11; font-size:38px">오징어게임 속 나는?</h1>
        <a style="font-family: bm11; font-size:19px">#오겜테스트 #스퀴드겜테스트 </a>
        <div class="summary">
        </br>

        <img src="squidgame/squidgamez.jpg" style="width: 200px; height: 200px; margin-left: auto; margin-right: auto;">
           <h1>네모</h1>
 


       </div>
  `;





 
 


    }
    generateQuestions(currentQuestion);
}


function share(url, text) {
    window.open("https://twitter.com/intent/tweet?text=" + "오징어게임 속 내 인물은 누구일까? #오겜테스트 #스퀴드겜테스트" + "&url=" + "http://오징어게임.site");
}



//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);


