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
        <div class="col-md-10">
        <div class="col-md-6 template"> <!-- inicio template -->
        Templates de diplomas cadastrados
        <div class="col-md-12"><!--filtros e ordenar -->
            <div id="contentTop"> 
            <div id="filtros"><i class="fas fa-filter"></i>Filtros</div>
            <div id="traco"></div>
            <div id="ordenar"> Ordenar por</div>
            <br>
            </div>
               </div>
             
        </div> <!-- fim filtros e ordenar -->

            <div class="col-md-5 cadastrar"> <!-- inicio cadastrar -->
               Cadastrar 
                <div class="col-md-10 DataNameAtt"> <!-- inicio data name att -->
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

                 <div class="col-md-10 diploma"> <!-- inicio diploma -->
                <div id="titulo">
                Título do diploma a ser usado como template
                </div> 
                <div id="escola">
                Escola que usa esse diploma
                </div> 
                <div id="curso">
                Curso que usa esse diploma
                </div> 
                <div id="numero">
                Nº de usuários associados
                </div> 
                <div id="balls">
                <div id="ball1"></div>
            <div id="ball2"></div>
            </div>
            </div>
            
         </div>
        
     
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
.cadastrar{
    background-color: black;
    color: white;
    width: 120px;
    height: 50px;
    text-align: center;
    justify-content: center;
    padding-top: 10px;
    border-radius: 15px;
    margin-top: -150px;
    margin-left: 750px;

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
.diploma{
    font-size: 16px;
    margin-top:150px;
    width: 98%;
    height: 80px;
    display: inline-block;
    justify-content: center;
    text-align: center;
    padding-top: 25px;
    background-color: #F9F9F9;
    border-radius: 10px;
    box-shadow:  0 5px 6px -6px black;
    
    
}
#titulo, #escola, #curso, #numero{
    float: left;
    margin-right: 25px;
    height: 20px;
}
#titulo{
    font-size: 16px;
    font-family: 'Robot', sans-serif;
    font-weight: bold;
}
#escola, #curso, #numero{
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
</style>