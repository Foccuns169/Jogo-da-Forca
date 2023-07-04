<script>
    import { onMount } from 'svelte';
  
    import { trocarEstadoDoJogo } from "./estado.js";
  
    const temas = [
      { nome: 'Nomes de animais', palavras: ['Leao', 'Gato', 'Cachorro', 'Elefante', 'Tigre', 'Girafa', 'Macaco', 'Zebra', 'Cavalo', 'Passaro'] },
      { nome: 'Comidas', palavras: ['Pizza', 'Hamburguer', 'Sushi', 'Salada', 'Chocolate', 'Batata', 'Pao', 'Lasanha', 'Coxinha', 'Sorvete'] },
      { nome: 'Objetos', palavras: ['Carro', 'Casa', 'Computador', 'Telefone', 'Livro', 'Mesa', 'Cadeira', 'Bicicleta', 'Relógio', 'Televisao'] },
      { nome: 'Lugares', palavras: ['Paris', 'Nova-York', 'Taquio', 'Londres', 'Rio-de-Janeiro', 'Berlim', 'Sydney', 'Barcelona', 'Moscou', 'Cairo'] }
    ];
  
    let tema = '';
    let palavra = '';
    let vidas = 6;
    // @ts-ignore
    let palavraAtual = [];
  
    function escolherTema() {
      const temaIndex = Math.floor(Math.random() * temas.length);
      const temaSelecionado = temas[temaIndex];
      tema = temaSelecionado.nome;
      palavra = escolherPalavra(temaSelecionado.palavras);
      return temaSelecionado.palavras;
    }
  
    // @ts-ignore
    function escolherPalavra(tema) {
      return tema[Math.floor(Math.random() * tema.length)].toUpperCase();
    }
  
    function iniciarJogo() {
      const temaElement = document.querySelector('.identificadores h2:first-of-type p');
      const vidaElement = document.querySelector('.identificadores h2:last-of-type p');
      const palavraElement = document.querySelector('.plvr');
      const desistirButton = document.querySelector('.Cmj button:first-of-type');
      const reiniciarButton = document.querySelector('.Cmj button:last-of-type');
  
      // @ts-ignore
      function adivinharLetra(letra) {
        letra = letra.toUpperCase();
        let letraEncontrada = false;
  
        for (let i = 0; i < palavra.length; i++) {
          if (palavra[i] === letra) {
            palavraAtual[i] = letra;
            letraEncontrada = true;
          }
        }
  
        if (!letraEncontrada) {
          vidas--;
          // @ts-ignore
          vidaElement.textContent = vidas;
        }
  
        // @ts-ignore
        palavraElement.textContent = palavraAtual.join(' ');
  
        if (vidas === 0) {
          alert('Você perdeu! Tente novamente.');
          reiniciarJogo();
        // @ts-ignore
        } else if (!palavraAtual.includes('_')) {
          alert('Parabéns! Você venceu!');
          reiniciarJogo();
        }
      }
  
      function reiniciarJogo() {
        tema = '';
        palavra = '';
        vidas = 6;
        palavraAtual = [];
  
        // @ts-ignore
        temaElement.textContent = '';
        // @ts-ignore
        vidaElement.textContent = '';
        // @ts-ignore
        palavraElement.textContent = '';
  
        // @ts-ignore
        desistirButton.removeEventListener('click', reiniciarJogo);
        // @ts-ignore
        reiniciarButton.removeEventListener('click', reiniciarJogo);
        document.removeEventListener('keydown', keydownListener);
  
        iniciarJogo();
      }
  
      // @ts-ignore
      const temaSelecionado = escolherTema();
      palavraAtual = Array(palavra.length).fill('_');
  
      // @ts-ignore
      temaElement.textContent = tema;
      // @ts-ignore
      vidaElement.textContent = vidas;
      // @ts-ignore
      palavraElement.textContent = palavraAtual.join(' ');
  
      // @ts-ignore
      const keydownListener = (event) => {
        const letra = event.key.toUpperCase();
        if (/^[A-Z]$/.test(letra)) {
          adivinharLetra(letra);
        }
      };
  
      // @ts-ignore
      desistirButton.addEventListener('click', reiniciarJogo);
      // @ts-ignore
      reiniciarButton.addEventListener('click', reiniciarJogo);
      document.addEventListener('keydown', keydownListener);
    }
  
    onMount(() => {
      iniciarJogo();
    });
  </script>
  
  <main>
    <body>
        <div class="pag">
        <div class="identificadores">
            <h2>Tema: <p></p></h2>
            <h2>Vida: <p></p></h2>
        </div>
        <div class="Palavra">
            <!-- svelte-ignore a11y-missing-content -->
            <h1 class="plvr"></h1>
        </div>
        </div>
    </body>
        <div class="Cmj">
        <button on:click={() => trocarEstadoDoJogo('menu')}>Desistir</button>
        <button>Reiniciar</button>
        </div>
   
  </main>
  
  <style>
    /* Estilos aqui */
  
    body {
      align-items: center;
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
  
    .identificadores {
      margin-top: -5%;
      margin-left: -20%;
      width: 350px;
    }
  
    .pag {
      margin-top: 50px;
      width: 900px;
      height: 450px;
      border-style: double;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  
    .Palavra {
      margin-top: 30%;
      background-color: yellow;
      width: 500px;
      height: 125px;
      margin-left: -20%;
      border-radius: 12px;
      border-style: groove;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  
    p {
      color: yellow;
    }
  
    .plvr {
      color: blueviolet;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      font-style: oblique;
      font-size: xx-large;
    }
  
    button {
      background-color: darkcyan;
      height: 50px;
      width: 120px;
      margin-top: 15px;
      border-radius: 15px;
      border-color: white;
      border-style: groove;
      font-size: 20px;
      font-style: oblique;
    }
  
    .Cmj :hover {
      background-color: blueviolet;
    }
  </style>
  