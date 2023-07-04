<script>

    import { trocarEstadoDoJogo } from "./estado.js";
    
</script>

<main>
<body>
    

   <h1>Jogo da Forca</h1>

    <div class="menu">
        <button on:click={()=> trocarEstadoDoJogo ('jogar')}>Jogar</button>
        <button on:click={()=> trocarEstadoDoJogo ('comojogar')}>Como Jogar?</button>
        <button on:click={()=> trocarEstadoDoJogo ('sobre')}>Sobre</button>
    </div>

</body>
</main>

<style>

    body{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .menu{
        background-color: darkgray;
        width: 300px;
        height: 400px;
        border-radius: 15px;
        border-style: double;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1{
        font-size: 60px;
    }

    button{
        background-color: darkcyan;
        height: 70px;
        width: 220px;
        margin-top: 15px;
        border-radius: 15px;
        border-color: white;
        border-style: groove;
        font-size: 20px;
        font-style: oblique;
    }

    .menu :hover{
        background-color: blueviolet;
    }

</style>