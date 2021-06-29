<template>
   <div id="app"> <!-- inicio div -->
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
<div class="wrapper"> <!--inicio wrapper -->
    <ejs-sidebar id="default-sidebar">
      <nav> <!--inicio nav -->
        <ul>
            <li v-for="(item, index) in items" :key="index"><a href="#"><i :class=" 'fas ' + item.link"></i>{{ item.label }}</a></li>
            
        </ul>
    </nav> <!-- fim nav -->
    </ejs-sidebar>
    <div>
    <div class="sub-title container-fluid"> <!-- inicio container -->
    <div class="row"> <!-- inicio row -->
        <div class="col-md-8 template"> <!--inicio template -->
                {{ msg }}
        </div><!--fim template -->
    <div class="col-md-4 "><!--inicio cadastro -->
        <div id="cadastrar"> Cadastrar</div>
    </div><!--fim cadastro -->
    </div><!--fim row -->
    </div> <!-- fim container -->
   
<div class="container-fluid"><!-- inicio container -->
  <div class="row"><!-- inicio row -->
        <div class="col-md-6"><!--filtros e ordenar -->
            <div id="contentTop"> 
            <div id="filtros"><i class="fas fa-filter"></i>Filtros</div>
            <div class="traco"></div>
            <div id="ordenar"> Ordenar por</div><br>
        </div> <!-- fim filtros e ordenar -->
  </div> <!-- fim row -->
  
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
      </div> <!-- fim data name att--> 
    </div> <!-- fim container --> 
 </div> 
 </div>
</div>
</div><!-- fim div -->
    

</template>
<script>
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(SidebarPlugin);
export default {
    components: {
        
    },
    data() {
        return{
            msg: 'Templates de diplomas cadastrados',
            items: [
                {
                    label: 'Início',
                    link: 'fa-home',
                },
                  {
                    label: 'Escolas',
                     link: 'fa-users',
                },
                  {
                    label: 'Usuário',
                    link: 'fa-user'
                },
                  {
                    label: 'Diplomas',
                    link: 'fa-graduation-cap'
                },
            ]
        }
    }

}; 
</script>
<style>

.sub-title {
    padding: 10px;

}
#default-sidebar {
    background-color: rgb(189, 190, 192);
    color: #ffffff;
    font-size: 14px;
    height: 919px ;
    padding-top: 20px;
    background-color: #F9F9F9 ;
    display: inline ;
    float: left;
    font-family: 'Roboto', sans-serif;
    position: static;  
    width: 200px !important; 
}



nav ul  {
    list-style-type: none;
    padding: 0;
    
}

nav i{
    padding-right: 10px;
}
nav ul li a   {
    color: rgb(10, 10, 10);
    padding: 20px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    margin-left: 10px;
    padding-left: 10px;
}



.template{
    display: inline;
    float: right;
    font-size: 28px;
    font-weight: bold;
    font-family: 'Rubik',sans-serif;
    
}
#cadastrar{
    background-color: black;
    color: white;
    width: 150px;
    height: 50px;
    border-radius: 15px;
    padding-top: 10px;
    margin-left: 180px;
    margin-top: 10px;
    text-align: center;
   }
#contentTop{
     margin-top: 30px;
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
.traco{
    border: 0.1px solid #989898;;
    float: left;
    height: 25px;
    margin-right: 20px;
}

.DataNameAtt{
    display: inline;
    justify-content: center;
    margin-left: 190px;
    
    
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
    margin-right: 2px;
    margin-top: 20px;
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