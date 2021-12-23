var pergunta = document.querySelector('#pergunta')
var resposta = document.querySelector('#resposta')
const frase = 'Eu adivinhei, viu? Seu número é '
const refresh = ' <input type="button" value="recomeçar" id="refresh" onclick="window.location.reload()" class="btn">'


    function iniciar() {
        pergunta.innerHTML = `<p>Seu numero é <strong>maior</strong> ou <strong>igual</strong> á 5?</p>
        <input type="button" value="Sim" id="sim" onclick="btnSim()" class="btn">
        <input type="button" value="Não" id="nao" onclick="btnNao()" class="btn">`
            }
            function btnSim() {
                pergunta.innerHTML = `<p>Seu numero é maior que 7?</p>
                <input type="button" value="Sim" id="sim" onclick="maiorQue7()" class="btn">
        <input type="button" value="Não" id="nao" onclick="menorQue7()" class="btn">`
            }
            
                function menorQue7() {
                    pergunta.innerHTML = `<p>Seu numero é o 7?</p>
                <input type="button" value="Sim" id="sim" onclick="sete()" class="btn">
        <input type="button" value="Não" id="nao" onclick="menorQue6()" class="btn">`
                }

                        function menorQue6() {
                            pergunta.innerHTML = `<p>Seu numero é menor que 6?</p>
                            <input type="button" value="Sim" id="sim" onclick="cinco()" class="btn">
                    <input type="button" value="Não" id="nao" onclick="seis()" class="btn">`  
                        }


                function maiorQue7() {
                    pergunta.innerHTML = `<p>Seu numero é o 9?</p>
            <input type="button" value="Sim" id="sim" onclick="nove()" class="btn"> <input type="button" value="Não" id="nao" onclick="oito()" class="btn">`
                }

            function btnNao() {
                pergunta.innerHTML = `<p>Seu numero é menor que 3?</p> <input type="button" value="Sim" id="sim" onclick="menorQue3()" class="btn">
                <input type="button" value="Não" id="nao" onclick="maiorQue3()" class="btn">`
            }
                    function menorQue3() {
                        pergunta.innerHTML = `<p>Seu numero é o 1?</p> <input type="button" value="Sim" id="sim" onclick="um()" class="btn">
                        <input type="button" value="Não" id="nao" onclick="dois()" class="btn">`
                    }

                    function maiorQue3() { 
                        pergunta.innerHTML = `<p>Seu numero é maior que 4?</p> <input type="button" value="Sim" id="sim" onclick="cinco()" class="btn">
                        <input type="button" value="Não" id="nao" onclick="menorQue5()" class="btn">`
                    }
                    function menorQue5() {
                        pergunta.innerHTML = `<p>Seu numero é o 4?</p> <input type="button" value="Sim" id="sim" onclick="quatro()" class="btn">
                        <input type="button" value="Não" id="nao" onclick="tres()" class="btn">`
                    }

                        function um() {
                            pergunta.innerHTML = `<p>${frase}1!</p> ${refresh}`
                        }
                        function dois() {
                            pergunta.innerHTML = `<p>${frase}2!</p> ${refresh}`
                        }
                        function tres() {
                            pergunta.innerHTML = `<p>${frase}3!</p> ${refresh}`
                        }
                        function quatro() {
                            pergunta.innerHTML = `<p>${frase}4!</p> ${refresh}`
                        }
                        function cinco() {
                            pergunta.innerHTML = `<p>${frase}5!</p> ${refresh}`
                        }
                        function seis() {
                            pergunta.innerHTML = `<p>${frase}6!</p> ${refresh}`
                        }
                        function sete() {
                            pergunta.innerHTML = `<p>${frase}7!</p> ${refresh}`
                        }
                        function oito() {
                            pergunta.innerHTML = `<p>${frase}8!</p> ${refresh}`
                        }
                        function nove() {
                            pergunta.innerHTML = `<p>${frase}9!</p> ${refresh}`
                        }