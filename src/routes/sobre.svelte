<script>
    import { trocarEstadoDoJogo } from "./estado.js";
</script>

<main>
<body>
    <h2>Gean de Lima Ribeiro</h2>
    <h3>Funções</h3>
    <li>Contribuição no desenvolvivmento geral do projeto</li>
    <li>Contribuição na parte visual do projeto</li>
    <li>Desenvolvimento das principais funcionalidades do jogo</li>
    <h3>Contato</h3>
    <li><a href="http://github.com/foccuns169">Github</a></li>
    <div class="Cmj">
        <button on:click={() => trocarEstadoDoJogo('menu')}>Voltar</button>
    </div>
</body>
</main>

<style>
 a{
    color: white;
 }

 .Cmj{
        margin-left: 1200px;
        margin-top: 20%;
 }

 button{
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

    .Cmj :hover{
        background-color: blueviolet;
    }
</style>