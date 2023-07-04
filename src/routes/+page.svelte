<script>
import Menu from  "./menu.svelte";
import Jogar from "./jogar.svelte";
import Sobre from "./sobre.svelte";
import Comojogar from "./comojogar.svelte";
import {estado} from "./estado";
</script>

<main>
<body>
        {#if $estado === 'menu'}
            
            <Menu/>
        
        {:else if $estado === 'jogar'}
        
            <Jogar/>
        
        {:else if $estado === 'comojogar'}
            
            <Comojogar/>
        
        {:else if $estado === 'sobre'}
            
            <Sobre/>
        
        {/if}
    
</body>
</main>

<style>
    
    body{
        background-color: darkslategray;
        color: white;
    }

</style>