<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE-edge">
<meta name="viewport" content="width=device-width, intial-scale=1.0">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="lightslider.css">
<script src="JQuery3.3.1.js"></script>
<script src="lightslider.js"></script>
<title>Az online library</title>
	<style>
		body{
			font-family:nunito;
		}
	</style>
</head>
<body>
    <nav>
        <a href="index.html" class="logo">
            <img src="logo.png"/>
        </a>
        <input type="checkbox" class="menu-btn" id="menu-btn"/>
        <label class="menu-icon" for="menu-btn">
            <span class="nav-icon"></span>
        </label>
        <ul class="menu">
            <li><a href="index.html">Нүүр</a></li>
            <li><a href="books.html">Ном</a></li>
            <li><a href="podcast.html">Подкаст</a></li>
            <li><a href="author.html">Зохиолчид</a></li>
        </ul>
        <div class="search">
            <input type="text" placeholder="Хайх"/>
            <i class="fas fa-search"></i>
        </div>
    </nav>
    <section id="main">
        <h1 class="podcast-heading">Подкаст</h1>
        
        <ul id="autoWidth" class="cs-hidden">
        
        <li>
           <div class="podcast-box">
               <img src="podcasts/1.jpeg"/>
               <p>zuna</p>
           </div>
        </li>
            <li>
               <div class="podcast-box">
                   <img src="podcasts/2.jpg"/>
               </div>
        </li>
            <li>
               <div class="podcast-box">
                   <img src="podcasts/3.png"/>
               </div>
                   </li>
            <li>
               <div class="podcast-box">
                   <img src="podcasts/5.jpg"/>
               </div>
            </li>
            <li>
               <div class="podcast-box">
                   <img src="podcasts/6.jpg"/>
               </div>
            </li>
          </ul>
        
    </section>
    <section id="nomnud">
        <h2 class="nomnud-heading">Онцлох номнууд</h2>
        <ul id="autoWidth2" class="cs-hidden">
            <li class="item-a">
                <div class="nomnud-box">
                    <div class="nomnud-b-img">
                        <img src="nomnud/1.jpg">
                    </div>
                    <div class="nomnud-b-text">
                        <strong>БААТАРЛАГ ЯВДАЛ</strong>
                        <p>Л. Бадарч</p>
                    </div>
                </div>
            </li>
    <li class="item-b">
        <div class="nomnud-box">
            <div class="nomnud-b-img">
                <img src="nomnud/2.jpg">
            </div>
            <div class="nomnud-b-text">
                <strong>ҮЙЛСИЙН ҮНЭН ТҮҮХ</strong>
                <p>Х. Пэрлээ</p>
            </div>
        </div>
    </li>
    <li class="item-c">
        <div class="nomnud-box">
            <div class="nomnud-b-img">
                <img src="nomnud/3.jpg">
            </div>
            <div class="nomnud-b-text">
                <strong>САЙХАН</strong>
                <p>Ж. Бямба</p>
            </div>
        </div>
    </li>
    <li class="item-d">
        <div class="nomnud-box">
            <div class="nomnud-b-img">
                <img src="nomnud/4.jpg">
            </div>
            <div class="nomnud-b-text">
                <strong>МОНГОЛЫН УРАН ЗОХИОЛЫН ТҮҮХИЙН ЗАРИМ АСУУДАЛ</strong>
                <p>Х. Сампилдэндэв</p>
            </div>
        </div>
    </li>
    <li class="item-e">
        <div class="nomnud-box">
            <div class="nomnud-b-img">
                <img src="nomnud/5.jpg">
            </div>
            <div class="nomnud-b-text">
                <strong>НАР, ӨВГӨН, БҮСГҮЙ ГУРАВ</strong>
                <p>В. М. Шукшин</p>
            </div>
        </div>
    </li>
    <li class="item-f">
        <div class="nomnud-box">
            <div class="nomnud-b-img">
                <img src="nomnud/6.jpg">
            </div>
            <div class="nomnud-b-text">
                <strong>ХУУЧИН ХҮҮ</strong>
                <p>Д. Нацагдорж</p>
            </div>
        </div>
    </li>
    <li class="item-g">
        <div class="nomnud-box">
            <div class="nomnud-b-img">
                <img src="nomnud/7.jpg">
            </div>
            <div class="nomnud-b-text">
                <strong>ХҮРЭЛ ХӨШӨӨ</strong>
                <p>А. С. Пушкин</p>
            </div>
        </div>
    </li>
          </ul>
    </section>
    <div class="zohiolchid-heading">
        <h2>Зохиолчид</h2>
    </div>
    <section id="zohiolchid-list">
        <div class="zohiolchid-box">
            <div class="zohiolchid-img">
                <img src="zohiolchid/1.jpg">
            </div>
            <a href="#">
                James Joyce
            </a>
        </div>
         <div class="zohiolchid-box">
            <div class="zohiolchid-img">
                <img src="zohiolchid/2.jpg">
            </div>
            <a href="#">
                Leo Tolstoy
            </a>
        </div>
         <div class="zohiolchid-box">
            <div class="zohiolchid-img">
                <img src="zohiolchid/3.jpg">
            </div>
            <a href="#">
                Vladimir Nabokov
            </a>
        </div>
         <div class="zohiolchid-box">
            <!--img------------>
            <div class="zohiolchid-img">
                <img src="zohiolchid/4.jpg">
            </div>
            <a href="#">
                Ernest Hemingway
            </a>
        </div>
         <div class="zohiolchid-box">
            <div class="zohiolchid-img">
                <img src="zohiolchid/5.jpg">
            </div>
            <a href="#">
                F. Scott Fitzgerald
            </a>
        </div>
         <div class="zohiolchid-box">
            <!--img------------>
            <div class="zohiolchid-img">
                <img src="zohiolchid/6.jpg">
            </div>
            <a href="#">
                Charles Dickens
            </a>
        </div>
         <div class="zohiolchid-box">
            <div class="zohiolchid-img">
                <img src="zohiolchid/7.jpg">
            </div>
            <a href="#">
                Marcel Proust
            </a>
        </div>
         <div class="zohiolchid-box">
            <div class="zohiolchid-img">
                <img src="zohiolchid/8.jpg">
            </div>
            <a href="#">
                Gustave Flaubert
            </a>
        </div>
    </section>
    <script>
        $(document).ready(function() {
    $('#autoWidth,#autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth,#autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });
    </script>
</body>
</html>
