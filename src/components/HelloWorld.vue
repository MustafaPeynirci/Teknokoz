<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand text-muted fw-bold fs-3 b-resp" href="#">TEKNOKOZ</a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
        <a class="text-muted text-decoration-none fs-2 fw-bold s-resp" href="#">TEKNOKOZ</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Anasayfa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#biz">Biz Kimiz</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#firsat">Fırsatlar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#iletisim">İletişim</a>
          </li>
          <button type="button" class="btn btn-outline-secondary border border-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Destek</button>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mt-10 mb-5 padding-resp-3">
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Destek</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body mx-auto">
            <div class="d-flex flex-column g-20 mt-2 pb-2 text-start">
              <span class="fw-medium">
                <i class="fa-solid fa-location-dot"></i> Konak Rezidans, İzmir </span>
              <span class="fw-medium">
                <i class="fa-solid fa-phone"></i> 0503 456 78 98 </span>
              <span class="fw-medium">
                <i class="fa-solid fa-envelope"></i> info@teknokoz.com </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-start">
      <div class="col-md-5">
        <img src="../assets/img/1.png" class="w-100" alt="teknokoz">
      </div>
      <div class="col-md-7 pt-100">
        <h1 class="fw-bolder mb-0">Bi Tık Daha Fazlası!</h1>
        <span class="fw-medium fs-4">Teknokoz'da</span>
        <p class="mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae, feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat. </p>
        <button type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 purple">Hemen Bilgi Alın</button>
      </div>
    </div>
    <a name="biz"></a>
    <div class="row text-start mt-10 display-flex-resp align-items-center">
      <div class="col-md-7 pe-5 pt-100">
        <span class="fw-medium fs-4">Tecrübeyle Sabit</span>
        <h1 class="fw-bolder ">Kusursuz <span class="red-1">Performans</span>
        </h1>
        <p class="mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae, feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat. </p>
      </div>
      <div class="col-md-5 img-resp-2">
        <img src="../assets/img/2.png" class="w-100" alt="teknokoz">
      </div>
      <div class="d-flex mt-10 text-webkit-center display-resp">
        <div class="h-zoom">
          <i class="fa-solid fa-file fa-2x mb-4 text-body"></i>
          <p class="w-75">Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>
        <div class="h-zoom">
          <i class="fa-solid fa-code fa-2x mb-4 text-body"></i>
          <p class="w-75">Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>
        <div class="h-zoom">
          <i class="fa-solid fa-gear fa-2x mb-4 text-body"></i>
          <p class="w-75">Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>
        <div class="h-zoom">
          <i class="fa-solid fa-pen-to-square fa-2x mb-4 text-body"></i>
          <p class="w-75">Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>
      </div>
    </div>
    <div class="row text-start mt-10 align-items-center justify-content-center">
      <div class="col-md-3 img-resp">
        <img src="../assets/img/3.png" class="w-100" alt="teknokoz">
      </div>
      <div class="col-md-9 ps-5 pt-100">
        <span class="fw-medium fs-4">Yüksek Grafikler</span>
        <h1 class="fw-bolder ">
          <span class="text-warning">Mutlu</span> Müşteriler
        </h1>
        <p class="mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae, feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat. </p>
        <div class="d-flex g-40 mt-5 display-resp">
          <div>
            <i class="fa-solid fa-people-group fa-2x mb-2 purple-2"></i>
            <div class="h-zoom">
              <h2 class="fw-semibold">500+</h2>
              <span>Mutlu Müşteri</span>
            </div>
          </div>
          <div>
            <i class="fa-solid fa-thumbs-up fa-2x mb-2 purple-2"></i>
            <div class="h-zoom">
              <h2 class="fw-semibold">1027+</h2>
              <span>Tavsiye Edildi</span>
            </div>
          </div>
          <div>
            <i class="fa-solid fa-list fa-2x mb-2 purple-2"></i>
            <div class="h-zoom">
              <h2 class="fw-semibold">243+</h2>
              <span>Çözümlenen Task</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-start mt-10 pb-4 align-items-center justify-content-center">
      <div class="col-md-7 pe-5 pt-100">
        <span class="fw-medium fs-4">Kullanıcı Deneyimi</span>
        <h1 class="fw-bolder ">Başarılı <span class="text-success">Portföy</span>
        </h1>
        <p class="mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae, feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat. </p>
      </div>
      <div class="col-md-5 img-resp-2">
        <img src="../assets/img/4.png" class="w-100" alt="teknokoz">
      </div>
    </div>
  </div>
  <div class="position-relative d-flex justify-content-center align-items-center slider-resp">
    <div class="fw-bold text-white pt-4 position-absolute">
      <div class="position-relative display-resp-none">
        <div class="col-md-4 mx-auto h-100 pb-5">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <h1 class="fw-bold text-white pt-4">Sizden Gelenler</h1>
              <div class="carousel-item active">
                <div class="row fw-normal">
                  <p class="text-white mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae, feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat. </p>
                  <span class="text-white mt-4"> Alev Yıldırım </span>
                  <span class="text-danger"> Designer, Otosan </span>
                  <div class="d-flex justify-content-center g-10 mt-2">
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row fw-normal">
                  <p class="text-white mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae, feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat. </p>
                  <span class="text-white mt-4"> Murat Kale </span>
                  <span class="text-danger"> Business Analyst, Craft </span>
                  <div class="d-flex justify-content-center g-10 mt-2">
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row fw-normal">
                  <p class="text-white mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae, feugiat venenatis tellus. In molestie ut massa quis dictum. Vivamus tincidunt dignissim magna, non eleifend mauris viverra in. Nam suscipit neque ex, vitae accumsan urna consequat ut. Vivamus maximus fringilla est ut aliquet. Phasellus aliquam nec odio vel placerat. </p>
                  <span class="text-white mt-4"> Can Meydan </span>
                  <span class="text-danger"> Computer Engineer, Sodexo </span>
                  <div class="d-flex justify-content-center g-10 mt-2">
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/img/gradient.png" class="w-100" alt="">
  </div>
  <!-- <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><img src="../assets/img/gradient.png" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>First slide label</h5><p>Some representative placeholder content for the first slide.</p></div></div><div class="carousel-item"><img src="../assets/img/gradient.png" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Second slide label</h5><p>Some representative placeholder content for the second slide.</p></div></div><div class="carousel-item"><img src="../assets/img/gradient.png" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Third slide label</h5><p>Some representative placeholder content for the third slide.</p></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div> -->
  <a name="firsat"></a>
  <div class="container mt-6 mb-5 margin-resp-2 padding-resp-3">
    <h1 class="fw-bolder mb-0">Fırsatları Değerlendirin!</h1>
    <span class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    <div class="row row-cols-1 row-cols-md-3 g-5 mt-3 padding-resp-2">
      <div class="col">
        <div class="card h-zoom h-100 border-0">
          <img src="../assets/img/blog-1.jpg" class="card-img-top" alt="teknokoz">
          <div class="card-body text-start grey">
            <h5 class="">Kurumsal Web Sitesi</h5>
            <p class="">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer border-0 pb-3 text-start">
            <button type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 purple">Hemen Bilgi Alın</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-zoom h-100 border-0">
          <img src="../assets/img/blog-2.jpg" class="card-img-top" alt="teknokoz">
          <div class="card-body text-start grey">
            <h5 class="">Özel Yazılım</h5>
            <p class="">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer border-0 pb-3 text-start">
            <button type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 purple">Hemen Bilgi Alın</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-zoom h-100 border-0">
          <img src="../assets/img/blog-3.jpg" class="card-img-top" alt="teknokoz">
          <div class="card-body text-start grey">
            <h5 class="">Dijital Market</h5>
            <p class="">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer border-0 pb-3 text-start">
            <button type="button" class="btn btn-secondary border border-secondary rounded-pill fs-14 purple">Hemen Bilgi Alın</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a name="iletisim"></a>
  <div class="container mt-10 padding-resp-3">
    <div class="row mt-5 text-start">
      <div class="col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.0135113063527!2d27.12926805229604!3d38.42011320048231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e3ac245af7%3A0x3585bde806b7c8e!2sKonak%2C%20Cumhuriyet%20Blv%20No%3A20%2C%2035251%20Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1688907105714!5m2!1str!2str" width="100%" height="350px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-3 border-0"></iframe>
      </div>
      <div class="col-md-6 ps-5 margin-resp">
        <h1 class="fw-bold">Adres</h1>
        <div class="row mt-4 text-start">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo neque, suscipit nec ligula vitae, feugiat venenatis tellus. In molestie ut massa quis dictum.</p>
          <div class="d-flex flex-column g-20 mt-2">
            <span class="fw-medium">
              <i class="fa-solid fa-location-dot"></i> Konak Rezidans, İzmir </span>
            <span class="fw-medium">
              <i class="fa-solid fa-phone"></i> 0503 456 78 98 </span>
            <span class="fw-medium">
              <i class="fa-solid fa-envelope"></i> info@teknokoz.com </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grey mt-6">
    <div class="container p-3 padding-resp-3">
      <h2 class="fw-bold text-start pt-3">Bizimle İletişime Geçin.</h2>
      <div class="col-md-12 d-flex display-resp">
        <div class="col-md-5 mt-4 d-flex flex-column g-20">
          <div class="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="Ad Soyad" aria-label="adSoyad" aria-describedby="addon-wrapping">
          </div>
          <div class="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping">
          </div>
          <div class="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="Konu" aria-label="konu" aria-describedby="addon-wrapping">
          </div>
        </div>
        <div class="col-md-7 mt-4 ps-4 padding-resp">
          <div class="form-floating h-100">
            <textarea class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">Mesaj</label>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <button type="button" class="btn btn-secondary border border-secondary rounded-pill purple w-100">Gönder</button>
      </div>
    </div>
    <div class="mt-5 pb-4 margin-resp">
      <span class="">© 2023 Teknokoz. Tüm Hakları Saklıdır.</span>
    </div>
  </div>
  <loading v-model:active="isLoading" :can-cancel="true" :on-cancel="onCancel" color="#4B0082" :is-full-page="fullPage" />
</template>
<script setup>
  import {
    onMounted,
    ref
  } from 'vue';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import {
    Navigation
  } from 'swiper/modules';
  const isLoading = ref(true)
  const fullPage = ref(true)
  const swiper = Swiper
  const swiperSlide = SwiperSlide
  const modules = [Navigation]
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 3000)
  })
</script>
<style>
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

  @media only screen and (max-width: 1335px) {
    .slider-resp {
      display: none !important;
    }
  }

  @media only screen and (max-width: 992px) {
    .s-resp {
      display: none !important;
    }
  }

  @media only screen and (min-width: 992px) {
    .b-resp {
      display: none !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .display-resp {
      display: block !important;
    }

    .display-resp-none {
      display: none !important;
    }

    .padding-resp {
      padding-left: 0 !important;
    }

    .padding-resp-2 {
      padding: 20px !important;
    }

    .padding-resp-3 {
      padding: 0px 20px !important;
    }

    .margin-resp {
      margin-top: 50px !important;
    }

    .margin-resp-2 {
      margin-top: 100px !important;
    }

    .display-flex-resp {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }

    .img-resp {
      display: flex !important;
      justify-content: center !important;
      width: 60%;
      padding-top: 50px;
    }

    .img-resp-2 {
      width: 70%;
      margin-top: 50px;
    }
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .mt-6 {
    margin-top: 6%;
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

  .purple:hover {
    background-color: #5d6bb3;
  }

  .purple-2 {
    color: rgb(115 104 191);
  }

  .red-1 {
    color: rgb(230, 41, 82);
  }

  .grey {
    background-color: rgb(247, 247, 247);
  }

  .text-webkit-center {
    text-align: -webkit-center;
  }

  .g-10 {
    gap: 10px;
  }

  .g-20 {
    gap: 20px;
  }

  .g-40 {
    gap: 40px;
  }

  .l-0 {
    left: 0;
  }

  .bg-pgradient {
    background-image: url("../assets/img/gradient.png");
    width: 100%;
    height: 560px;
    background-size: cover;
  }

  .bg-pgradient-2 {
    background-image: url("../assets/img/gradient-2.png");
    height: 380px;
    background-size: cover;
  }

  .h-zoom {
    transition: transform .3s;
  }

  .h-zoom:hover {
    transform: scale(1.05);
  }
</style>