E-bebek Web Otomasyon Projesi
Bu proje, e-bebek web sitesi üzerinde Playwright ve Cucumber.js kullanılarak geliştirdiğim bir test otomasyon projesidir. Proje kapsamında giriş yapma, ürün arama, sepete ekleme ve çıkış işlemleri gibi temel kullanıcı senaryoları otomatik olarak test edilmektedir.

Özellikler
Giriş yapma (Login) özelliği

Ürün arama

Sepete ürün ekleme

Hesaptan çıkış yapma

Sağlam hata yakalama ve loglama sistemi

Test hatalarında otomatik ekran görüntüsü alma

Gereksinimler
Projeyi çalıştırmak için bilgisayarınızda Node.js (18 sürümü veya daha günceli) ve npm (Node paket yöneticisi) yüklü olmalıdır.

Kurulum
Öncelikle projeyi bilgisayarınıza indirin ve proje klasörüne girin.

Gerekli paketleri yüklemek için npm install komutunu çalıştırın.

Playwright tarayıcılarını yüklemek için npx playwright install komutu ile kurulum tamamlanır.

Projenin kök dizinine .env adlı bir dosya oluşturun ve içine e-bebek kullanıcı bilgilerinizi yazın.
Örnek:
EBEBEK_EMAIL=mail_adresiniz@example.com
EBEBEK_PASSWORD=sifreniz
.env dosyası .gitignore içine dahil edilmiştir, yani versiyon kontrol sistemine eklenmez.

Proje Klasör Yapısı
features/: Cucumber senaryo dosyaları burada yer alır.

pages/: Sayfa nesne modelleri bu klasördedir. Her sayfa için ayrı bir dosya kullanılmıştır.

step_definitions/: Cucumber adım tanımlamaları burada yer alır.

utils/: Yardımcı modüller (örneğin loglama sistemi) burada bulunur.

logs/: Test çalışmaları sırasında oluşan log dosyaları bu klasörde toplanır.

screenshots/: Test sırasında oluşan hatalarda alınan ekran görüntüleri burada saklanır.

Testleri Çalıştırmak
Testleri başlatmak için terminalde proje klasöründe npm test komutunu çalıştırmanız yeterlidir.
Tüm senaryolar otomatik olarak sırasıyla çalıştırılacaktır.

Loglama ve Hata Yönetimi
Tüm sayfa nesnelerinde hata yakalama mekanizması uygulanmıştır.

Önemli işlemler ve hatalar logs/ klasöründe saklanır:

error.log yalnızca hataları içerir.

combined.log tüm olayları içerir.

Konsoldaki çıktılar renkli olarak gösterilir ve yerel geliştiriciler için kolaylık sağlar.

Ekran Görüntüleri
Test sırasında bir hata oluşursa otomatik olarak ekran görüntüsü alınır.
Örneğin:

Bir element bulunamazsa

Tıklama başarısız olursa

Sayfa yüklenmezse

Metin girişi yapılamazsa

Bu görüntüler screenshots/ klasörüne zaman damgalı şekilde kaydedilir.

Test Edilen Senaryolar
Giriş (Login):
Ana sayfa açılır, giriş butonuna tıklanır, kullanıcı bilgileri girilir ve girişin başarılı olduğu kontrol edilir.

Ürün Arama ve Sepete Ekleme:
Ürün araması yapılır, arama sonuçları doğrulanır, ilk ürün seçilir, sepete eklenir ve sepetteki ürün kontrol edilir.

Çıkış (Logout):
Hesap menüsüne girilir, çıkış yapılır ve çıkış işleminin başarılı olduğu doğrulanır.

Notlar
Proje yerel geliştirme sırasında tarayıcı açık şekilde çalışır (headed mode).

Varsayılan zaman aşımı süresi 30 saniyedir.

Log dosyaları ve ekran görüntüleri testten sonra proje içinde erişilebilir durumdadır.

🧪 Bu proje, yazılım testi alanında kendimi geliştirmek ve e-ticaret siteleri üzerinde sağlam bir test altyapısı oluşturmak amacıyla Burak Üci tarafından hazırlanmıştır...

