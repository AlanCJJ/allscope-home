<template lang="html">
<div>
  <div class="topbar">
    <div class="topbar-logo">Logo</div>
    <div class="topbar-login">Login</div>
    <div class="topbar-search">Search</div>
  </div>
  <div class="navbar">
    <div class="navbar-button">Home</div>
    <div class="navbar-button">About Us</div>
    <div class="navbar-button">Services</div>
    <div class="navbar-button">Contact Us</div>
  </div>
  <div class="carousal">Carousal</div>
  <div class="container">
    <div class="container-item">Service #1</div>
    <div class="container-item">Service #2</div>
    <div class="container-item">Service #3</div>
    <div class="container-item">Service #4</div>
    <div class="container-item">Service #5</div>
    <div class="container-item">Service #6</div>
  </div>
</div>
</template>

<script>  

export default {
    data: function() {
        return {
        }
    },
}
</script>
<style>
  div {
    font-family: 'consolas';
  }
  .carousal {
    margin: 15px 0px;
    width: 100%;
    height: 360px;
    background-color: brown;
  }
  .topbar {
    background-color: grey;
    width:100%;
    overflow: hidden;
  }

  .topbar-logo, 
  .topbar-logo a {
    background-color: purple;
    width: 100px;
    height: 65px;
    float: left;
  }


  .topbar-login {
    float: right;
    width: 200px;
    height: 30px;
    background-color: green;
  }
  .topbar-search {
    float: right;
    width: 150px;
    height: 30px;
    background-color: yellow;
    clear: right;
  }
  
  .navbar {
    background-color: red;
    width: 100%;
    overflow: hidden;
  }

  .navbar-button {
    text-align: 'center';
    border: 1px solid black;
    background-color: teal;
    width: 200px;
    height: 25px;
    float: left;
  }

  .navbar-button:hover {
    background-color: white;
  }
  .container {
    overflow: hidden;
    background-color: blue;
    width: auto;
  }
  .container-item {
    background-color: pink;
    width: 30%;
    height: 185px; 
    margin: 10px;
    float: left;
    border-radius: 5px;
    -webkit-box-reflect: below 5px;
  }
  .container-item:nth-of-type(3n+1) {
    clear: left;
  }
  @media (max-width: 770px){
    .container-item {
      float: none;
      width: 90%
    }
  }

</style>