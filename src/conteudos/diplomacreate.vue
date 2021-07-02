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
        <div class="col-md-10 template"> <!--inicio template -->
                {{ msg }}
        </div><!--fim template -->
     <div class="col-md-2 d-flex justify-content-start"><!--inicio cadastro -->
        <div id="salvar">Salvar
    </div><!--fim salvar -->
    </div><!--fim row -->
    </div> <!-- fim container -->


     <section class="flex"> <!-- inicio flex -->
      <div> <!-- inicio subir imagem -->
        <button  v-on:click="isHidden = !isHidden" id="select-image"><input type="file" id="imageInput" accept = "image/*"><div id="postImage">Subir Imagem<i class="fas fa-images iconPostImage"></i> </div></button>
      <div class="traco"></div>
      </div> <!-- fim subir imagem -->


      <div> <!-- inicio formas -->
        Formas:
        <i v-on:click="isHiddenFormas = !isHiddenFormas" class="fas fa-star icon"></i>
        <div class="traco"></div>
      </div> <!-- fim formas -->


      <div> <!-- inicio campos -->
        Campos: 
        <i class="fas fa-text-height icon"></i>
        <i class="fas fa-images icon"></i>
        <div class="traco"></div>
      </div> <!-- fim campos -->


       <div><!-- inicio editando -->
           <div id="edit">
               Editando:
           </div>
        
     <div id="front">
         Frente
     </div>
     <div id="verse">
         Verso
        </div>
      </div> <!-- fim editando -->
    
    </section> <!-- fim flex -->


     <div class="col-md-10 linha">
      <div class="underTheLine">
          Diploma
          </div>
          </div>
   
         <section class="grid"> <!-- inicio canvas --> 
      
          <canvas id= "myCanvas" ></canvas>
        
      
      <div class="sidebar"> <!-- inicio sidebar -->
        
            <div v-if="isHidden" class="col-md-12 boxDimension"> <!-- inicio primeira box -->
                <div class="col-md-6 XW">
                    X 112
                    <br><br>
                    W 193
                </div>
                <div class="col-md-6 YH">
                    Y 413
                    <br><br>
                    H 60
                </div>
                </div> <!-- fim primeira box -->
        <div  v-if="isHiddenFormas" class="col-md-12 stroke" > <!-- inicio segunda box -->
        <div class="col-md-12"> <!-- primeira linha -->
        <div  class="col-md-10" id="strokeWord">Stroke</div> 
        
        <div class="col-md-2" id="plus"><i class="fas fa-plus"></i></div>
        
    <div class="container" > <!-- segunda linha -->
	<div class="item1" >
    <div id="caixaColor">
    <div id="zero"> 000000</div>
    </div> 
    </div> 
    
	<div class="item">
    <i class="far fa-eye eye"></i><i class="fas fa-minus minus"></i>
    </div> <!-- fim item1 -->
    </div> 


    <div class="container2"> <!-- inicio terceira linha -->
        <div id="bars">
             <i class="fas fa-bars"></i>
             3
        </div>
          <div id="center">
             Center <i class="fas fa-chevron-down"></i>
        </div>
        </div> <!-- fim terceira linha -->


        <div class="container">  <!-- inicio quarta linha -->
	    <div class="item3"> 
            <div class="line">
                 <i class="fas fa-minus down2" ></i>
            <div class="arrow">
                <i class="fas fa-chevron-down down"></i>
            </div>
           </div>

        </div>
	     <div class="item3">
            <div class="line">
                 <i class="fas fa-minus down2" ></i>
            <div class="arrow">
                <i class="fas fa-chevron-down down"></i>
            </div>
           </div>
        </div>

	    <div class="item4">
            <i class="fas fa-ellipsis-h ellipsis"></i>
            </div>
            </div> <!-- fim terceira linha -->
        </div>
    </div>
</div>
</section>
    
</div>
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
            isHidden: false,
            isHiddenFormas: false,
        
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
#salvar{
    background-color: black;
    color: white;
    width: 100px;
    height: 50px;
    border-radius: 15px;
    padding-top: 10px;
    margin-top: 10px;
    text-align: center;
    justify-content: center !important;
}
   

.fields, .shapes, .editing{
    float: left;
    border: 1px solid blue;
}
#imageInput{
    opacity: 0;
    width: 100px;
}
#select-image{
    background-color: black;
    color: white;
    height: 40px;
    border-radius: 10px;
}

#postImage{
     margin-top: -30px;
}
.traco{
    border: 0.1px solid #989898;
    float: right;
    height: 35px;
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

#edit {
    float: left;
    height: 40px;
    color:#989898;
    margin-right: 10px;
    margin-top: 5px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
}

.flex > div {
  flex: 1 1 200px;
  margin: 10px;
}

.iconPostImage{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    width: 20px;
    margin-left: 10px;
    
}
.grid {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-gap: 20px;
    max-width: 1000px;
    padding: 10px;
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
.sidebar > div {
    margin-bottom: 10px;
}
  
.boxDimension{
    width: 150px;
    height: 80px;
    color: rgb(128, 128, 128);
    border: 1px solid rgb(223, 219, 219);
    border-radius: 3px;
    box-shadow:  0 5px 6px -6px rgb(97, 96, 96);
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: 20px;
    padding-left: 10px;
    margin-left: 20px;
}

.XW{
    float: left;
}
.YH{
    float: right;
}

.stroke{
    width: 180px;
    height: 137px;
    color: rgb(128, 128, 128);
    border: 1px solid rgb(223, 219, 219);
    border-radius: 3px;
    box-shadow:  0 5px 6px -6px rgb(97, 96, 96);
    font-size: 15px;
    
}
#strokeWord{
    font-weight: bold;
    color: black;
    padding-left: 10px;
    float: left;
    
}
#plus{
    float: right;
    font-size: 20px;
    margin-top: -5px;
    color: black;
}
.container{
   display: flex;
   flex-wrap: nowrap;  
   
}
.item1{
   width: 70%;  
   border: 1px solid rgb(202, 197, 197) !important;
   height: 30px;
   border-radius: 5px;
   margin-left: -10px;
   margin-right: 10px;
   
}
.item{
    width: 30%;

}
#caixaColor{
    width: 20px;
    height: 20px;
    background-color: black;
    border: black;
    margin-top: 5px;
    margin-left: 5px;
}
#zero{
    margin-left: 25px;
    font-size: 13px;
    color: black;
}
.eye{
    margin-right: 10px;
}
.eye, .minus{
    color: black;
}

.container2{
    display: flex;
    flex-wrap: nowrap;  
    margin-top: 10px;
    margin-left: 10px;
}
#bars{
  width: 30%;  
 
}
#center{
    width: 60%;
    font-size: 13px;

}

.down2{
    font-size: 25px;
    color: black;
}
.item3{
   width: 40%; 
  
}
.item4{
    justify-content: end;
}

.ellipsis{
    color: black;
}
.line{
     display: flex;
   
}
.arrow{
    font-size: 13px;
    margin-top: 2px;
    margin-left: 5px;
}

/* --------------- media queries  ---------------*/

  @media (max-width: 500px) {
.grid {
      grid-template-columns: 2fr;
    }

#myCanvas{
     width: 150px !important;
     height: 150px !important;
     margin-left: 5px;
 }   
  }
 @media (min-width: 500px ) and (max-width: 600px) {
.grid {
      grid-template-columns: 2fr;
    }
 #myCanvas{
     width: 250px !important;
     height: 200px !important;
  }
 }
   @media (min-width: 600px ) and (max-width: 750px) {
.grid {
      grid-template-columns: 2fr;
    }
 #myCanvas{
     width: 300px !important;
     height: 250px !important;
     margin-left: 3px;
  }
  
#front, #verse{
    width: 50px;

}
 }
 
   @media (min-width: 750px ) and (max-width: 900px) {
      
 #myCanvas{
     width: 350px !important;
     height: 300px !important;
     margin-left: 3px;
  }
 }
  @media (min-width: 900px ) and (max-width: 1100px) {
 #myCanvas{
     width: 450px !important;
     height: 400px !important;
  }
 }
 @media(min-width: 1100px) and (max-width: 1270px){
      #myCanvas{
     width: 600px !important;
     height: 550px !important;
  }
#front, #verse{
    width: 55px;

}
 }
 @media (max-width: 1121px){
     .traco{
        display: none !important;
     }
 }
</style>