<template>
    <div>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
              
     <div class="row">
        <div class="col-md-2">
    <nav class="menuVertical" >
        <ul>
            <li><i class="fas fa-home"></i><a href="#">Início</a></li>
            <li><i class="fas fa-users"></i><a href="#">Escolas</a></li>
            <li><i class="far fa-user"></i><a href="#">Usuários</a></li>
            <li><i class="fas fa-graduation-cap"></i><a href="#contato">Diplomas</a></li>
        </ul>
    </nav>
</div>

        <div class="col-md-6 template"> <!-- inicio template -->
        <h1>Templates de diplomas cadastrados</h1>
        
        <div class="col-md-12"> <!--filtros e ordenar -->
            <div id="contentTop">
            <div id="filtros"><i class="fas fa-filter"></i>Filtros</div>
            <div id="traco"></div>
            <div id="ordenar"> Ordenar por</div>
            </div>
            </div> <!--fim filtros e ordenar -->
            
            </div> <!-- fim inicio template -->
             
            <div class="col-md-4 cadastrar"> <!-- inicio cadastrar -->
                Cadastrar
                </div><!-- fim cadastrar -->
        
        </div>
       
        </div>
            
       
        </div>
        </div>
</div>
</template>

<script>

</script>

<style scoped>
.menuVertical{
    height: 919px;
    width: 207px;
    padding-top: 20px;
    background-color: #F9F9F9;

}
ul{
    list-style: none;
}

ul li{
    margin: 40px 0px;
    width: 158px;
    height: 20px;
     font-family:'Manrope', sans-serif;

}
a{
    padding-left: 10px;
    color: #989898 ;
    text-decoration: none;
}
.template{
    margin-top: 40px;
    
}
.cadastrar{
    background-color: black;
    color: white;
    width: 120px;
    height: 50px;
    text-align: center;
    justify-content: center;
    padding-top: 10px;
    margin-left: 200px;
    border-radius: 15px;
    margin-top: 40px;
    float: right;
}

#filtros{

    float: left;
    margin-right: 20px;
    color: #989898;
}
#ordenar{
    float:left;
    color: #989898;
}
#traco{
    border: 0.1px solid #989898;;
    float: left;
    height: 25px;
    margin-right: 20px;
}
#borda{
    margin-top: 10px;
    border: 1px dashed rgb(180, 177, 177);
 
}
#contentTop{
    margin-top: 50px;
}

</style>