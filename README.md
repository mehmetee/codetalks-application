# codetalks-application
## codetalks  Mesajlaşma uygulaması
Bu gelişim sürecinde yaptığım bir başka uygulama.Bu uygulama bir mesajlaşma uygulaması ve tamamiyle dinamik bir yapıya sahip 
bunun yanısıra veri tabanı ile ilişkilendirilmiştir. Bu uygulamamızda başlangıç olarak bizi login erkranı karşılıyor burda eğer bir üyelik yok ise kayıt ol butonu ile
yeni bir kullanıcı oluşturuyoruz, burada verilerimizi Firebase-Authentication yardımı ile üye kayıt veya giriş form işlemlerini veritabanına kaydediyoruz.
Form ekranında basit düzeyde de olsa belli başlı giriş kontrolleri yapılıyor ve kayıt durumuna göre bize uyarı göndermekte
blidirim paneline comminty'nin geliştirmiş oduğu FlashMessage paketini import ettim ,
form yapısında ise yine comminty'nin geliştirmis olduğu Formik paketini kullandım. Kullanıcı girişi onaylandıktan sonra bizi sohbet gruplarını oluşturacağımız sayfaya yönlendiriyor
burada bizi alt tarafta sohbet odalarını oluşturabilmek için oda adını oluşturacağımız kısmı önümüze getiren bir buton bulunmakta,
üst tarafta ise uygulamadan çıkış butonu bulunmakta. Oda kurmak için oluşturulan message ekranını açtığımızda alttan kayan bir yapı mevcut bu yapıyı modal paketi ile gerçekleştirdim.
Oda kurulduktan  sonra oluşturulan oda  dinamik olarak database kaydolur .Bunu ardından oluşturulan odaların herhangi birine tıklandığında bir header  bulunmakta ve girilen
her farklı oda da  header name dinamik olarak değişiklik gösteriyor.
Mesajın ne zaman atıldığını görüntülemek için ve gelen tarih zaman bilgisini formatlamak için date-fns modülünü import ettim bu sayede daha efektif bir yapı sağlandı.





# codetalks-applications pictures
<p float="left">
<img src="https://user-images.githubusercontent.com/44464636/206876718-b9650b0a-cc00-4cfb-90b5-84a4d9b7d0df.png" width="250"/>  
 <img src="https://user-images.githubusercontent.com/44464636/206876748-f5633112-432e-46f3-be59-3147032f1ef3.png" width="250"/>
<img src="https://user-images.githubusercontent.com/44464636/206876763-38593249-84c1-41a1-9d93-6acc84655c0f.png" width="250"/> 
  </P>
  <p float="left">
 <img src="https://user-images.githubusercontent.com/44464636/206876766-6ef9fd01-611d-43c2-98c3-7a34ce01c9fe.png" width="250"/>
<img src="https://user-images.githubusercontent.com/44464636/206876782-fcbe8d7d-7c53-4249-91df-9c232b4081c7.png" width="250"/>
<img src="https://user-images.githubusercontent.com/44464636/206876785-b402f357-5629-4a63-b81d-ac1b1a70c644.png" width="250"/>
    </P>
       
# codetalks-applications videos
https://user-images.githubusercontent.com/44464636/206876868-a0d3ded1-a44a-4a3d-ba14-079c7d4f778a.mp4

