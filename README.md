Bu proje, farklı kategorilerde (Şehirler, Yemekler, Kuruyemiş, Ünlüler vb.) tekli eleme (single-elimination) mantığıyla turnuva oluşturan bir React uygulamasıdır. Kullanıcı, ana sayfada istediği kategoriyi seçer ve her turda iki seçenek karşılaştırarak kazananı bir sonraki tura taşır. En sonunda tek bir kazanan belirlenir.

KURULUM VE AÇILIŞ
VS Code içinde File → Open Folder... menüsüne git.
Az önce çıkarttığın klasörü (ör. my-uwuwfu-game) seç.
VS Code sol tarafta proje dosyalarını gösterecektir.
Terminal (Komut Satırı) Aç

VS Code’da View → Terminal menüsünden veya Ctrl + Shift + \ (Windows) tuş kombinasyonuyla bir terminal penceresi açabilirsin.
Terminalde, projenin kök dizininde olduğundan emin ol. Örneğin, satırda my-uwuwfu-game gibi bir şey yazıyor olmalı.
Bağımlılıkları (Dependencies) Yükle

Proje içinde Node.js ve npm kullanıldığı için, Node.js kurulu olmalı. (Eğer yoksa, https://nodejs.org adresinden LTS sürümünü indirip kur.)
Terminalde şu komutu yaz:
npm install

Uygulamayı Başlat

Kurulum tamamlandıktan sonra şu komutla projeyi çalıştır:
bash
Kopyala
npm start
Başarılı olursa, terminalde “Compiled successfully” benzeri bir mesaj görürsün ve tarayıcı otomatik olarak http://localhost:3000 adresini açar (React varsayılan).
Eğer otomatik açılmazsa, tarayıcında elle http://localhost:3000 yazabilirsin.
![Ekran görüntüsü 2025-02-22 141737](https://github.com/user-attachments/assets/e5d8d2c9-6ddd-4975-88f6-7a15ad0a5d9a)
![Ekran görüntüsü 2025-02-22 141652](https://github.com/user-attachments/assets/bd1bece5-00c7-4cc4-a69f-d53c02813753)
![Ekran görüntüsü 2025-02-22 141638](https://github.com/user-attachments/assets/2b6d94d3-b014-4f97-bb4d-8afe17fe108a)
![Ekran görüntüsü 2025-02-22 141624](https://github.com/user-attachments/assets/4f837ffb-e14b-4607-9d2a-7fa816b559f3)



