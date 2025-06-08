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
'1107_176_SSOLMAZER.JPG', '1307_224_BIZ.JPG', '1907_175_GSARAC.JPG', 
'0308_211_SCANTURK.JPG', '1308_122_OGURMAN.JPG', '2308_219_SURAL.JPG', 
'2508_178_AKOCAK.JPG', '2708_185_AALPTEKIN.JPG', '2808_196_STANGERLI.JPG', 
'0109_186_TODABASI.JPG', '0609_179_AOZOLMEZ.JPG', '0909_634_ISAYIN.JPG', 
'1009_603_DSABANCI.JPG', '1209_632_AMENEVSE.JPG', '2709_627_EGIRMEN.JPG', 
'1410_617_YGUNEY.JPG', '2110_774_DKOZACIOGLU.JPG', '2310_201_SVURAL.JPG', 
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
        "2302": "Yaş 54 oluvermiş bile, zaman öyle hızlı ilerlemeye başladı ki yakalamak mümkün değil. Önümüzde sağlıkla yaşayacağımız yılların kıymetini bilip, anın keyfini sonuna kadar hep birlikte çıkarmak dileğiyle hepinize çok teşekkürler.",
        "2802": "Sagolun sevgili arkadaşlar🤗 Alper sen de sağol🤗 Birlikte nice mutlu doğum günleri kutlarız umarim",
        "0803": "Teşekkür ediyorum 🙏🙏🙏",
        "1003": "Çok teşekkür ederim hepinize canlarım. 🌺",
        "1203": "Teşekkür ederim dostlarım iyi ki varsınız ❤️",
        "1703": "🤩 Arkadaşlar hepinize tek tek yürekten sevgilerimi gönderiyorum, iyiki varsınız , teşekkürler ♥️🥰",
        "2303": "Hepinize ayrı ayrı teşekkür ederim. Yıllardır aynı dileği tutuyorum, bu sefer olacak!",
        "2703": "Güzel dilekleriniz için çok teşekkürler arkadaşlar🙏🏻🙏🏻🧿iyi ki varsınız hepinizi çok seviyorum🧿❤️❤️🤘🏻🤘🏻",
        "0104": "... ev hapsindeyim, kelepçelerimle kutluyorum doğum günümü 😩 Doğum günümü kutlayan kutlamayan tüm arkadaşlarım çok teşekkür ediyorum 🙏",
        "0404": "Harika mesajlarınızla 🌟 doğum günümü 🎂 kutladığınız için çok teşekkür ederim!  Hepinizi sevgiyle 💗 kucaklıyorum , iyi ki varsınız!",
        "0504": "Kardeslerim iyi dilekleriniz icin cok tesekkurler. Size de mutluluklar ve saglikli nice yaslar dilerim 😍",
        "0704": "Arkadaşlar güzel dilekleriniz için hepinize teşekkür ederim. Hep beraber nice güzel yıllar inşallah.",
        "0804": "Herkese çok çok teşekkür ederiz... nice mutlu güzel yıllara. Bu da minik Sait Aras🥰🥰",
        "1004": "Arkadaşlar hepinize tekrar teşekkür ederim. Eksik olmayın🙏",
        "1204": "Arkadaşlar hepinize doğumgünü mesajlarınız için çok teşekkür ediyorum. Hepimizin sağlıklı nice mutlu yılları olsun 😘",
        "1404": "Sağolun canlar. İyi ki varsınız.❤️😘🙏🙏",
        "1704": "Sevgili dostlar, nazik mesajlarınız ve iyi dilekleriniz için çok teşekkür ederim. Ben de Studio 54 e katılmış bulunuyorum. Ercan a sordum içerisi güzel dedi. Bakalım yarından itibaren görücez. Hepinize sevgi ve selamlarımla 🤗❤️",
        "0505": "Sevgili Dostlar çok teşekkürler, güzel mesajlarınız için. Hepinize Allah sağlık sıhhat afiyet versin. Sabır versin. İyi insanlarla karşılaştırsın. Hıdırelleziniz kutlu olsun. Sevgiler, saygılar, selamlar.",
        "0106": "Çok çok teşekkür ederim 💕🙏 duyuruyu çok meşgul ettim  biliyorum 🤭 ama herkese kalpten teşekkürler gonderiyorum 🥰🙏💕"
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
        "2302": "Yaş 54 oluvermiş bile, zaman öyle hızlı ilerlemeye başladı ki yakalamak mümkün değil. Önümüzde sağlıkla yaşayacağımız yılların kıymetini bilip, anın keyfini sonuna kadar hep birlikte çıkarmak dileğiyle hepinize çok teşekkürler.",
        "2802": "Sagolun sevgili arkadaşlar🤗 Alper sen de sağol🤗 Birlikte nice mutlu doğum günleri kutlarız umarim",
        "0803": "Teşekkür ediyorum 🙏🙏🙏",
        "1003": "Çok teşekkür ederim hepinize canlarım. 🌺",
        "1203": "Teşekkür ederim dostlarım iyi ki varsınız ❤️",
        "1703": "🤩 Arkadaşlar hepinize tek tek yürekten sevgilerimi gönderiyorum, iyiki varsınız , teşekkürler ♥️🥰",
        "2303": "Hepinize ayrı ayrı teşekkür ederim. Yıllardır aynı dileği tutuyorum, bu sefer olacak!",
        "2703": "Güzel dilekleriniz için çok teşekkürler arkadaşlar🙏🏻🙏🏻🧿iyi ki varsınız hepinizi çok seviyorum🧿❤️❤️🤘🏻🤘🏻",
        "0104": "... ev hapsindeyim, kelepçelerimle kutluyorum doğum günümü 😩 Doğum günümü kutlayan kutlamayan tüm arkadaşlarım çok teşekkür ediyorum 🙏",
        "0404": "Harika mesajlarınızla 🌟 doğum günümü 🎂 kutladığınız için çok teşekkür ederim!  Hepinizi sevgiyle 💗 kucaklıyorum , iyi ki varsınız!",
        "0504": "Kardeslerim iyi dilekleriniz icin cok tesekkurler. Size de mutluluklar ve saglikli nice yaslar dilerim 😍",
        "0704": "Arkadaşlar güzel dilekleriniz için hepinize teşekkür ederim. Hep beraber nice güzel yıllar inşallah.",
        "0804": "Herkese çok çok teşekkür ederiz... nice mutlu güzel yıllara. Bu da minik Sait Aras🥰🥰",
        "1004": "Arkadaşlar hepinize tekrar teşekkür ederim. Eksik olmayın🙏",
        "1204": "Arkadaşlar hepinize doğumgünü mesajlarınız için çok teşekkür ediyorum. Hepimizin sağlıklı nice mutlu yılları olsun 😘",
        "1404": "Sağolun canlar. İyi ki varsınız.❤️😘🙏🙏",
        "1704": "Sevgili dostlar, nazik mesajlarınız ve iyi dilekleriniz için çok teşekkür ederim. Ben de Studio 54 e katılmış bulunuyorum. Ercan a sordum içerisi güzel dedi. Bakalım yarından itibaren görücez. Hepinize sevgi ve selamlarımla 🤗❤️",
        "0505": "Sevgili Dostlar çok teşekkürler, güzel mesajlarınız için. Hepinize Allah sağlık sıhhat afiyet versin. Sabır versin. İyi insanlarla karşılaştırsın. Hıdırelleziniz kutlu olsun. Sevgiler, saygılar, selamlar.",
        "0106": "Çok çok teşekkür ederim 💕🙏 duyuruyu çok meşgul ettim  biliyorum 🤭 ama herkese kalpten teşekkürler gonderiyorum 🥰🙏💕"
        };
        const imageDate = filename.substring(0, 4);
        const motto = mottos[imageDate] || "Mesajını bekliyoruz.";

        displayPopup(`${textToDisplay}\n${motto}`);
    }
});
