//index scripts
;(function(){
   //Получить ширину окна
   function getW(){
      var width = $(window).width();
      return width;
   }
   
   function menuPereezdy(knopka,kudaEdem,skorost){
      $(knopka).on('click',function(){
         var blockOfssTop = $(kudaEdem).offset().top;
         $('body,html').animate({
            scrollTop: blockOfssTop
         },skorost);
         return false;
      });
   }
   
   //Функция менюшного переезда
   //Напиши (на что давим, куда едем)
   
   //Если нажать на синюю кнопочку
   menuPereezdy('.blueBtn', '.block_16_maps',3000);
   
   //Если нажать на =ЗимаЛето=
   menuPereezdy('#menuBtn_ZimaLeto', '.block_4_vigodCena',1700);
   //Если нажать на =Комфорт=
   menuPereezdy('#menuBtn_Komfort', '.block_7_ultrapaket',1700);
   //Если нажать на =Палитра=
   menuPereezdy('#menuBtn_Palitra', '.block_10_palitra',1700);
   //Если нажать на =Опции=
   menuPereezdy('#menuBtn_Opcii', '.block_14_dopOpcii',1700);
   
   //Клики по кнопка которые рядом с таблицами и стеклопакетами
   var btnClick_1 = false;
   var btnClick_2 = false;
   var btnClick_3 = false;
   
   //Получаю имя фото окна в слайдере для сравнения
   var stekloNameCurrent;
   
   //Интевал слайдера тут
   var stopSliding;
   
   //Функция двигающая облака
   function oblakoToLeft(elem,time){
      var blokWidth = $('.block_2_posterVideo').width();
      var BWceloe = Math.floor(blokWidth);
      
      $(elem)
         .animate({left:getW()/1.5},0)
         .removeClass('opac0')
      //улумент двигается
         .animate({left:getW()/-3},time,"linear");
      setTimeout(function(){
         $(elem).addClass('opac0');
      },time-3000);
      
      //Интервал
      setInterval(function(){
         //удумент в начало
         $(elem)
            .animate({left:getW()/1.5},0)
            .removeClass('opac0')
         //улумент двигается
            .animate({left:getW()/-3},time,"linear");
         //Перед концом анимации елемент исчезает
         setTimeout(function(){
            $(elem).addClass('opac0');
         },time-3000);
      },time);
      //$(elem).addClass('opac0');
      //$(elem).removeClass('opac0');
   }
   
   //Функция двигающая облака
   function oblakoToRight(elem,time){
      var blokWidth = $('.block_2_posterVideo').width();
      var BWceloe = Math.floor(blokWidth);
      $(elem)
         .animate({left:getW()/-10},0)
         .removeClass('opac0')
         //улумент двигается
         .animate({left:getW()/1.5},time,"linear");
      setTimeout(function(){
         $(elem).addClass('opac0');
      },time-3000);
      
      //Интервал
      setInterval(function(){
         //удумент в начало
         $(elem)
            .animate({left:getW()/-10},0)
            .removeClass('opac0')
         //улумент двигается
            .animate({left:getW()/1.5},time,"linear");
         //Перед концом анимации елемент исчезает
         setTimeout(function(){
            $(elem).addClass('opac0');
         },time-3000);
      },time);
   }
   
   //elem,end,speed
   oblakoToLeft(".oblako_1",60000);//Функция двигающая облака
   oblakoToRight(".oblako_2",90000);//Функция двигающая облака
   
   //Функция слайда таблицы и стеклопакета ВЛЕВО
   function stekPakTableMoveLEFT(kogoDvigat){
      var winW = getW();
      //Уезжает первый блок
      $(kogoDvigat+' > div:first')
         .stop()
         .animate({
            left: -winW
         },function(){
            //Сдвинул блок поставил в конец
            $(this).removeClass('steqPaqActive');
         });
      //Приезжает второй блок
      $(kogoDvigat+' > div:last')
         .stop()
         .animate({
            left: 0
         },function(){
            //Сдвинул блок поставил в конец
            $(this).addClass('steqPaqActive');
         });
   }
   
   //Функция слайда таблицы и стеклопакета ВПРАВО
   function stekPakTableMoveRIGHT(kogoDvigat){
      var winW = getW();
      //Уезжает первый блок
      $(kogoDvigat+' > div:first')
         .stop()
         .animate({
            left: 0
         },function(){
            //Сдвинул блок поставил в конец
            $(this).addClass('steqPaqActive');
         });
      //Приезжает второй блок
      $(kogoDvigat+' > div:last')
         .stop()
         .animate({
            left: winW
         },function(){
            //Сдвинул блок поставил в конец
            $(this).removeClass('steqPaqActive');
         });
   }
   
   //Двигать по клику таблицу и стеклопакет (1)
   $('#tablicaStekPak_1_wrap > div:last').css({left: getW()});
   $('#changeText_1').on('click',function(){
      if(!btnClick_1){
         $(this).text('< Вернуться');
         btnClick_1 = true;
         stekPakTableMoveLEFT('#tablicaStekPak_1_wrap');
      }else{
         $(this).text('Сравнить >');
         btnClick_1 = false;
         stekPakTableMoveRIGHT('#tablicaStekPak_1_wrap');
      }
      
      return false;
   });//Двигать по клику таблицу и стеклопакет (1)
   
   //Двигать по клику таблицу и стеклопакет (2)
   $('#tablicaStekPak_2_wrap > div:last').css({left: getW()});
   $('#changeText_2').on('click',function(){
      if(!btnClick_2){
         $(this).text('< Вернуться');
         btnClick_2 = true;
         stekPakTableMoveLEFT('#tablicaStekPak_2_wrap');
      }else{
         $(this).text('Сравнить >');
         btnClick_2 = false;
         stekPakTableMoveRIGHT('#tablicaStekPak_2_wrap');
      }
      return false;
   });//Двигать по клику таблицу и стеклопакет (2)
   
   //Двигать по клику таблицу и стеклопакет (3)
   $('#tablicaStekPak_3_wrap > div:last').css({left: getW()});
   $('#tablicaStekPak_3_wrap > div:last').css({left: getW()});
   $('#changeText_3').on('click',function(){
      if(!btnClick_3){
         $(this).text('< Вернуться');
         btnClick_3 = true;
         stekPakTableMoveLEFT('#tablicaStekPak_3_wrap');
      }else{
         $(this).text('Сравнить >');
         btnClick_3 = false;
         stekPakTableMoveRIGHT('#tablicaStekPak_3_wrap');
      }
      return false;
   });//Двигать по клику таблицу и стеклопакет (3)
   
   //Смена цветных стёкол
   $('.indiGlass_rightBlu, .indiGlass_rightSlvr, .indiGlass_rightBrnz')
      .css({left: getW()});

   function colorGlassChange(){
      var winW = getW();
      var currentID = $( event.target.closest('a') ).attr('id');
      var glassColorsObj = {
         'clkGrn': '.indiGlass_rightGrn',
         'clkBlu': '.indiGlass_rightBlu',
         'clkSlvr': '.indiGlass_rightSlvr',
         'clkBrnz': '.indiGlass_rightBrnz',
      }

      if( $( glassColorsObj[currentID] ).hasClass('currentGlass') ){return}

      $('#galssColors > li').removeClass('active');
      $('#'+currentID)
         .parent()
         .addClass('active');

      $('.currentGlass')
         .stop()
         .animate({
            left: winW
         },200, function(){
            $(this).removeClass('currentGlass');

         $( glassColorsObj[currentID] )
            .stop()
            .animate({left: 340+'px'}, 700)
            .addClass('currentGlass');
      });
   }//Смена цветных стёкол

   $('#galssColors').on('click', colorGlassChange);
   
   //Каруселька окошек
   //Появление описания у окон ЕДЕТ ВЛЕВО
   function windowInfoFadeLeft(){
      $('#windowTextInfo .show')
         .stop()
         .animate({left: -getW()},330,function(){
            $(this).attr("style","");
         });
      
      setTimeout(function(){
         $('#windowTextInfo p').attr("style","");
         $('#windowTextInfo .show').css({opacity:0,top: 20});
         $('#windowTextInfo .show').stop().animate({opacity:1,top: 0},500);
      },300);
   }
   //Появление описания у окон ЕДЕТ ВПРАВО
   function windowInfoFadeRight(){
      $('#windowTextInfo .show')
         .stop()
         .animate({left: getW()},330,function(){
            $(this).attr("style","");
         });
      
      setTimeout(function(){
         $('#windowTextInfo p').attr("style","");
         $('#windowTextInfo .show').css({opacity:0,top: 20});
         $('#windowTextInfo .show').stop().animate({opacity:1,top: 0},500);
      },300);
   }
   
   //В ЛЕВО
   function slideLeft(){
      //Имя текущей картинки
      stekloNameCurrent = $('#stecloSlider_frames > li')
         .eq(2)
         .find('img')
         .attr('alt');
      //Двигаю блок
      $('#stecloSlider_frames')
         .stop()
         .animate({
            left: -979
         },function(){
         $('#stecloSlider_frames > li:first')
            .insertAfter('#stecloSlider_frames > li:last');
         $('#stecloSlider_frames').css('left','0')
      });
      //Прозрачность пункта 0
      $('#stecloSlider_frames > li:first')
         .stop()
         .animate({
            opacity: 0
         },function(){
            $('#stecloSlider_frames > li:last')
               .css('opacity','1');
         });
      
      $('#stecloSlider_frames > li').eq(1).stop()
         .animate({opacity: 0.3});
      $('#stecloSlider_frames > li').eq(3)
         .css({opacity:0})
         .stop()
         .animate({opacity:0.3});
      $('#stecloSlider_frames > li').eq(2)
         .stop()
         .animate({opacity:1});
   }//В ЛЕВО
   
   $('#stecloSlider_frames > li').eq(1).css({opacity:1});
   
   //В право
   function slideRight(){
      //Имя текущей картинки
      stekloNameCurrent = $('#stecloSlider_frames > li')
         .eq(0)
         .find('img')
         .attr('alt');
      //Двигаю блок
      $('#stecloSlider_frames')
         .css({left: -979});

      $('#stecloSlider_frames > li:last')
         .insertBefore('#stecloSlider_frames > li:first')
         .css('opacity','0')
         .stop()
         .animate({opacity: 0.3});

      $('#stecloSlider_frames')
         .stop()
         .animate({
            left: 0
         });

      $('#stecloSlider_frames > li').eq(1).stop()
         .animate({opacity:1});

      $('#stecloSlider_frames > li').eq(2).stop()
         .animate({opacity:0.3});

      $('#stecloSlider_frames > li').eq(3).stop()
         .animate({opacity:0});
   }//В право
   
   //Каруселька окошек
   //Переменная - на какую стрелку нажали, куда мотаем?
   var naKakuyuStrlkuClick;
   function sravnenieImenStekol(){
      if(stekloNameCurrent == "Закалка"){
         $('#stecloSlider_names > li a').removeClass('stecNamesActive');
         $('#stecloSlider_names > li:eq(0) a')
            .addClass('stecNamesActive');
         $('#windowTextInfo > p').removeClass('show');
         $('#windowTextInfo > p:eq(0)').addClass('show');
         if(!naKakuyuStrlkuClick){
            windowInfoFadeLeft();
         }else{
            windowInfoFadeRight();
         }
         
      }
      if(stekloNameCurrent == "Триплекс"){
         $('#stecloSlider_names > li a').removeClass('stecNamesActive');
         $('#stecloSlider_names > li:eq(1) a')
            .addClass('stecNamesActive');
         $('#windowTextInfo > p').removeClass('show');
         $('#windowTextInfo > p:eq(1)').addClass('show');
         if(!naKakuyuStrlkuClick){
            windowInfoFadeLeft();
         }else{
            windowInfoFadeRight();
         }
      }
      if(stekloNameCurrent == "Раскладка"){
         $('#stecloSlider_names > li a').removeClass('stecNamesActive');
         $('#stecloSlider_names > li:eq(2) a')
            .addClass('stecNamesActive');
         $('#windowTextInfo > p').removeClass('show');
         $('#windowTextInfo > p:eq(2)').addClass('show');
         if(!naKakuyuStrlkuClick){
            windowInfoFadeLeft();
         }else{
            windowInfoFadeRight();
         }
      }
      if(stekloNameCurrent == "Витраж"){
         $('#stecloSlider_names > li a').removeClass('stecNamesActive');
         $('#stecloSlider_names > li:eq(3) a')
            .addClass('stecNamesActive');
         $('#windowTextInfo > p').removeClass('show');
         $('#windowTextInfo > p:eq(3)').addClass('show');
         if(!naKakuyuStrlkuClick){
            windowInfoFadeLeft();
         }else{
            windowInfoFadeRight();
         }
      }
      if(stekloNameCurrent == "Узор"){
         $('#stecloSlider_names > li a').removeClass('stecNamesActive');
         $('#stecloSlider_names > li:eq(4) a')
            .addClass('stecNamesActive');
         $('#windowTextInfo > p').removeClass('show');
         $('#windowTextInfo > p:eq(4)').addClass('show');
         if(!naKakuyuStrlkuClick){
            windowInfoFadeLeft();
         }else{
            windowInfoFadeRight();
         }
      }
   }
   
   //Клик влево
   $('.stecloSliderArrR').on('click',function(){
      naKakuyuStrlkuClick = true;
      slideRight();
      sravnenieImenStekol();
      return false;
   });

   $('.stecloSliderArrL').on('click',function(){
      naKakuyuStrlkuClick = false;
      slideLeft();
      sravnenieImenStekol();
      return false;
   });
   
   function startStopSliding(){
      stopSliding = setInterval(function(){
         $('.stecloSliderArrR').trigger('click');
      },3000);
   }
   startStopSliding();
   
   $('#stecloSlider').mouseover(function(){
      clearInterval(stopSliding)
   });
   $('#stecloSlider').mouseout(function(){
      startStopSliding()
   });
   
   //Клик по названиям стёкол
   $('#stecloSlider_names li a').on('click',function(){
      //Получаю индекс куда кликнул
      var clicked = $(this).parent().index();
      var current = $('#stecloSlider_names .stecNamesActive')
         .parent()
         .index();
      var total = $('#stecloSlider_names li').length;
      
      //разница между текущей и нажатой
      var shift = current - clicked;
      if(shift > 0){
         var i = 0;
         while(i < shift){
            $('.stecloSliderArrR').trigger('click');
            i++;
         }
      }
      if (shift < 0){
         var i = 0;
         while(i < total-clicked+current){
            $('.stecloSliderArrR').trigger('click');
            i++;
         }
      }
      //console.log(shift);
      
      return false;
   });
   
   //Показать скрыть город
   $('#predstav_vibor').slideUp(0);
   $('#townClick').on('click',function(){
      $('#predstav_vibor').slideToggle();
      
      return false;
   });
   
   //Анимации на сайте
   //Появление первого блока
   TweenMax.from(".block_2_posterVideo",2,{opacity:0,delay: 1});
   TweenMax.staggerFrom(".block_2_posterVideo .wrapCntr > p", 1,{
      opacity:0,
      y:50,
      delay: 2
   },0.5);
   
   
   
   //БЕГУЩИЕ ЦИФРЫ ДЛЯ ЛАРЬКОВ
   function numCounter(ELEM, TO, SPEED){
       var counter = { var: 1 };
       TweenMax.to(counter, SPEED, {
            var: TO,
            onUpdate: function () {
                $(ELEM).html(Math.ceil(counter.var));
            },
            delay: 1
        });
   }//БЕГУЩИЕ ЦИФРЫ ДЛЯ ЛАРЬКОВ
   
   
   
   //Появление остальных блоков
   new WOW({
      offset: 270,
      callback: function(box){
         //Анимашки стеклопакета табличного №1
         if(box.id == "tablicaStekPak_1_wrap"){
            TweenMax.to("#tablicaStekPak_1_wrap .ptLeft",3,{left:292, ease:Expo.easeOut});
            TweenMax.to("#tablicaStekPak_1_wrap .ptRight",3,{right:385, ease:Expo.easeOut});
         };
         
         //Анимашки стеклопакета горизонтального
         if(box.id == "sostavStekPakAnim"){
            TweenMax.from(".stekSostavTop",3,{top:100, ease:Expo.easeOut});
            TweenMax.from(".stekSostavBotm",3,{top:174, ease:Expo.easeOut});
            
           TweenMax.staggerFrom("#sostavStekPakAnim p .hiddenShit",0.5,{
               width:0,
               delay: 1
            },0.2);
            
            TweenMax.staggerFrom(".wrapAnimTextStekPak",0.5,{
               top: 24,
               opacity:0,
               delay: 1.5
            },0.2);
         };
         
         //Анимашки стеклопакета табличного №2
         if(box.id == "tablicaStekPak_2_wrap"){
            TweenMax.to("#tablicaStekPak_2_wrap .ptLeft",3,{left:292, ease:Expo.easeOut});
            TweenMax.to("#tablicaStekPak_2_wrap .ptRight",3,{right:385, ease:Expo.easeOut});
         };
         
         //Анимашки стеклопакета вертикального
         if(box.id == "sostavStekPakAnim_2"){
            TweenMax.from(".stekVertL",3,{left: -145, ease:Expo.easeOut});
            TweenMax.from(".stekVertR",3,{left: -69, ease:Expo.easeOut});
            
            TweenMax.staggerFrom(".hidenPoeben span",1,{
               width:0,
               delay: 1
            },0.2);
            
            TweenMax.staggerFrom(".wrapAnimVertTxt",1,{
               top: 20,
               opacity:0,
               delay: 1.5
            },0.2);
         };
         
         //Анимашки стеклопакета табличного №3
         if(box.id == "tablicaStekPak_3_wrap"){
            TweenMax.to(".stekloSkrL",3,{left:302, ease:Expo.easeOut});
            TweenMax.to(".stekloSkrR",3,{left:363, ease:Expo.easeOut});
         };
         
         //Анимашки стеклопакета с разными стёклами
         if(box.id == "cvetnieSteklaWow"){
            TweenMax.from(".indiGlass_left",1.5,{left:182, ease:Expo.easeOut});
            TweenMax.from(".indiGlass_rightGrn",1.5,{left:256, ease:Expo.easeOut});
         }
         
         if(box.id == "kudaBegutProcentyZima-leto"){
            numCounter("#procenty_4", 40, 2);
            numCounter("#razyyy_1", 2, 2);
         }
         
         if(box.id == "kudaBegutProcenty"){
            numCounter("#procenty_1", 70, 1);
            numCounter("#procenty_2", 50, 1);
            numCounter("#procenty_3", 20, 1);
         }
      }
   }).init();
   
   //При ресайзе в трёх блоках - стеклопакета и таблицы, таблица за экраном.
   $(window).on('resize',function(){
      var swit4 = $('.frame_2').hasClass('steqPaqActive');
      if(!swit4){
         $('.frame_2').css({
            left: getW()
         });
      }      
   });
}());//index scripts





//google maps scripts
;(function(){
   var map;

   function initMap() {
      map = new google.maps.Map( document.getElementById('gglMap'), {
         center: {
            lat: 48.709009,
            lng: 44.490549
         },
         zoom: 14,
         disableDefaultUI: true
      });

      //Маркеры
      var markImg = "img/ico/gorodIcoMAP.png";
      //angarskaya
      var mark_angarskaya = new google.maps.Marker({
         position: {
            lat: 48.716150,
            lng: 44.494394
         },
         map: map,
         title: '',
         icon: markImg
      });

      var content_angarskaya =
         '<div class="infoSign">' +
         '<p class="fnt18 light">Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nihil?</p>' +
         '<a href="tel:+ 79619619696" class="fnt18 light">+ 7 (961) 961 96 96</a>' +
         '</div>';
      var infowindow_angarskaya = new google.maps.InfoWindow({
         content: content_angarskaya
      });


      //lenina
      var mark_lenina = new google.maps.Marker({
         position: {
            lat: 48.711197,
            lng: 44.521779
         },
         map: map,
         title: '',
         icon: markImg
      });
      var content_lenina =
         '<div class="infoSign">' +
         '<p class="fnt18 light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nihil?</p>' +
         '<a href="tel:+ 79619619696" class="fnt18 light">+ 7 (961) 961 96 96</a>' +
         '</div>';
      var infowindow_lenina = new google.maps.InfoWindow({
         content: content_lenina
      });

      //4ekisty
      var mark_4ekisty = new google.maps.Marker({
         position: {
            lat: 48.701035,
            lng: 44.509892
         },
         map: map,
         title: '',
         icon: markImg
      });
      var content_4ekisty =
         '<div class="infoSign">' +
         '<p class="fnt18 light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nihil?</p>' +
         '<a href="tel:+ 79619619696" class="fnt18 light">+ 7 (961) 961 96 96</a>' +
         '</div>';
      var infowindow_4ekisty = new google.maps.InfoWindow({
         content: content_4ekisty
      });

      //kim
      var mark_kim = new google.maps.Marker({
         position: {
            lat: 48.697735,
            lng: 44.503884
         },
         map: map,
         title: '',
         icon: markImg
      });
      var content_kim =
         '<div class="infoSign">' +
         '<p class="fnt18 light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nihil?</p>' +
         '<a href="tel:+ 79619619696" class="fnt18 light">+ 7 (961) 961 96 96</a>' +
         '</div>';
      var infowindow_kim = new google.maps.InfoWindow({
         content: content_kim
      });

      //krestyane
      var mark_krestyane = new google.maps.Marker({
         position: {
            lat: 48.696277,
            lng: 44.497232
         },
         map: map,
         title: '',
         icon: markImg
      });
      var content_krestyane =
         '<div class="infoSign">' +
         '<p class="fnt18 light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nihil?</p>' +
         '<a href="tel:+ 79619619696" class="fnt18 light">+ 7 (961) 961 96 96</a>' +
         '</div>';
      var infowindow_krestyane = new google.maps.InfoWindow({
         content: content_krestyane
      });

      //povorinskaya
      var mark_povorinskaya = new google.maps.Marker({
         position: {
            lat: 48.701126,
            lng: 44.459864
         },
         map: map,
         title: '',
         icon: markImg
      });
      var content_povorinskaya =
         '<div class="infoSign">' +
         '<p class="fnt18 light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nihil?</p>' +
         '<a href="tel:+ 79619619696" class="fnt18 light">+ 7 (961) 961 96 96</a>' +
         '</div>';
      var infowindow_povorinskaya = new google.maps.InfoWindow({
         content: content_povorinskaya
      });

      var currentWin;

      //mark_angarskaya
      mark_angarskaya.setMap(map);
      mark_angarskaya.addListener('click', function () {
         infowindow_angarskaya.open(map, mark_angarskaya);
         fuckingStyleInfoWindow();
         if (currentWin) {
            currentWin.close()
         }
         currentWin = infowindow_angarskaya;
      });
      //mark_lenina
      mark_lenina.setMap(map);
      mark_lenina.addListener('click', function () {
         infowindow_lenina.open(map, mark_lenina);
         fuckingStyleInfoWindow();
         if (currentWin) {
            currentWin.close()
         }
         currentWin = infowindow_lenina;
      });
      //mark_4ekisty
      mark_4ekisty.setMap(map);
      mark_4ekisty.addListener('click', function () {
         infowindow_4ekisty.open(map, mark_4ekisty);
         fuckingStyleInfoWindow();
         if (currentWin) {
            currentWin.close()
         }
         currentWin = infowindow_4ekisty;
      });
      //mark_kim
      mark_kim.setMap(map);
      mark_kim.addListener('click', function () {
         infowindow_kim.open(map, mark_kim);
         fuckingStyleInfoWindow();
         if (currentWin) {
            currentWin.close()
         }
         currentWin = infowindow_kim;
      });
      //mark_krestyane
      mark_krestyane.setMap(map);
      mark_krestyane.addListener('click', function () {
         infowindow_krestyane.open(map, mark_krestyane);
         fuckingStyleInfoWindow();
         if (currentWin) {
            currentWin.close()
         }
         currentWin = infowindow_krestyane;
      });
      //mark_povorinskaya
      mark_povorinskaya.setMap(map);
      mark_povorinskaya.addListener('click', function () {
         infowindow_povorinskaya.open(map, mark_povorinskaya);
         fuckingStyleInfoWindow();
         if (currentWin) {
            currentWin.close()
         }
         currentWin = infowindow_povorinskaya;
      });

      function fuckingStyleInfoWindow() {
         $('.gm-style-iw').prev().remove();
         $('.gm-style-iw').next().remove();
         $('.gm-style-iw').parent().css({
            "max-width": "295px",
            "width": "295px",
         });
         $('.gm-style-iw').css({
            "max-width": "295px",
            "width": "295px",
            overflow: "visible",
            top: 75,
            left: 20
         });
      }
   }

   //initMap();
}());
//google maps scripts