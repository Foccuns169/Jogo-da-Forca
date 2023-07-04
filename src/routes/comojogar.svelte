<script>
    import { trocarEstadoDoJogo } from "./estado.js";

</script>

<main>
<body>
  
    <h1>Como Jogar?</h1>
    <p>
        O jogo consiste em adivinhar qual é a palavra misteriosa fornecida, chutando quais letras pertencem a ela. Para isso, você terá 6 pontos de vida. Ao completar uma palavra.
    </p>

    <p><li>Os 6 pontos de vida representam as partes do bonequinho da forca: Cabeça,braços,pernas e tronco.</li></p>
    <ul><li><p>O caractere espaço é representado por "-"</p></li></ul>
    <ul><li><p>Utilize palavras sem acento.</p></li></ul>
    <div class="Cmj">
    <button on:click={() => trocarEstadoDoJogo('menu')}>Voltar</button>
    </div>
</body>
</main>

<style>
    body{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    h1{
        font-size: 60px;
    }

    p{
        font-size: 20px;
    }

    button{
        background-color: darkcyan;
        height: 70px;
        width: 120px;
        margin-top: 15px;
        border-radius: 15px;
        border-color: white;
        border-style: groove;
        font-size: 20px;
        font-style: oblique;
    }

    .Cmj :hover{
        background-color: blueviolet;
    }

</style>