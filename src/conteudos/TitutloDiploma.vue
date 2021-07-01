<template>
      <div class="col-md-10 linha">
      <div class="underTheLine">
        Diplomas
      </div>
      <div class="col-md-12 diploma"> <!-- inicio diploma -->
        <div id="titulo">
        Título do diploma a ser usado como template
        </div> 
        <div v-for="(texto, index) in textos" :key="index" id="escola">
        {{ texto.frase }}
        </div> 
        
        <div id="ball1"></div>
        <div id="ball2"></div>
        
    </div> <!-- fim diploma -->
    </div>

</template>
<script>
export default {
    data(){
        return{
            textos: 
            [
                {
                frase: 'Escola que usa esse diploma',
            },
            {
                frase: 'Curso que usa esse diploma'
            },
            {
                frase: 'Nº de usuários associados'
            }
            ]
        }
    }
}
</script>
<style scoped>

.linha{
    margin-top: 30px;
    border-top: 1px dashed rgb(180, 177, 177);
    position: relative;
    width: 100%;
}
.underTheLine{
    position: absolute;
    background-color: black;
    border-radius: 30px;
    text-align: center;
    margin-top: -10px;
    color: white;
    width: 90px;
    margin-left: 10px;
    text-transform: uppercase;
}

.diploma{
    margin-top:50px;
    margin-left: 10px;
    height: 80px;
    display: inline-block;
    padding-top: 25px;
    background-color: #F9F9F9;
    border-radius: 10px;
    box-shadow:  0 5px 6px -6px black;
    width: 98%;
}
#titulo, #escola{
    float: left;
    margin-right: 25px;
    height: 20px;
    padding-left: 10px;
}
#titulo{
    font-size: 16px;
    font-family: 'Robot', sans-serif;
    font-weight: bold;
}
#escola{
    font-size: 14px;
    font-family: 'Robot', sans-serif;
    color: #B28DD6;
}
#ball1, #ball2{
    float:left;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: -10px;
}
#ball1{
    background-color: #FFC700;
}
#ball2{
    background-color: #DB2323;
}




@media only screen and (min-width: 500px){
.linha, .underTheLine, .diploma{
    float: left;
}
.diploma{
   height: 220px !important;
   clear: both;
   padding-top: 5px;

}
#titulo {
    font-size: 14px;
}

#titulo, #escola{
    margin-top: 20px;
}
#ball1, #ball2{
    margin-top: 10px;
}

}
@media (min-width: 769px ) and (max-width: 1306px){
    
.diploma{
   height: 140px !important;
   flex-direction: column !important;
}

}

@media (min-width: 1306px ){
    .diploma{
        height: 90px !important;
    }
}


</style>
