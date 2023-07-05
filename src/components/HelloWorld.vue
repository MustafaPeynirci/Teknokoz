<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
        <h2 class="text-muted fw-bold" href="#">TEKNOKOZ</h2>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Anasayfa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Biz Kimiz</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hakkımızda</a>
          </li>
          <li class="nav-item me-5">
            <a class="nav-link" href="#">İletişim</a>
          </li>
          <button type="button" class="btn btn-outline-secondary border border-secondary rounded-pill">Destek</button>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mt-10 mb-5">
    <div class="row text-start">
      <div class="col-md-4">
        <img src="../assets/img/1.jpg" width="430" alt="teknokoz">
      </div>
      <div class="col-md-8 ps-5 pt-100">
        <h1 class="fw-bolder mb-0">Bi Tık Daha Fazlası!</h1>
        <span class="fw-medium fs-4">Teknokoz'da</span>
        <p class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae,
          feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non
          eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus
          maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat.
        </p>
        <button type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 purple">Hemen Bilgi Alın</button>
      </div>
  </div>
  <h6 class="mt-15">Aşağı Kaydır ↓</h6>

  <div class="row text-start mt-10">
      <div class="col-md-8 pe-5 pt-100">
        <span class="fw-medium fs-4">Tecrübeyle Sabit</span>
        <h1 class="fw-bolder ">Kusursuz Performans</h1>
        <p class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae,
          feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non
          eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus
          maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat.
        </p>
      </div>
      <div class="col-md-4">
        <img src="../assets/img/2.png" width="430" alt="teknokoz">
        </div>
        <div class="d-flex mt-10 text-webkit-center">
          <div class="">
            <img src="../assets/logo.png" width="100" alt="..." class="rounded-circle">
            <p class="w-75">Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div>
          <div>
            <img src="../assets/logo.png" width="100" alt="..." class="rounded-circle">
            <p class="w-75">Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div>
          <div>
            <img src="../assets/logo.png" width="100" alt="..." class="rounded-circle">
            <p class="w-75">Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div>
          <div>
            <img src="../assets/logo.png" width="100" alt="..." class="rounded-circle">
            <p class="w-75">Lorem ipsum dolor sit amet consectetur adipisicing </p>
          </div>
        </div>
  </div>

  <div class="row text-start mt-10">
      <div class="col-md-4">
        <img src="../assets/img/3.png" width="430" alt="teknokoz">
      </div>
      <div class="col-md-8 ps-5 pt-100">
        <span class="fw-medium fs-4">Yüksek Grafikler</span>
        <h1 class="fw-bolder ">Mutlu Müşteriler</h1>
        <p class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae,
          feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non
          eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus
          maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat.
        </p>
      </div>
  </div>

  <div class="row text-start mt-10">
      <div class="col-md-8 pe-5 pt-100">
        <span class="fw-medium fs-4">Kullanıcı Deneyimi</span>
        <h1 class="fw-bolder ">Başarılı Portföy</h1>
        <p class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae,
          feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non
          eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus
          maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat.
        </p>
      </div>
      <div class="col-md-4">
        <img src="../assets/img/4.png" width="430" alt="teknokoz">
        </div>
  </div>




  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 18px;
}
.mt-10 {
  margin-top: 10%;
}
.mt-15 {
  margin-top: 15%;
}
.pt-100 {
  padding-top: 100px;
}
.fs-14 {
  font-size: 14px;
}
.purple {
  background-color: rgb(111 133 244);
}
.text-webkit-center {
  text-align: -webkit-center;
}
</style>
