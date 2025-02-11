import React, { useState } from "react";

const categories = [
  "Tümü",
  "Çorbalar",
  "Meze Çeşitleri",
  "Salatalar",
  "Deniz Ürünleri",
  "Izgaralar",
  "Hamur İşleri",
  "Ana Yemekler",
  "Tatlılar",
  "İçecekler",
];

const menuItems = [
  {
    title: "Çorbalar",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    items: [
      {
        id: 1,
        name: "Mercimek Çorbası",
        category: "Çorbalar",
        description: "Geleneksel tarif ile hazırlanan kırmızı mercimek çorbası",
        price: 100,
        image:
          "https://gezginbirchef.com/wp-content/uploads/2020/12/Lokanta-Usulu%CC%88-Mercimek-C%CC%A7orbasi-1-scaled.jpg",
      },
      {
        id: 2,
        name: "İşkembe Çorbası",
        category: "Çorbalar",
        description: "Özel baharatlarla hazırlanan geleneksel işkembe çorbası",
        price: 250,
        image:
          "https://imgrosetta.mynet.com.tr/file/15834175/15834175-1200xauto.jpg",
      },
      {
        id: 3,
        name: "Ezogelin Çorbası",
        category: "Çorbalar",
        description:
          "Bulgur ve kırmızı mercimek ile hazırlanan Anadolu lezzeti",
        price: 100,
        image:
          "https://image.hurimg.com/i/hurriyet/75/750x422/629620854e3fe02c2424a34a.jpg",
      },
      {
        id: 4,
        name: "Tavuk Suyu Çorba",
        category: "Çorbalar",
        description: "Lezzetli tavuk suyu ile yapılan sağlıklı çorba",
        price: 120,
        image:
          "https://i.lezzet.com.tr/images-xxlarge/sebzeli-tavuk-suyu-corbasi-b0d71898-4921-43f7-ba47-6ff6b63fb4eb",
      },
      {
        id: 5,
        name: "Domates Çorbası",
        category: "Çorbalar",
        description: "Kremalı ve kaşarlı nefis domates çorbası",
        price: 120,
        image:
          "https://imgrosetta.mynet.com.tr/file/18754762/18754762-1200x675.jpg",
      },
      {
        id: 6,
        name: "Tarhana Çorbası",
        category: "Çorbalar",
        description: "Ev yapımı tarhana ile yapılan geleneksel çorba",
        price: 120,
        image:
          "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/05/arpa-sehriyeli-tarhana-corbasi-resimli-yemek-tarifi(10).jpg",
      },
      {
        id: 7,
        name: "Yoğurt Çorbası",
        category: "Çorbalar",
        description: "Naneli ve nohutlu hafif yoğurt çorbası",
        price: 120,
        image:
          "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/yogurt_corbasi-ay6i1244.webp",
      },
      {
        id: 8,
        name: "Mantar Çorbası",
        category: "Çorbalar",
        description: "Kremalı mantar çorbası, kıvamında lezzeti ile",
        price: 130,
        image:
          "https://www.hayger.com/wp-content/uploads/istiridye-mantari-corbasi.jpg",
      },
      {
        id: 9,
        name: "Brokoli Çorbası",
        category: "Çorbalar",
        description: "Sağlıklı ve besleyici brokoli çorbası",
        price: 100,
        image:
          "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/kremasiz-brokoli-corbasi_18_11zon.webp",
      },
      {
        id: 10,
        name: "Sebze Çorbası",
        category: "Çorbalar",
        description: "Mevsim sebzeleri ile hazırlanan hafif çorba",
        price: 100,
        image:
          "https://image.hurimg.com/i/hurriyet/75/750x422/5e215de5c03c0e115489667b.jpg",
      },
    ],
  },
  {
    title: "Meze Çeşitleri",
    image: "https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg",
    items: [
      {
        id: 3,
        name: "Humus",
        category: "Meze Çeşitleri",
        description:
          "Nohut püresi, tahin ve zeytinyağı ile hazırlanan geleneksel meze",
        price: 120,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijzr0Y5KFMSGmf9fD8SOWNSSxOrAFhGMXrg&s",
      },
      {
        id: 4,
        name: "Babagannuş",
        category: "Meze Çeşitleri",
        description:
          "Közlenmiş patlıcan, tahin ve zeytinyağı ile hazırlanan meze",
        price: 130,
        image:
          "https://i.pinimg.com/736x/60/5a/a4/605aa4323b43a6b7876d68c7d290cc9a.jpg",
      },
      {
        id: 13,
        name: "Haydari",
        category: "Meze Çeşitleri",
        description:
          "Süzme yoğurt, sarımsak ve dereotu ile hazırlanan klasik meze",
        price: 150,
        image:
          "https://www.mutfakailesi.com/upload_tarif/124fa085cd6e895773a9778277af5b84.jpg",
      },
      {
        id: 14,
        name: "Şakşuka",
        category: "Meze Çeşitleri",
        description: "Kızarmış sebzeler ve domates sosu ile hazırlanan meze",
        price: 150,
        image:
          "https://www.ardaninmutfagi.com/wp-content/uploads/2024/07/saksuka-t.jpg",
      },
      {
        id: 15,
        name: "Atom",
        category: "Meze Çeşitleri",
        description:
          "Yoğurt, acı biber ve zeytinyağı ile yapılan lezzetli meze",
        price: 200,
        image:
          "https://i.ytimg.com/vi/XsQpQ2vMDJY/maxresdefault.jpg",
      },
      {
        id: 27,
        name: "Mücver",
        category: "Meze Çeşitleri",
        description: "Taze rendelenmiş kabak, dereotu ve peynir ile hazırlanan harcın kızgın yağda çıtır çıtır kızartılmasıyla yapılan lezzetli bir meze. Yoğurt sos ile servis edilir.",
        price: 200,
        image: "https://isbh.tmgrup.com.tr/sbh/2019/07/21/kabak-mucver-tarifi-firinda-veya-kizartilmis-kabak-mucveri-nasil-yapilir-1563664225275.jpg"
      },
      {
        id: 28,
        name: "Arnavut Ciğeri",
        category: "Meze Çeşitleri",
        description: "Özenle doğranmış dana ciğerleri baharatlarla harmanlanarak kızartılır, yanında kırmızı soğan, maydanoz ve sumak ile servis edilir.",
        price: 250,
        image: "https://www.trakyagezi.com/wp-content/uploads/2016/05/ArnavutCi%C4%9Feri.jpg"
      }
      
      
    ],
  },
  {
    title: "Hamur İşleri",
    image: "https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg",
    items: [
      {
        id: 30,
        name: "Lahmacun",
        category: "Hamur İşleri",
        description: "İncecik açılmış hamur üzerine özel baharatlarla harmanlanmış kıymalı harç sürülerek taş fırında pişirilir. Limon ve maydanoz ile servis edilir.",
        price: 100,
        image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/2-32.webp"
      },
      {
        id: 31,
        name: "Pide (Kıymalı)",
        category: "Hamur İşleri",
        description: "Odun fırınında pişirilmiş ince hamurun üzerine baharatlı kıymalı harç eklenerek hazırlanan geleneksel pide çeşidi.",
        price: 300,
        image: "https://egedenpide.com/uploads/blog/kiymali-pide.jpg"
      },
      {
        id: 32,
        name: "Pide (Kaşarlı)",
        category: "Hamur İşleri",
        description: "İnce hamur üzerine bol kaşar peyniri eklenerek taş fırında pişirilen nefis bir lezzet.",
        price: 250,
        image: "https://circirselalesi.com.tr/wp-content/uploads/2022/07/kasarli-pide.jpg"
      },
      {
        id: 33,
        name: "Pide (Karışık)",
        category: "Hamur İşleri",
        description: "Kıymalı, kaşarlı ve sucuklu harcın bir araya geldiği, taş fırında pişirilmiş doyurucu pide çeşidi.",
        price: 350,
        image: "https://beskardeslerrestaurant.com/wp-content/uploads/2023/06/Karisik-Pide.jpg"
      },
      {
        id: 34,
        name: "Su Böreği",
        category: "Hamur İşleri",
        description: "İnce açılmış yufkaların arasına peynirli harç konularak tereyağı ile pişirilen geleneksel Türk böreği.",
        price: 200,
        image: "https://s8k8w4m8.delivery.rocketcdn.me/wp-content/uploads/2010/04/su_boregi_tarifi-640x445.jpg"
      },
      {
        id: 35,
        name: "Kol Böreği",
        category: "Hamur İşleri",
        description: "İnce açılmış yufkanın içine peynirli veya kıymalı harç konularak rulo şeklinde sarılıp fırında kızartılan lezzetli börek çeşidi.",
        price: 200,
        image: "https://image.hurimg.com/i/hurriyet/75/750x422/5c6667bd0f25442e40d9f652.jpg"
      },
    ]
    ,
  },
  {
    title: "Salatalar",
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg",
    items: [
      {
        id: 5,
        name: "Çoban Salatası",
        category: "Salatalar",
        description: "Domates, salatalık, biber ve soğan ile hazırlanan geleneksel salata",
        price: 150,
        image: "https://saraylidoner.com/wp-content/uploads/2021/09/coban.jpg"
      },
      {
        id: 6,
        name: "Sezar Salata",
        category: "Salatalar",
        description: "Izgara tavuk, marul, parmesan peyniri ve özel Sezar sos ile servis edilir",
        price: 150,
        image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/tavuklu-sezar-salata.webp"
      },
      {
        id: 7,
        name: "Akdeniz Salatası",
        category: "Salatalar",
        description: "Roka, domates, salatalık, zeytin ve beyaz peynir ile hazırlanmış sağlıklı salata",
        price: 150,
        image: "https://image.hurimg.com/i/hurriyet/75/750x422/5ad60f74c03c0f16745eafe3.jpg"
      },
      {
        id: 8,
        name: "Ton Balıklı Salata",
        category: "Salatalar",
        description: "Ton balığı, marul, mısır ve kırmızı soğan ile hazırlanan hafif salata",
        price: 250,
        image: "https://iasbh.tmgrup.com.tr/0e6260/650/344/0/66/736/453?u=http://i.sabah.com.tr/sbh/2017/04/03/ton-balikli-salata-nasil-yapilir-1491219305947.jpg"
      },
      {
        id: 9,
        name: "Roka Salatası",
        category: "Salatalar",
        description: "Roka, domates, nar taneleri ve ceviz içeren özel salata",
        price: 120,
        image: "https://i.lezzet.com.tr/images-xxlarge-recipe/narli_roka_salatasi-939bcb30-d762-4397-9ce5-d1585ded5ad3.jpg"
      },
      {
        id: 10,
        name: "Yeşil Salata",
        category: "Salatalar",
        description: "Marul, kıvırcık, maydanoz ve taze soğan ile hazırlanan klasik yeşillik salatası",
        price: 120,
        image: "https://www.saglikla.com.tr/bwp-content/uploads/blog/1920x1080/salad-with-tomatoes-cheese-cilantro-sweet-sour-sauce-georgian-cuisine-healthy-food.webp"
      },
      {
        id: 29,
        name: "Marul Salatası",
        category: "Salatalar",
        description: "Taze marul yaprakları, limon suyu, zeytinyağı ve nar ekşisi ile harmanlanarak hazırlanan hafif ve lezzetli bir salata.",
        price: 150,
        image: "https://i.lezzet.com.tr/images-xxlarge-recipe/karisik_marul_salatasi-c9a60b04-e3b3-4f50-b3e5-716c64d328cf.jpg"
      }
      
    ]
  },
  
  {
    title: "Ana Yemekler",
    image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg",
    items: [
      {
        id: 11,
        name: "Etli Kuru Fasulye",
        category: "Ana Yemekler",
        description: "Özel baharatlarla hazırlanmış etli kuru fasulye, pilav ve turşu eşliğinde sunulur",
        price: 350,
        image: "https://i.pinimg.com/736x/eb/9f/51/eb9f51a8870bc8e40f9ba931426420d4.jpg"
      },
      {
        id: 22,
        name: "Hünkar Beğendi",
        category: "Ana Yemekler",
        description: "Tereyağında kavrulmuş özel dana eti ile enfes bir lezzet sunar.",
        price: 950,
        image: "https://gezginbirchef.com/wp-content/uploads/2019/08/hunkar-begendi-tarifi.jpg"
      },
      {
        id: 23,
        name: "Ali Nazik Kebabı",
        category: "Ana Yemekler",
        description: "Közlenmiş patlıcan ve yoğurt karışımı üzerine tereyağında pişirilmiş dana veya kuzu eti eklenerek hazırlanan geleneksel bir lezzet.",
        price: 430,
        image: "https://imgrosetta.mynet.com.tr/file/17373835/7b2270726f63657373223a7b2274797065223a22666f637573222c22636f6f7264696e61746573223a7b2278223a222d302e3035222c2279223a22302e3338227d7d7d/17373835-1200xauto.png"
      },
      {
        id: 24,
        name: "Mantı",
        category: "Ana Yemekler",
        description: "Özenle hazırlanan el açması hamur parçalarının içine kıymalı harç konularak kapatılıp haşlanmasıyla yapılan geleneksel lezzet. Üzerine sarımsaklı yoğurt ve tereyağlı sos ile servis edilir.",
        price: 600,
        image: "https://iasbh.tmgrup.com.tr/eed1fd/1200/627/0/8/2048/1076?u=https://isbh.tmgrup.com.tr/sbh/2022/04/28/kayseriden-gelen-enfes-bir-lezzet-ev-yapimi-manti-tarifi-1651127024213.jpg"
      },
      {
        id: 25,
        name: "Yaprak Sarma",
        category: "Ana Yemekler",
        description: "Özenle seçilmiş asma yapraklarına pirinç, soğan ve özel baharatlarla hazırlanan iç harcı eklenerek sarılır ve düşük ısıda pişirilir. Yanında limon dilimleri ile servis edilir.",
        price: 400,
        image: "https://www.teofarm.com/upload/article/antakya-usulu-zeytinyagli-yaprak-sarma-600x600.jpg"
      },
      {
        id: 26,
        name: "Güveç",
        category: "Ana Yemekler",
        description: "Toprak güveçte ağır ateşte pişirilen dana eti, taze sebzeler ve özel baharatlarla hazırlanan enfes bir lezzet. Sıcak servis edilir.",
        price: 400,
        image: "https://i.ytimg.com/vi/MhMuWLv-B6k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCisSdEuPrpbM7X9xi-ett4gzSjgw"
      }
    ]
  },
  {
    title: "Izgaralar",
    image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg",
    items: [
      {
        id: 7,
        name: "Dana Antrikot",
        category: "Izgaralar",
        description: "Özel baharatlarla marine edilmiş dana antrikot, ızgara sebzeler ve patates püresi ile servis edilir",
        price: 900,
        image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/dokum-tavada-antrikot_7_11zon.webp"
      },
      {
        id: 8,
        name: "Kuzu Pirzola",
        category: "Izgaralar",
        description: "Izgara kuzu pirzola, sotelenmiş sebzeler ve pilav eşliğinde servis edilir",
        price: 800,
        image: "https://www.bereketlahmacun.net/photo/menu_resimleri/kuzu-pirzola_6455d0f7562f9b5.jpg"
      },
      {
        id: 10,
        name: "Tavuk Şinitzel",
        category: "Izgaralar",
        description: "Altın sarısı rengiyle kızartılmış çıtır tavuk şinitzel, patates kızartması ve salata ile servis edilir",
        price: 400,
        image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/tavuk-sginitzel-712.webp"
      },
      {
        id: 11,
        name: "Izgara Köfte",
        category: "Izgaralar",
        description: "Izgara köfte, bulgur pilavı ve salata ile servis edilir",
        price: 500,
        image: "https://circirselalesi.com.tr/wp-content/uploads/2022/07/izgara-kofte-kirmizi-et.jpg"
      },
      {
        id: 12,
        name: "Izgara Tavuk Kanat",
        category: "Izgaralar",
        description: "Mangal ateşinde özenle pişirilmiş tavuk kanatları, yanında közlenmiş biber, domates ve nefis baharatlı patates ile servis edilir.",
        price: 450,
        image: "https://www.bilpagida.com.tr/uploads/userfiles/image/beypilic/kanat/mangalda-soslu-kanat.jpg"
      },
      {
        id: 3,
        name: "Tavuk Şiş",
        category: "Izgaralar",
        description: "Izgara üzerinde yavaşça pişirilmiş, özel soslarla marine edilmiş tavuk şiş, yanında közlenmiş sebzeler ve pilav ile servis edilir.",
        price: 500,
        image: "https://image.hurimg.com/i/hurriyet/75/0x0/6569ad2a4e3fe02b3cdc6eda.jpg"
      },
      {
        id: 20,
        name: "Izgara Sucuk",
        category: "Izgaralar",
        description: "Özenle seçilmiş baharatlı sucuk dilimleri, ızgara ateşinde kızartılarak sıcak servis edilir. Yanında közlenmiş biber, domates ve patates kızartması ile sunulur.",
        price: 450,
        image: "https://gkdkafe.com/resimler/urunler/41-sucuk-izgara.peg"
      },
      {
        id: 21,
        name: "Izgara Kuzu Küşleme",
        category: "Izgaralar",
        description: "Mangal ateşinde özenle pişirilmiş yumuşacık kuzu küşleme, yanında közlenmiş sebzeler, pilav ve özel baharatlı sos ile servis edilir.",
        price: 800,
        image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/blok/d/6-233.webp"
      }
      
      
      
      
      
    ]
  },
  {
    title: "Deniz Ürünleri",
    image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg",
    items: [
      {
        id: 6,
        name: "Levrek Izgara",
        category: "Deniz Ürünleri",
        description: "Taze levrek filetosu, ızgara sebzeler ile servis edilir",
        price: 450,
        image: "https://balikdunyasi.com.tr/wp-content/uploads/2021/06/Levrek-Izgara.jpg"
      },
      {
        id: 9,
        name: "Fırın Somon",
        category: "Deniz Ürünleri",
        description: "Fırında özel sos ile pişirilmiş somon, ızgara sebzeler ile servis edilir",
        price: 500,
        image: "https://imgrosetta.mynet.com.tr/file/17182802/17182802-1200xauto.png"
      },
      {
        id: 14,
        name: "Kalamar Tava",
        category: "Deniz Ürünleri",
        description: "Özel baharatlarla harmanlanmış ve çıtır çıtır kızartılmış kalamar dilimleri, yanında taze limon dilimleri ve özel tartar sos ile servis edilir.",
        price: 450,
        image: "https://www.diyetkolik.com/site_media/media/foodrecipe_images/kalamar-tavaa.jpg"
      },
      {
        id: 15,
        name: "Levrek",
        category: "Deniz Ürünleri",
        description: "Izgara ateşinde özenle pişirilmiş taze levrek, yanında roka, limon dilimleri ve özel zeytinyağlı sos ile servis edilir.",
        price: 400,
        image: "https://static.ticimax.cloud/36350/uploads/urunresimleri/buyuk/taptaze-baliklevrek-fileto-8128bd.jpg"
      },
      {
        id: 16,
        name: "Alabalık",
        category: "Deniz Ürünleri",
        description: "Izgara ateşinde yavaşça pişirilmiş taptaze alabalık, yanında yeşillik, limon dilimleri ve özel sos ile servis edilir.",
        price: 500,
        image: "https://circirselalesi.com.tr/wp-content/uploads/2021/09/alabalik-kizartma.jpg"
      },
      {
        id: 17,
        name: "Hamsi",
        category: "Deniz Ürünleri",
        description: "Taptaze Karadeniz hamsileri özel un karışımı ile pane edilerek kızartılır, yanında roka, limon dilimleri ve soğan ile servis edilir.",
        price: 400,
        image: "https://images.deliveryhero.io/image/fd-tr/LH/rs0f-listing.jpg"
      },
      {
        id: 18,
        name: "Lüfer",
        category: "Deniz Ürünleri",
        description: "Izgara ateşinde özenle pişirilmiş taze lüfer, yanında roka, limon dilimleri ve özel zeytinyağlı sos ile servis edilir.",
        price: 450,
        image: "https://www.beylerbeyidoga.com/resimler/urunler/big/1139.jpg"
      },
      {
        id: 19,
        name: "Palamut",
        category: "Deniz Ürünleri",
        description: "Izgara ateşinde pişirilmiş taptaze palamut, yanında roka, limon dilimleri ve soğan halkaları ile servis edilir.",
        price: 450,
        image: "https://static.ticimax.cloud/36350/uploads/urunresimleri/buyuk/taptaze-balikhaftanin-baligi-karadeniz-777-af.jpg"
      }
      
      
      
      
      
      

    ]
  },
  
  {
    title: "Tatlılar",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    items: [
      {
        id: 10,
        name: "Künefe",
        category: "Tatlılar",
        description: "Hatay usulü, özel peynirli künefe",
        price: 450,
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/04ec6dd767bbb83a5b97f7c994a72239/Derivates/009a0e4c88ac4a1fcffe05de641b72edaef56637.jpg"
      },
      {
        id: 11,
        name: "Baklava",
        category: "Tatlılar",
        description: "Özel tereyağlı ve Antep fıstıklı geleneksel baklava",
        price: 600,
        image: "https://www.imamcagdas.com/baklava-with-walnut-species-of-baklava-imam-cagdas-265-35-B.jpg"
      },
      {
        id: 12,
        name: "Sütlaç",
        category: "Tatlılar",
        description: "Fırında pişirilmiş klasik sütlaç, üzeri tarçın ile süslenmiş",
        price: 300,
        image: "https://ideacdn.net/idea/bi/33/myassets/blogs/blog-305.jpg?revision=1737100012"
      },
      {
        id: 13,
        name: "Trileçe",
        category: "Tatlılar",
        description: "Üç farklı süt ile hazırlanan hafif ve lezzetli tatlı",
        price: 500,
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/a47020cfc3985000ad69290e07b7aa3d/Derivates/fca766be1f628e27f9d4e6c9ffafc691405fb0b3.jpg"
      },
      {
        id: 14,
        name: "Profiterol",
        category: "Tatlılar",
        description: "İçi krema dolgulu, çikolata sos ile kaplanmış lezzetli tatlı",
        price: 400,
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/86A0BE97-A721-421D-BFE4-977718FF5734/Derivates/1CDB68C5-0B63-4A92-BF27-7822F654CDCE.jpg"
      },
      {
        id: 15,
        name: "Tiramisu",
        category: "Tatlılar",
        description: "İtalyan usulü, kahve ve mascarpone peyniri ile hazırlanan tatlı",
        price: 400,
        image: "https://www.flavoursholidays.co.uk/wp-content/uploads/2020/07/Tiramisu.jpg"
      }
    ]
  },
  {
    title: "İçecekler",
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg",
    items: [
      {
        id: 11,
        name: "Türk Kahvesi",
        category: "İçecekler",
        description: "Geleneksel yöntemle hazırlanan Türk kahvesi",
        price: 150,
        image: "https://birzamanlar.tubatux.com/wp-content/uploads/2022/04/turk-kahvesi_800x.webp"
      },
      {
        id: 12,
        name: "Ayran",
        category: "İçecekler",
        description: "Ev yapımı geleneksel ayran",
        price: 50,
        image: "https://iasbh.tmgrup.com.tr/5fc8ab/1200/800/0/0/800/533?u=https://isbh.tmgrup.com.tr/sbh/2020/09/16/bardak-ayran-kac-kalori-1600273673957.jpg"
      },
      {
        id: 13,
        name: "Taze Portakal Suyu",
        category: "İçecekler",
        description: "Günlük taze sıkılmış doğal portakal suyu",
        price: 100,
        image: "https://image.milimaj.com/i/milliyet/75/0x0/5f7765bb55427f106c67c084.jpg"
      },
      {
        id: 14,
        name: "Limonata",
        category: "İçecekler",
        description: "Ev yapımı doğal limonata, taze nane ile servis edilir",
        price: 100,
        image: "https://www.sutispangalti.com/wp-content/uploads/2020/07/ev-yapimi-limonata-2-sutis.jpg"
      },
      {
        id: 15,
        name: "Sahlep",
        category: "İçecekler",
        description: "Gerçek salep tozu ile hazırlanan sıcak içecek, tarçın ile süslenmiş",
        price: 150,
        image: "https://odulbufe.com/wp-content/uploads/2021/08/Sahlep.jpg"
      },
      {
        id: 16,
        name: "Soda",
        category: "İçecekler",
        description: "Doğal mineralli soğuk soda",
        price: 50,
        image: "https://iaahbr.tmgrup.com.tr/740bd6/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/album/2017/09/14/gunde-bir-bardak-icerseniz-1505379887771.jpg&mw=730"
      },
      {
        id: 17,
        name: "Espresso",
        category: "İçecekler",
        description: "Yoğun aromalı, İtalyan usulü espresso kahve",
        price: 200,
        image: "https://www.vinsmarket.com/class/INNOVAEditor/assets/Gorsel/Kahve/latte.jpg"
      },
      {
        id: 38,
        name: "Su",
        category: "İçecekler",
        description: "Serinletici ve tazeleyici doğal içme suyu.",
        price: 30,
        image: "https://tekinakpolat.com/wp-content/uploads/2018/12/su-bobreka.png"
      }
      
    ]
  }
  
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "Tümü"
      ? menuItems.flatMap((section) => section.items)
      : menuItems
          .find((section) => section.title === activeCategory)
          ?.items.filter((item) => item.category === activeCategory) || [];

  return (
    <section id="menu" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Menümüz
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          En seçkin malzemelerle hazırlanan geleneksel Türk mutfağının eşsiz
          lezzetleri
        </p>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-16 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                activeCategory === category
                  ? "bg-neutral-900 text-white shadow-lg scale-105"
                  : "bg-neutral-100 hover:bg-neutral-200 text-gray-700 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ${
                    hoveredItem === item.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent transition-opacity duration-500 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-emerald-600 whitespace-nowrap">
                    ₺{item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <span className="inline-block text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
