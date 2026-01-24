const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const imagePath = 'images/resimlerbirthdays/';
const images = [
   '0401_181_BKOKSALOGLU.JPG', '0501_628_IERGENC.JPG', '2001_200_AHEKIMOGLU.JPG', 
'2101_612_KSARPER.JPG', 
'0602_170_CKURTOGLU.JPG', '0902_621_DAYDEMIR.JPG', '1002_203_AKORUCU.JPG', '1202_194_NSOYBAS.JPG', 
'1402_613_CYILMAZ.JPG', '2302_602_KKOZACIOGLU.JPG', '2802_231_MULUYURT.JPG', 
'0803_645_UENER.JPG', '1003_484_BOZTURK.JPG', '1203_173_CTAMAM.JPG', 
'1603_220_APALABIYIK.JPG', '1703_619_TYALCIN.JPG', 
'2303_643_DBOZBEY.JPG', '2703_631_VPEK.JPG', '2803_177_OMERAY.JPG', 
'0104_623_NGULNAR.JPG', '0404_140_EACIMIS.JPG', '0504_235_SOZDIL.JPG', '0704_183_FNOYUN.JPG', '0804_172_ZKOZACIOGLU.JPG',
'1004_629_CKUCUKCAN.JPG', '1204_192_TUTKU.JPG', '1404_209_TKUTLU.JPG', 
'1704_169_SCELEBI.JPG', '1904_229_DOZKUL.JPG', '2404_462_HKOCATURK.JPG', 
'0505_213_SKESMEN.JPG', '0705_608_OAPAYDIN.JPG', '2705_630_MCANBERK.JPG', 
'0106_626_EARMAN.JPG', '1606_193_CSARAYDAR.JPG', '2106_430_BOZBASOGLU.JPG', '2206_232_FTOPALOGLU.JPG', 
'2706_614_BUKET.JPG', '2706_197_VGEMICI.JPG', 
'0207_174_OKUTEVU.JPG', '0407_431_NKAVRAR.JPG', '0907_171_UAYSALAR.JPG', 
'1107_176_SSOLMAZER.JPG', '1307_224_BIZ.JPG', '1607_622_EINANIR.JPG', '1907_175_GSARAC.JPG', 
'0308_211_SCANTURK.JPG', '1308_122_OGURMAN.JPG', '1808_318_USALIK.JPG', '2308_219_SURAL.JPG', 
'2508_178_AKOCAK.JPG', '2708_185_AALPTEKIN.JPG', '2808_196_STANGERLI.JPG', 
'0109_186_TODABASI.JPG', '0609_179_AOZOLMEZ.JPG', '0909_634_ISAYIN.JPG', 
'1009_603_DSABANCI.JPG', '1209_632_AMENEVSE.JPG', '2409_241_IBURAT.JPG', '2709_627_EGIRMEN.JPG', 
'1410_617_YGUNEY.JPG', '2110_774_DKOZACIOGLU.JPG', '2310_201_SVURAL.JPG', '3110_625_SSAYGILI.JPG', 
'0611_205_AARUNDAR.JPG', '0711_221_BATES.JPG', '0811_207_CBALCI.JPG', 
'1011_465_ZERGUN.JPG', '1711_640_SEROL.JPG', '2011_206_BCANATAN.JPG', 
'2511_637_HULUTURK.JPG', '2811_189_JKOKAZ.JPG', 
'0212_204_OYAYCIOGLU.JPG', '1512_223_OYILMAZ.JPG', '1812_610_GCAKICIOGLU.JPG', 
'1912_374_DONGUN.JPG', '2012_261_EZOHRE.JPG', '2312_190_OBENER.JPG', 
'2512_195_EFINDIKOGLU.JPG', '2712_198_BTUNCER.JPG'



]; // Example array, replace with actual file list

// Create month boxes
months.forEach((month, index) => {
    const monthBox = document.createElement('div');
    monthBox.classList.add('month-box');

    const header = document.createElement('div');
    header.classList.add('month-header');
    header.textContent = month;
    monthBox.appendChild(header);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('month-images');

    images.forEach(img => {
        const day = img.substring(0, 2);
        const monthNumber = img.substring(2, 4);
        if (parseInt(monthNumber) === index + 1) {
            const imageElement = document.createElement('img');
            imageElement.src = `${imagePath}${img}`;
            imageElement.alt = img;
            imageElement.title = `${day}/${monthNumber}`;
            imageContainer.appendChild(imageElement);
        }
    });

    monthBox.appendChild(imageContainer);
    document.body.appendChild(monthBox);
});

// Add click event to enlarge or shrink the image in the month boxes
// Ensure only one image is enlarged at a time, and toggle the size of the clicked image

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const currentDay = String(today.getDate()).padStart(2, '0'); // Format as DD
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // Format as MM
    const currentDate = currentDay + currentMonth; // Format as DDMM

    let birthdayImageFound = false;

    // Define mottos for each image (example mappings)
    const mottos = {
        "0401" :"Cok sagolun, var olun Tesekkurler\n\nDoğum gününü paylaşan ünlüler ; Isaac Newton ve Öner Erkan ",
        "0501" :"Canım arkadaşlarım desem diyemem , doğru olmaz. Yetersiz kalır .Canım dostlarım desem diyemem , doğru olmaz. Kifayeti vurgulamaz. Kiminizle 44 yıl , kiminizle 49 yıl , her ikiside yarımasır.Çok kıymetli , çok kadim ilişki Canım KARDEŞLERİM, Doğum günümde attığınız her mesaj , ağzınızdan çıkan her güzel söz inanın kalbime dokundu. Yarım asırlık giderek kuvvetlenen bir kardeşlik, aynı sıralardan , aynı hayallerden, aynı hayat telaşından geçtik birlikte Bugün dönüp geriye baktığımda hayatımın en kıymetli parçalarından birisinin sizleri tanımak olduğunu bir kez daha hissettim. İyi ki varsınız, iyi ki birlikte büyüdük. İyi ki aynı yollarda koştuk. Stand by me filminden alınan bir alıntı ile bitirmek istiyorum. ‘12 yaşındayken sahip olduğun arkadaşları bir daha asla bulamazsın’ Her birinize kucak dolusu sevgi ve öpücükler. İyi ki varsınız\n\nDoğum gününü paylaşan ünlüler ; Bradley Cooper ve Erdal Beşikçioğlu ",
        "2001" :"Defnecim , Tubacım, Bedişcim , İltercim , Neşecim, Aylincim çok teşekkürler ❤️ iyi ki varsınız 🙏🏻 Yaa çok tatlısınız 😘❤️ Ebrucum, Samicim, Cemcim, Alpercim , Sezgincim,Orhuncum, Bahadırcım,Cenkcim, Tolgacım , Anışcım, Ayberkcim , Buketcim , Tubacım, Volkancım ve Durulcum seviyorum hepinizi❤️ şahanesiniz 😘😘😘😘 Ne mutlu bana güzel arkadaşlarım var 🙏🏻😘 İYİ Kİ TAC❤️🤍 Banucum , Özerciğim, Nacicim , Hakancım,  Utkucum, Kerimancım, Sedatcım, Duygucum, Kethancım, Ahmetcim çok teşekkürler ❤️😘 love you Burakcım, Cemcim , Güranicim , Cüneytcim çok çok teşekkürler ❤️ iyi ki varsınız 😘\n\nDoğum gününü paylaşan ünlüler ; Ayşegül 89, Buzz Aldrin",
        "2101" :"Teşekkür ederim canım arkadaşlarım 🤗 Hep birlikte sağlıklı mutlu kutlamalar yapalım inşallah  🙏🏼\n\nDoğum gününü paylaşan ünlüler ; Şerif Muhittin Targan, Yıldırım Gürses, Christian Dior ",
        "0602" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "0902" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "1002" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "1202" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "1402" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "2302": "Yaş 54 oluvermiş bile, zaman öyle hızlı ilerlemeye başladı ki yakalamak mümkün değil. Önümüzde sağlıkla yaşayacağımız yılların kıymetini bilip, anın keyfini sonuna kadar hep birlikte çıkarmak dileğiyle hepinize çok teşekkürler.\n\nDoğum gününü paylaşan ünlüler ; Hande Doğandemir ve Dakota Fanning",
        "2802": "Sagolun sevgili arkadaşlar🤗 Alper sen de sağol🤗 Birlikte nice mutlu doğum günleri kutlarız umarim\n\nDoğum gününü paylaşan ünlüler ; Çağla Şıkel ve Daniel Craig",
        "0803": "Teşekkür ediyorum 🙏🙏🙏 \n\nDoğum gününü paylaşan ünlüler ; Ekin Koç ve Freddie Prinze Jr.",
        "1003": "Çok teşekkür ederim hepinize canlarım. 🌺\n\nDoğum gününü paylaşan ünlüler ; Cansu Tosun ve Olivia Wilde ",
        "1203": "Teşekkür ederim dostlarım iyi ki varsınız ❤️\n\nDoğum gününü paylaşan ünlüler ; Berna Laçin ve Liza Minnelli",
        "1703": "🤩 Arkadaşlar hepinize tek tek yürekten sevgilerimi gönderiyorum, iyiki varsınız , teşekkürler ♥️🥰\n\nDoğum gününü paylaşan ünlüler ; Ersay Üner ve John Boyega",
        "2303": "Hepinize ayrı ayrı teşekkür ederim. Yıllardır aynı dileği tutuyorum, bu sefer olacak!\n\nDoğum gününü paylaşan ünlüler ; Hatice Aslan ve Keri Russell ",
        "2703": "Güzel dilekleriniz için çok teşekkürler arkadaşlar🙏🏻🙏🏻🧿iyi ki varsınız hepinizi çok seviyorum🧿❤️❤️🤘🏻🤘🏻\n\nDoğum gününü paylaşan ünlüler ; Binnur Kaya ve Mariah Carey",
        "0104": "... ev hapsindeyim, kelepçelerimle kutluyorum doğum günümü 😩 Doğum günümü kutlayan kutlamayan tüm arkadaşlarım çok teşekkür ediyorum 🙏\n\nDoğum gününü paylaşan ünlüler ; Ali Sunal ve Susan Boyle",
        "0404": "Harika mesajlarınızla 🌟 doğum günümü 🎂 kutladığınız için çok teşekkür ederim!  Hepinizi sevgiyle 💗 kucaklıyorum , iyi ki varsınız!\n\nDoğum gününü paylaşan ünlüler ; Seda Bakan ve Robert Downey Jr. ",
        "0504": "Kardeslerim iyi dilekleriniz icin cok tesekkurler. Size de mutluluklar ve saglikli nice yaslar dilerim 😍\n\nDoğum gününü paylaşan ünlüler ; Nurgül Yeşilçay ve Pharrell Williams",
        "0704": "Arkadaşlar güzel dilekleriniz için hepinize teşekkür ederim. Hep beraber nice güzel yıllar inşallah.\n\nDoğum gününü paylaşan ünlüler ; Haluk Bilginer ve Jackie Chan",
        "0804": "Herkese çok çok teşekkür ederiz... nice mutlu güzel yıllara. Bu da minik Sait Aras🥰🥰\n\nDoğum gününü paylaşan ünlüler ; İbrahim Tatlıses ve Patricia Arquette",
        "1004": "Arkadaşlar hepinize tekrar teşekkür ederim. Eksik olmayın🙏\n\nDoğum gününü paylaşan ünlüler ; Ömer Şerif  ve Steven Seagal",
        "1204": "Arkadaşlar hepinize doğumgünü mesajlarınız için çok teşekkür ediyorum. Hepimizin sağlıklı nice mutlu yılları olsun 😘\n\nDoğum gününü paylaşan ünlüler ; Esra Dermancıoğlu ve Claire Danes",
        "1404": "Sağolun canlar. İyi ki varsınız.❤️😘🙏🙏\n\nDoğum gününü paylaşan ünlüler ; Selen Soyder  ve Sarah Michelle Gellar ",
        "1704": "Sevgili dostlar, nazik mesajlarınız ve iyi dilekleriniz için çok teşekkür ederim. Ben de Studio 54 e katılmış bulunuyorum. Ercan a sordum içerisi güzel dedi. Bakalım yarından itibaren görücez. Hepinize sevgi ve selamlarımla 🤗❤️\n\nDoğum gününü paylaşan ünlüler ; Mahsun Kırmızıgül ve Jennifer Garner",
        "0505": "Sevgili Dostlar çok teşekkürler, güzel mesajlarınız için. Hepinize Allah sağlık sıhhat afiyet versin. Sabır versin. İyi insanlarla karşılaştırsın. Hıdırelleziniz kutlu olsun. Sevgiler, saygılar, selamlar.\n\nDoğum gününü paylaşan ünlüler ; Buket Dereoğlu ve Adele",
        "0106": "Çok çok teşekkür ederim 💕🙏 duyuruyu çok meşgul ettim  biliyorum 🤭 ama herkese kalpten teşekkürler gonderiyorum 🥰🙏💕\n\nDoğum gününü paylaşan ünlüler ; Cüneyt Arkın ve Morgan Freeman",
        "1606": "Çok teşekkür ediyorum her birinize 🙏 iyi ki varsınız 😘\n\nDoğum gününü paylaşan ünlüler ; Bensu Soral  ve Tupac Shakur",
        "2106": "Canlar hepinizi cok seviyorum opuyorum. Sagolun iyiki varsiniz\n\nDoğum gününü paylaşan ünlüler ; Müjde Ar ve Prince William ",
        "2206": "Güzel dilekleriniz için çok teşekkür ederim dostlar. İyi ki varsınız. 🙏🏻🙏🏻🙏🏻\n\nDoğum gününü paylaşan ünlüler ; Melike Güner ve Meryl Streep",
        "2706": "Buket -> Sevmek güzel , sevilmek daha güzel 💕\n\nDoğum gününü paylaşan ünlüler ; Arda Kural ve Tobey Maguire",
        "0207": "Sağolun Canlar 👋 Teşekkürler 👋\n\nDoğum gününü paylaşan ünlüler ; Seda Güven ve Margot Robbie",
        "0407": "Doğum günü kutlamalariniz için hepinize teşekkür ediyorum. İyi ki varsınız! Bu arada, müthiş bir doğum günü sürprizi oldu! Yıllar sonra Cengiz ile karşılaştık! 🧿\n\nDoğum gününü paylaşan ünlüler ; Mine Tugay ve Post Malone",
        "0907": "❤️\n\nDoğum gününü paylaşan ünlüler ; Fikret Kuşkan ve Tom Hanks",
        "1107": "Çok teşekkürler sevdiğim insanlar topluluğu, sizi yerim ⭐️🤩🙏❤️🧿\n\nDoğum gününü paylaşan ünlüler ; Damla Sönmez ve Alessia Cara",
        "1307" :"Merhaba arkadaşlar! Çok sağolun. Hepinize teşekkür ederim.Kusura bakmayın, çok kişinin doğum gününü kaçırmışım. Ben de hepinizin geçmiş doğum günlerini kutlarım! 🍻🍻🍻\n\nDoğum gününü paylaşan ünlüler ; Barış Falay ve Harrison Ford",
        "1607" :"Tekrar çok teşekkür ederim arkadaşlar. Sağolun, varolun.\n\nDoğum gününü paylaşan ünlüler ; Selda Alkor ve Will Ferrell",
        "1907" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Nil Karaibrahimgil ve Benedict Cumberbatch",
        "0308" :"Çook teşekkür ederim 🤩 mutlu yaşlara hep beraber Lets keep the fun rolling💐\n\nDoğum gününü paylaşan ünlüler ; Emre Aydın ve Tom Brady",
        "1308" :"Canım dostlarım, bu gruba her girdiğimde çiçek bahçesine girmiş gibi oluyorum, iyi ki varsınız, sizler gibi şahane insanlar tarafından anılmak müthiş onur verici, eksik olmayın sizleri seviyorum🙏🙏😘😘\n\nDoğum gününü paylaşan ünlüler ; Demet Akalın ve Sebastian Stan",
        "1808" :"Teşekkürler ediyorum hepinize hep birlikte nice yıllarımız olsun diliyorum\n\nDoğum gününü paylaşan ünlüler ; Özlem GÜrses ve Robert Redford",
        "2308" :"Sağolun arkadaşlar hepinizi öpüyorum❤️ \n\nDoğum gününü paylaşan ünlüler ; Sami Hazinses ve Rick Springfield",
        "2508" :"Sagolun, mesajlariniz beni coook mutlu ediyor. Iyi ki varsiniz.❤️.\n\nDoğum gününü paylaşan ünlüler ; Ayhan Sicimoğlu  ve Claudia Schiffer",
        "2708" :"Çok teşekkürler, insan doğum gününde özel hissediyor gerçekten. Sizin gibi arkadaşlarım olduğu için hep özel hissediyorum, sağolun varolun 😘🙏\n\nDoğum gününü paylaşan ünlüler ; Bergüzar Koral ve Aaron Paul ",
        "2808" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Ebru Gündeş ve Jack Black",
        "0109" :"Sağolun dostlar! Teşekkürler! ❤️\n\nDoğum gününü paylaşan ünlüler ; Kadir Çöpdemir ve Gloria Estefan",
        "0609" :"Çok teşekkür ederim arkadaşlar, hep birlikte güzel yaşlar alalım inşallah🙏\n\nDoğum gününü paylaşan ünlüler ; Doğu Demirkol ve Idris Elba",
        "0909" :"Çok Teşekkürler. Bugün 9 Eylül Bir ulusun özgürlüğünü mühürlediği gün Çok daha güzel günlermiz önümüzde inanıyorum Çok daha güzel bir güne uyanmak dileğim🙏🏽🙏🏽\n\nDoğum gününü paylaşan ünlüler ; Tülay Günal ve Hugh Grant",
        "1009" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Belçim Bilgin ve Colin Firth",
        "1209" :"Çok teşekkürler canlar sağolun. Hep birlikte nice güzel yıllarımız olsun 🙏😘\n\nDoğum gününü paylaşan ünlüler ; Burak Kut ve Linda Gray (SueEllen)",
        "2409" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; İsmet İnönü  ve Scott Fitzgerald",
        "2709" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Burcu Kara  ve Avril Lavigne",
        "1410" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Sibel Can ve Usher",
        "2110" :"Çok teşekkür ederim, arkadaşlar, çok sevgiler😍\n\nDoğum gününü paylaşan ünlüler ; Elif Şafak ve Kim Kardashian",
        "2310" :"Bi çentik daha attık. Sağolun arkadaşlar. Herkese sağlık, ailelere sevgiler ❤️\n\nDoğum gününü paylaşan ünlüler ; Adalet Ağaoğlu  ve Pele",
        "3110" :"Gençler çok teşekkür ediyorum ve sizi çok seviyorum iyi varsınız. ❤️😘😘😘\n\nDoğum gününü paylaşan ünlüler ; Arzum Onan  ve Vanilla Ice",
        "0611" :"Canım arkadaşlarım, iyi ki varsınız. Çok şanslıyım. ❤️🌸\n\nDoğum gününü paylaşan ünlüler ; Kanuni Sultan Süleyman ve Emma Stone",
        "0711" :"Çoook teşekkürler dostlar❤️ Arkadaşlıklar, dostluklar çok uzun yıllara dayanınca arşivden illa ki bir şeyler çıkıyor😅🙏🥰\n\nDoğum gününü paylaşan ünlüler ; İlker Yasin ve James Cook",
        "0811" :"Güzel mesajlarınız için teşekkür ederim. Beni çok mutlu ettiniz 🙏\n\nDoğum gününü paylaşan ünlüler ; Yılmaz Büyükerşen ve Alain Delon",
        "1011" :"Çook teşekkür ederim arkadaşlarım hepinize🙏\n\nDoğum gününü paylaşan ünlüler ; Mustafa Denizli ve Ajay Banga",
        "1711" :"Günaydınlar 🌺 iyi haftalar herkese…Çok çok teşekkür ediyorum herbirinize 🤩🙏🏼🤗♥️\n\nDoğum gününü paylaşan ünlüler ; Martin Scorsese ve Rachel McAdams",
        "2011" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Kerem Alışık ve Joel McHale ",
        "2511" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Göksel ve Christina Applegate ",
        "2811" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Ebru Akel ve Ed Harris",
        "0212" :"Canlar hepinizi öpüyorum, hep beraber nice sağlıklı mutlu yaşlar olsun.\n\nDoğum gününü paylaşan ünlüler ; Yahya Kemal Beyatlı ve Britney Spears",
        "1512" :"Çok tatlısınız ya. Ne kadar renkli, keyifli dostlarım, kardeşlerim var. En büyük zenginliğimsiniz.  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️\n\nDoğum gününü paylaşan ünlüler ; Necati Şaşmaz ve Don Johnson",
        "1812" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Gonca Vuslateri ve Brad Pitt",
        "1912" :"Çoook teşekkürler canlar🥰🥰Herkese çok teşekkür ederim 🙏🏻❤️😘\n\nDoğum gününü paylaşan ünlüler ; Müge Anlı ve Jennifer Beals",
        "2012" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Sezen Aksu ve JoJo",
        "2312" :"Çok teşekkür ederim arkadaşlar sizleri seviyorum ❤️ Herkese çok teşekkür ederim hayat sizlerle güzel\n\nDoğum gününü paylaşan ünlüler ; Demet Akbağ ve Carla Bruni",
        "2512" :"Çok teşekkür ederim arkadaşlarım💕🙏🏻 hayat sizinle güzel ve hep 17 😃🥰 Hep birlikte sağlıkla huzurla inşallah\n\nDoğum gününü paylaşan ünlüler ; Humphrey Bogart, Murat Bardakçı",
        "2712" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Besteci Mehmet Akif Ersoy ve Timothée Chalamet"
    };

    document.querySelectorAll('.month-images img').forEach(image => {
        const filename = image.src.split('/').pop();
        const imageDate = filename.substring(0, 4); // Extract DDMM
        
        if (imageDate === currentDate) {
            birthdayImageFound = true;

            // Enlarge the image
            toggleImageSize(image);

            // Extract text to display
            const day = filename.substring(0, 2);
            const monthNumber = parseInt(filename.substring(2, 4), 10);
            const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
            const monthName = months[monthNumber - 1] || "Unknown";
            const textToDisplay = `${day}-${monthName}`;
            
            // Get motto
            const motto = mottos[imageDate] || "Keep shining and stay positive!";
            
            displayPopup(`${textToDisplay}\n${motto}`);
        }
    });

    if (!birthdayImageFound) {
        console.log("No birthdays today.");
    }
});

// Function to toggle image size
function toggleImageSize(image) {
    const allImages = document.querySelectorAll('.month-images img');
    
    if (image.classList.contains('enlarged')) {
        // If the clicked image is already enlarged, shrink it back
        image.classList.remove('enlarged');
        image.style.zIndex = '';
        image.style.position = '';
        image.style.transform = '';
    } else {
        // Reset all other images first
        allImages.forEach(img => {
            img.classList.remove('enlarged');
            img.style.zIndex = '';
            img.style.position = '';
            img.style.transform = '';
        });
        
        // Enlarge the clicked image
        image.classList.add('enlarged');
        image.style.zIndex = '1000';
        image.style.position = 'relative';
        image.style.transform = 'scale(2)';
    }
}

// Function to create and show a popup at the top of the page
function displayPopup(text) {
    const popup = document.createElement('div');
    popup.innerHTML = text.replace(/\n/g, '<br>');
    popup.style.position = 'fixed';
    popup.style.top = '10px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.color = 'white';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '5px';
    popup.style.fontSize = '16px';
    popup.style.zIndex = '2000';
    popup.style.textAlign = 'center';

    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 10000); // Remove after 10 seconds
}

// Ensure images toggle size and display the label as a popup when clicked
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG' && event.target.closest('.month-images')) {
        const image = event.target;
        toggleImageSize(image);
        
        const filename = image.src.split('/').pop();
        const day = filename.substring(0, 2);
        const monthNumber = parseInt(filename.substring(2, 4), 10);

        const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
        const monthName = months[monthNumber - 1] || "Unknown";
        const textToDisplay = `${day}-${monthName}`;

        // Get motto
        const mottos = {
        "0401" :"Cok sagolun, var olun Tesekkurler\n\nDoğum gününü paylaşan ünlüler ; Isaac Newton ve Öner Erkan ",
        "0501" :"Canım arkadaşlarım desem diyemem , doğru olmaz. Yetersiz kalır .Canım dostlarım desem diyemem , doğru olmaz. Kifayeti vurgulamaz. Kiminizle 44 yıl , kiminizle 49 yıl , her ikiside yarımasır.Çok kıymetli , çok kadim ilişki Canım KARDEŞLERİM, Doğum günümde attığınız her mesaj , ağzınızdan çıkan her güzel söz inanın kalbime dokundu. Yarım asırlık giderek kuvvetlenen bir kardeşlik, aynı sıralardan , aynı hayallerden, aynı hayat telaşından geçtik birlikte Bugün dönüp geriye baktığımda hayatımın en kıymetli parçalarından birisinin sizleri tanımak olduğunu bir kez daha hissettim. İyi ki varsınız, iyi ki birlikte büyüdük. İyi ki aynı yollarda koştuk. Stand by me filminden alınan bir alıntı ile bitirmek istiyorum. ‘12 yaşındayken sahip olduğun arkadaşları bir daha asla bulamazsın’ Her birinize kucak dolusu sevgi ve öpücükler. İyi ki varsınız\n\nDoğum gününü paylaşan ünlüler ; Bradley Cooper ve Erdal Beşikçioğlu ",
        "2001" :"Defnecim , Tubacım, Bedişcim , İltercim , Neşecim, Aylincim çok teşekkürler ❤️ iyi ki varsınız 🙏🏻 Yaa çok tatlısınız 😘❤️ Ebrucum, Samicim, Cemcim, Alpercim , Sezgincim,Orhuncum, Bahadırcım,Cenkcim, Tolgacım , Anışcım, Ayberkcim , Buketcim , Tubacım, Volkancım ve Durulcum seviyorum hepinizi❤️ şahanesiniz 😘😘😘😘 Ne mutlu bana güzel arkadaşlarım var 🙏🏻😘 İYİ Kİ TAC❤️🤍 Banucum , Özerciğim, Nacicim , Hakancım,  Utkucum, Kerimancım, Sedatcım, Duygucum, Kethancım, Ahmetcim çok teşekkürler ❤️😘 love you Burakcım, Cemcim , Güranicim , Cüneytcim çok çok teşekkürler ❤️ iyi ki varsınız 😘\n\nDoğum gününü paylaşan ünlüler ; Ayşegül 89, Buzz Aldrin",
        "2101" :"Teşekkür ederim canım arkadaşlarım 🤗 Hep birlikte sağlıklı mutlu kutlamalar yapalım inşallah  🙏🏼\n\nDoğum gününü paylaşan ünlüler ; Şerif Muhittin Targan, Yıldırım Gürses, Christian Dior ",
        "0602" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "0902" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "1002" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "1202" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "1402" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; ",
        "2302": "Yaş 54 oluvermiş bile, zaman öyle hızlı ilerlemeye başladı ki yakalamak mümkün değil. Önümüzde sağlıkla yaşayacağımız yılların kıymetini bilip, anın keyfini sonuna kadar hep birlikte çıkarmak dileğiyle hepinize çok teşekkürler.\n\nDoğum gününü paylaşan ünlüler ; Hande Doğandemir ve Dakota Fanning",
        "2802": "Sagolun sevgili arkadaşlar🤗 Alper sen de sağol🤗 Birlikte nice mutlu doğum günleri kutlarız umarim\n\nDoğum gününü paylaşan ünlüler ; Çağla Şıkel ve Daniel Craig",
        "0803": "Teşekkür ediyorum 🙏🙏🙏 \n\nDoğum gününü paylaşan ünlüler ; Ekin Koç ve Freddie Prinze Jr.",
        "1003": "Çok teşekkür ederim hepinize canlarım. 🌺\n\nDoğum gününü paylaşan ünlüler ; Cansu Tosun ve Olivia Wilde ",
        "1203": "Teşekkür ederim dostlarım iyi ki varsınız ❤️\n\nDoğum gününü paylaşan ünlüler ; Berna Laçin ve Liza Minnelli",
        "1703": "🤩 Arkadaşlar hepinize tek tek yürekten sevgilerimi gönderiyorum, iyiki varsınız , teşekkürler ♥️🥰\n\nDoğum gününü paylaşan ünlüler ; Ersay Üner ve John Boyega",
        "2303": "Hepinize ayrı ayrı teşekkür ederim. Yıllardır aynı dileği tutuyorum, bu sefer olacak!\n\nDoğum gününü paylaşan ünlüler ; Hatice Aslan ve Keri Russell ",
        "2703": "Güzel dilekleriniz için çok teşekkürler arkadaşlar🙏🏻🙏🏻🧿iyi ki varsınız hepinizi çok seviyorum🧿❤️❤️🤘🏻🤘🏻\n\nDoğum gününü paylaşan ünlüler ; Binnur Kaya ve Mariah Carey",
        "0104": "... ev hapsindeyim, kelepçelerimle kutluyorum doğum günümü 😩 Doğum günümü kutlayan kutlamayan tüm arkadaşlarım çok teşekkür ediyorum 🙏\n\nDoğum gününü paylaşan ünlüler ; Ali Sunal ve Susan Boyle",
        "0404": "Harika mesajlarınızla 🌟 doğum günümü 🎂 kutladığınız için çok teşekkür ederim!  Hepinizi sevgiyle 💗 kucaklıyorum , iyi ki varsınız!\n\nDoğum gününü paylaşan ünlüler ; Seda Bakan ve Robert Downey Jr. ",
        "0504": "Kardeslerim iyi dilekleriniz icin cok tesekkurler. Size de mutluluklar ve saglikli nice yaslar dilerim 😍\n\nDoğum gününü paylaşan ünlüler ; Nurgül Yeşilçay ve Pharrell Williams",
        "0704": "Arkadaşlar güzel dilekleriniz için hepinize teşekkür ederim. Hep beraber nice güzel yıllar inşallah.\n\nDoğum gününü paylaşan ünlüler ; Haluk Bilginer ve Jackie Chan",
        "0804": "Herkese çok çok teşekkür ederiz... nice mutlu güzel yıllara. Bu da minik Sait Aras🥰🥰\n\nDoğum gününü paylaşan ünlüler ; İbrahim Tatlıses ve Patricia Arquette",
        "1004": "Arkadaşlar hepinize tekrar teşekkür ederim. Eksik olmayın🙏\n\nDoğum gününü paylaşan ünlüler ; Ömer Şerif  ve Steven Seagal",
        "1204": "Arkadaşlar hepinize doğumgünü mesajlarınız için çok teşekkür ediyorum. Hepimizin sağlıklı nice mutlu yılları olsun 😘\n\nDoğum gününü paylaşan ünlüler ; Esra Dermancıoğlu ve Claire Danes",
        "1404": "Sağolun canlar. İyi ki varsınız.❤️😘🙏🙏\n\nDoğum gününü paylaşan ünlüler ; Selen Soyder  ve Sarah Michelle Gellar ",
        "1704": "Sevgili dostlar, nazik mesajlarınız ve iyi dilekleriniz için çok teşekkür ederim. Ben de Studio 54 e katılmış bulunuyorum. Ercan a sordum içerisi güzel dedi. Bakalım yarından itibaren görücez. Hepinize sevgi ve selamlarımla 🤗❤️\n\nDoğum gününü paylaşan ünlüler ; Mahsun Kırmızıgül ve Jennifer Garner",
        "0505": "Sevgili Dostlar çok teşekkürler, güzel mesajlarınız için. Hepinize Allah sağlık sıhhat afiyet versin. Sabır versin. İyi insanlarla karşılaştırsın. Hıdırelleziniz kutlu olsun. Sevgiler, saygılar, selamlar.\n\nDoğum gününü paylaşan ünlüler ; Buket Dereoğlu ve Adele",
        "0106": "Çok çok teşekkür ederim 💕🙏 duyuruyu çok meşgul ettim  biliyorum 🤭 ama herkese kalpten teşekkürler gonderiyorum 🥰🙏💕\n\nDoğum gününü paylaşan ünlüler ; Cüneyt Arkın ve Morgan Freeman",
        "1606": "Çok teşekkür ediyorum her birinize 🙏 iyi ki varsınız 😘\n\nDoğum gününü paylaşan ünlüler ; Bensu Soral  ve Tupac Shakur",
        "2106": "Canlar hepinizi cok seviyorum opuyorum. Sagolun iyiki varsiniz\n\nDoğum gününü paylaşan ünlüler ; Müjde Ar ve Prince William ",
        "2206": "Güzel dilekleriniz için çok teşekkür ederim dostlar. İyi ki varsınız. 🙏🏻🙏🏻🙏🏻\n\nDoğum gününü paylaşan ünlüler ; Melike Güner ve Meryl Streep",
        "2706": "Buket -> Sevmek güzel , sevilmek daha güzel 💕\n\nDoğum gününü paylaşan ünlüler ; Arda Kural ve Tobey Maguire",
        "0207": "Sağolun Canlar 👋 Teşekkürler 👋\n\nDoğum gününü paylaşan ünlüler ; Seda Güven ve Margot Robbie",
        "0407": "Doğum günü kutlamalariniz için hepinize teşekkür ediyorum. İyi ki varsınız! Bu arada, müthiş bir doğum günü sürprizi oldu! Yıllar sonra Cengiz ile karşılaştık! 🧿\n\nDoğum gününü paylaşan ünlüler ; Mine Tugay ve Post Malone",
        "0907": "❤️\n\nDoğum gününü paylaşan ünlüler ; Fikret Kuşkan ve Tom Hanks",
        "1107": "Çok teşekkürler sevdiğim insanlar topluluğu, sizi yerim ⭐️🤩🙏❤️🧿\n\nDoğum gününü paylaşan ünlüler ; Damla Sönmez ve Alessia Cara",
        "1307" :"Merhaba arkadaşlar! Çok sağolun. Hepinize teşekkür ederim.Kusura bakmayın, çok kişinin doğum gününü kaçırmışım. Ben de hepinizin geçmiş doğum günlerini kutlarım! 🍻🍻🍻\n\nDoğum gününü paylaşan ünlüler ; Barış Falay ve Harrison Ford",
        "1607" :"Tekrar çok teşekkür ederim arkadaşlar. Sağolun, varolun.\n\nDoğum gününü paylaşan ünlüler ; Selda Alkor ve Will Ferrell",
        "1907" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Nil Karaibrahimgil ve Benedict Cumberbatch",
        "0308" :"Çook teşekkür ederim 🤩 mutlu yaşlara hep beraber Lets keep the fun rolling💐\n\nDoğum gününü paylaşan ünlüler ; Emre Aydın ve Tom Brady",
        "1308" :"Canım dostlarım, bu gruba her girdiğimde çiçek bahçesine girmiş gibi oluyorum, iyi ki varsınız, sizler gibi şahane insanlar tarafından anılmak müthiş onur verici, eksik olmayın sizleri seviyorum🙏🙏😘😘\n\nDoğum gününü paylaşan ünlüler ; Demet Akalın ve Sebastian Stan",
        "1808" :"Teşekkürler ediyorum hepinize hep birlikte nice yıllarımız olsun diliyorum\n\nDoğum gününü paylaşan ünlüler ; Özlem GÜrses ve Robert Redford",
        "2308" :"Sağolun arkadaşlar hepinizi öpüyorum❤️ \n\nDoğum gününü paylaşan ünlüler ; Sami Hazinses ve Rick Springfield",
        "2508" :"Sagolun, mesajlariniz beni coook mutlu ediyor. Iyi ki varsiniz.❤️.\n\nDoğum gününü paylaşan ünlüler ; Ayhan Sicimoğlu  ve Claudia Schiffer",
        "2708" :"Çok teşekkürler, insan doğum gününde özel hissediyor gerçekten. Sizin gibi arkadaşlarım olduğu için hep özel hissediyorum, sağolun varolun 😘🙏\n\nDoğum gününü paylaşan ünlüler ; Bergüzar Koral ve Aaron Paul ",
        "2808" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Ebru Gündeş ve Jack Black",
        "0109" :"Sağolun dostlar! Teşekkürler! ❤️\n\nDoğum gününü paylaşan ünlüler ; Kadir Çöpdemir ve Gloria Estefan",
        "0609" :"Çok teşekkür ederim arkadaşlar, hep birlikte güzel yaşlar alalım inşallah🙏\n\nDoğum gününü paylaşan ünlüler ; Doğu Demirkol ve Idris Elba",
        "0909" :"Çok Teşekkürler. Bugün 9 Eylül Bir ulusun özgürlüğünü mühürlediği gün Çok daha güzel günlermiz önümüzde inanıyorum Çok daha güzel bir güne uyanmak dileğim🙏🏽🙏🏽\n\nDoğum gününü paylaşan ünlüler ; Tülay Günal ve Hugh Grant",
        "1009" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Belçim Bilgin ve Colin Firth",
        "1209" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Gökçe Bahadır ve Emmy Rossum",
        "2409" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; İsmet İnönü  ve Scott Fitzgerald",
        "2709" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Burcu Kara  ve Avril Lavigne",
        "1410" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Sibel Can ve Usher",
        "2110" :"Çok teşekkür ederim, arkadaşlar, çok sevgiler😍\n\nDoğum gününü paylaşan ünlüler ; Elif Şafak ve Kim Kardashian",
        "2310" :"Bi çentik daha attık. Sağolun arkadaşlar. Herkese sağlık, ailelere sevgiler ❤️\n\nDoğum gününü paylaşan ünlüler ; Adalet Ağaoğlu  ve Pele",
        "3110" :"Gençler çok teşekkür ediyorum ve sizi çok seviyorum iyi varsınız. ❤️😘😘😘\n\nDoğum gününü paylaşan ünlüler ; Arzum Onan  ve Vanilla Ice",
        "0611" :"Canım arkadaşlarım, iyi ki varsınız. Çok şanslıyım. ❤️🌸\n\nDoğum gününü paylaşan ünlüler ; Kanuni Sultan Süleyman ve Emma Stone",
        "0711" :"Çoook teşekkürler dostlar❤️ Arkadaşlıklar, dostluklar çok uzun yıllara dayanınca arşivden illa ki bir şeyler çıkıyor😅🙏🥰\n\nDoğum gününü paylaşan ünlüler ; İlker Yasin ve James Cook",
        "0811" :"Güzel mesajlarınız için teşekkür ederim. Beni çok mutlu ettiniz 🙏\n\nDoğum gününü paylaşan ünlüler ; Yılmaz Büyükerşen ve Alain Delon",
        "1011" :"Çook teşekkür ederim arkadaşlarım hepinize🙏\n\nDoğum gününü paylaşan ünlüler ; Mustafa Denizli ve Ajay Banga",
        "1711" :"Günaydınlar 🌺 iyi haftalar herkese…Çok çok teşekkür ediyorum herbirinize 🤩🙏🏼🤗♥️\n\nDoğum gününü paylaşan ünlüler ; Martin Scorsese ve Rachel McAdams",
        "2011" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Kerem Alışık ve Joel McHale ",
        "2511" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Göksel ve Christina Applegate ",
        "2811" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Ebru Akel ve Ed Harris",
        "0212" :"Canlar hepinizi öpüyorum, hep beraber nice sağlıklı mutlu yaşlar olsun.\n\nDoğum gününü paylaşan ünlüler ; Yahya Kemal Beyatlı ve Britney Spears",
        "1512" :"Çok tatlısınız ya. Ne kadar renkli, keyifli dostlarım, kardeşlerim var. En büyük zenginliğimsiniz.  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️\n\nDoğum gününü paylaşan ünlüler ; Necati Şaşmaz ve Don Johnson",
        "1812" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Gonca Vuslateri ve Brad Pitt",
        "1912" :"Çoook teşekkürler canlar🥰🥰Herkese çok teşekkür ederim 🙏🏻❤️😘\n\nDoğum gününü paylaşan ünlüler ; Müge Anlı ve Jennifer Beals",
        "2012" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Sezen Aksu ve JoJo",
        "2312" :"Çok teşekkür ederim arkadaşlar sizleri seviyorum ❤️ Herkese çok teşekkür ederim hayat sizlerle güzel\n\nDoğum gününü paylaşan ünlüler ; Demet Akbağ ve Carla Bruni",
        "2512" :"Çok teşekkür ederim arkadaşlarım💕🙏🏻 hayat sizinle güzel ve hep 17 😃🥰 Hep birlikte sağlıkla huzurla inşallah\n\nDoğum gününü paylaşan ünlüler ; Humphrey Bogart, Murat Bardakçı",
        "2712" :"Mesajını bekliyoruz.\n\nDoğum gününü paylaşan ünlüler ; Besteci Mehmet Akif Ersoy ve Timothée Chalamet"
        };
        const imageDate = filename.substring(0, 4);
        const motto = mottos[imageDate] || "Mesajını bekliyoruz.";

        displayPopup(`${textToDisplay}\n${motto}`);
    }
});
