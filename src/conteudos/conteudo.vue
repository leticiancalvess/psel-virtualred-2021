<template>
    <div>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
              
     <div class="row"> <!-- inicio row -->
        <div class="col-md-2"> <!-- inicio menu-vertical -->
    <nav class="menuVertical" >
        <ul>
            <li><i class="fas fa-home"></i><a href="#">Início</a></li>
            <li><i class="fas fa-users"></i><a href="#">Escolas</a></li>
            <li><i class="far fa-user"></i><a href="#">Usuários</a></li>
            <li><i class="fas fa-graduation-cap"></i><a href="#contato">Diplomas</a></li>
        </ul>
    </nav>
</div>  <!-- fim menu-vertical -->

        <div class="col-md-5 template"> <!-- inicio template -->
        Templates de diplomas cadastrados
        
        
        <div class="col-md-6"><!--filtros e ordenar -->
            <div id="contentTop"> 
            <div id="filtros"><i class="fas fa-filter"></i>Filtros</div>
            <div id="traco"></div>
            <div id="ordenar"> Ordenar por</div>
            </div>
             </div> <!--fim filtros e ordenar -->
            
          
            
            </div> <!-- fim inicio template -->
             
            <div class="col-md-5 d"> <!-- inicio cadastrar -->
               <div id="cadastrar"> Cadastrar </div>
                <div class="col-md-4 DataNameAtt"> <!-- inicio data name att -->
                <div id="data">
                    Data
                </div>
                <div id="nome">
                    Nome
                </div>
                <div id="att">
                    Atualização
                </div>
            </div> <!-- fim data name att -->
                </div><!-- fim cadastrar -->
        
        </div> <!-- fim row -->
       
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
    font-size: 28px;
    font-weight: bold;
    font-family: 'Rubik',sans-serif;
    
}
#cadastrar{
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
    
}

#filtros{

    float: left;
    margin-right: 20px;
    color: #989898;
    font-size: 17px;
}
#ordenar{
    float:left;
    color: #989898;
    font-size: 17px;
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


.DataNameAtt{
    margin-top: 60px;
    display: inline-block;
    width: 400px
   
    
}
#data, #nome, #att{
    float: left;
    padding-right: 10px;
    font-family: 'Roboto';
    font-size: 14px;
    width: 100px;
    text-align: center;
    color: white;
    height: 40px;
    padding-top: 10px;
   margin-left: 2px;
}
#data{
    background-color: black;
     border-radius: 10px 0 0 10px;
    
}
#nome{
    border-radius: none;
}
#att{
    border-radius: 0 10px 10px 0;
}
#nome, #att{
    background-color: #B28DD6;

}
</style>