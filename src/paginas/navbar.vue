<template>
     <b-container-fluid>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
      <b-navbar toggleable="lg" class="nav">
        <b-navbar-brand class="logo" href="#"></b-navbar-brand>

        <b-nav-form class="searchFuntionality search">
            <i class="fas fa-search"></i>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar Funcionalidade"></b-form-input>
        </b-nav-form>

       
          <b-navbar-nav class="ms-auto">
              <div class="superAdmin">
             <div class="avatar"></div>
             <div id="textTop">Super Admin</div>
             <br>
              <div id="textBottom">Super Admin</div>
             </div>
          </b-navbar-nav>
        
      </b-navbar>

     </b-container-fluid>
</template>

<script>

</script>

<style scoped>

.logo{
    width: 203px;
    height: 78px;
    border-radius: 50%;
    background-color: white;
}
.nav{
    height: 101px;
    background-color: #B28DD6; 
}

.searchFuntionality{
    width: 476px ;
}

.search{
    position: relative;
}

.search i {
    position: absolute;
     padding: 6px 12px;
     color: #989898;
   
}
.search input.form-control {
    padding-left: 30px;
    color: #989898;
}

.avatar{
    width: 40px;
    height: 40px;
    background-color: #C4C4C4;
    border-radius: 10px;
    margin-right: 10px;
    flex-direction: start;
    float: left;
    display: inline;
   
  
}
.superAdmin{
    padding-top: -100px !important;
    width: 300px;
    
}
#textTop{
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    float: left;
   
}
#textBottom{
    font-family: 'Rubik', sans-serif;
    font-size: 10px;
    color: white;
    
}

/* --------------- media queries  ---------------*/

@media only screen and (max-width: 499px){
.logo{
    width: 150px;
}
.searchFuntionality{
    width: 250px ;
}
.nav{
    height: 150px;
}
.avatar{
    flex-direction: end;
    float: left;
    display: inline;
}
.superAdmin{
    width: 150px;
    top: 0%;
    right: 0;
    left: 55%;
}
#textTop{
    font-size: 12px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    float: left;
}
#textBottom{
    font-family: 'Rubik', sans-serif;
    font-size: 10px;
    color: white;
    margin-top: -5px;
}
}
@media only screen and (max-width: 800px){
.logo{
    width: 130px;
}
.searchFuntionality{
    width: 320px ;
}
.nav{
    height: 150px;
}
.avatar{
    flex-direction: end;
    float: left;
    display: inline;
}
.superAdmin{
    width: 150px;
    top: 0 !important;
    position: absolute;
}
#textTop{
    font-size: 12px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    float: left;
}
#textBottom{
    font-family: 'Rubik', sans-serif;
    font-size: 10px;
    color: white;
    margin-top: -5px;
}
}
@media only screen and (max-width: 1000px){
.logo{
    width: 150px;
}
.searchFuntionality{
    width: 400px ;
}
.nav{
    height: 150px;
}
.avatar{
    flex-direction: end;
    float: left;
    display: inline;

}
.superAdmin{
    width: 150px;
    top: 5%;
    right: 0;
    left: 75%;
}
#textTop{
    font-size: 12px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    float: left;
}
#textBottom{
    font-family: 'Rubik', sans-serif;
    font-size: 10px;
    color: white;
    margin-top: -5px;
}
} 



</style>