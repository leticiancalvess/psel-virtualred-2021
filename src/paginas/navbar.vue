<template>
    <div>
        <!-- CSS only -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <!-- fim links -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light"> <!-- inicio navbar -->
            <a class="navbar-brand logo" href="#"></a> 
            <form class="form-inline searchFuntionality"> <!-- inicio buscar -->
            <input class="form-control" type="search"  placeholder="Buscar Funcionalidade" aria-label="Search"> 
            </form><!-- fim buscar -->
    <div class="superAdmin"> <!-- inicio avatar e super admin -->
    <div class="avatar"></div>
    <div id="text">
       <div class="topText">Super Admin</div><br>
        <div class="bottomText">Super Admin</div>
        </div>
      
    </div><!-- fim avatar e super admin -->
   
  
</nav><!-- fim navbar -->
</div>

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
nav{
    height: 101px;
    background-color: #B28DD6 !important; 
}
.searchFuntionality{
    width: 476px ;
}
.avatar{
    width: 40px;
    height: 40px;
    background-color: #C4C4C4;
    border-radius: 10px;
    float: left;
    margin-right: 10px;
  
}
.superAdmin{
    padding-left: 300px;
    display: inline;
    width: 500px;
}
#text{
    float: left;
  
}
.topText{
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif
}
.bottomText{
      margin-top: -20px;
    font-family: 'Rubik', sans-serif;
    font-size: 10px;
    color: white;
}
</style>
