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
    <div class="col-md-4 "><!--inicio salvar -->
        <div id="save"> Salvar</div>
    </div><!--fim salvar -->
    </div><!--fim row -->
    </div> <!-- fim container -->
    
   
    <div class="container-fluid"><!-- inicio container -->
  <div class="row"><!-- inicio row -->
<div class="col-md-3"><!--subir imagem -->
 <button id="select-image"><input type="file" id="imageInput" accept = "image/*"> Subir Imagem <i class="fas fa-images iconPostImage"></i> </button>
  <div class="featurePostImage"></div>
  </div><!-- fim subir imagem -->

  <div class="col-md-3 shapes"><!--formas -->
        Formas:
  <i class="fas fa-star icon"></i>
  <div class="feature"></div>
  </div><!--fim formas -->

  <div class="col-md-3 fields"><!--campos -->
        Campos: 
  <i class="fas fa-text-height icon"></i>
  <i class="fas fa-images icon"></i>
  <div class="feature"></div>
  </div><!-- fimcampos -->

     <div class="col-md-3 editing"> <!-- frente e verso -->
     <div id="edit">
        Editando:
     </div>
    
     <div id="front">
         Frente
     </div>
     <div id="verse">
         Verso
        </div>
         
      </div><!-- fim frente e verso -->
    </div> <!-- fim row -->
 </div> <!-- fim container -->
    <div class="col-md-10 linha"> <!-- inicio linha -->
      <div class="underTheLine">
        Diplomas
      </div>
      </div> <!-- fim linha -->
 <canvas id= "myCanvas" ></canvas>
</div>
</div>
</div>


</template>

<script>
import Vue from 'vue';
import { SidebarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(SidebarPlugin);
export default {
  data() {
        return{
            msg: 'Cadastrar novo template',
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
    },
     mounted() {
       document.getElementById('select-image') //função para abrir a caixa de upload
        .onclick = function () {
            document.getElementById('imageInput').click()
        }
        let imgInput = document.getElementById('imageInput');
        imgInput.addEventListener('change', function(e) {
    if(e.target.files) {
      let imageFile = e.target.files[0]; 
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
        var myImage = new Image(); //image object
        myImage.src = e.target.result; 
    myImage.onload = function(ev) {
        var myCanvas = document.getElementById("myCanvas"); // canvas object
        var myContext = myCanvas.getContext("2d"); // armazena o contexto 
        myCanvas.width = myImage.width; 
        myCanvas.height = myImage.height; 
        myContext.drawImage(myImage,0,0); //desenha a imagem
        }
      }
    }
  });
    }
}


</script>

<style scoped>


.sub-title {
    padding: 10px;
}
#default-sidebar {
    background-color: rgb(189, 190, 192);
    color: #989898 !important;
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
nav ul li a {
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
#save{
    background-color: black;
    color: white;
    width: 100px;
    height: 50px;
    border-radius: 15px;
    padding-top: 10px;
    margin-left: 200px;
    margin-top: 10px;
    text-align: center;
 }
.editing{
    display: inline;
    justify-content: center;
    width: 300px !important;
    
}
#edit {
    float: left;
    height: 40px;
    color:#989898;
    margin-right: 10px;
    margin-top: 5px;
}
#front, #verse{
    float: left;
    padding-right: 10px;
    font-family: 'Roboto';
    font-size: 14px;
    width: 70px;
    text-align: center;
    color: white;
    height: 40px;
    padding-top: 10px;
    margin-right: 2px;

}
#front{
    background-color: black;
    border-radius: 10px 0 0 10px;
}

#verse{
    background-color: #B28DD6;
    border-radius: 0 10px 10px 0;
}

#select-image{
    background-color: black;
    color: white;
    height: 40px;
    width: 200px !important;
    border-radius: 10px;
    border-color: black;
  
}

.shapes, .fields{ 
    width: 280px !important;
    color:#989898;
}
.shapes {
    margin-left: -40px;
}
.fields {
    margin-left: -10px;
}

.icon{
    background-color: #68A35D;
    color: white;
    width: 40px;
    text-align: center;
    padding-top: 10px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 5px;
}
.iconPostImage{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    width: 40px;
    margin-left: 10px;
}
.feature{
    border: 0.1px solid #989898;;
    float: right;
    height: 35px;
    margin-right: 10px;
}
.featurePostImage{
    border: 0.1px solid #989898;;
    float: right;
    height: 35px;
    margin-right: 30px;
}
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

#myCanvas{
    border: 1px solid rgb(146, 142, 142);
    width: 900px !important;
    height: 662px !important;
    background-color:  #F9F9F9;
    border-radius: 10px;
    box-shadow:  0 5px 6px -6px black;
    margin-top: 30px;
    margin-left: 20px;
}
#imageInput{
    display: none;
}

</style>