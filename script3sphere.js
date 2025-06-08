const imagePath = 'images/resimlerbirthdaysv2/';
const images = [
    '0401_181_BKOKSALOGLU.png', '0501_628_IERGENC.png', '2001_200_AHEKIMOGLU.png',
    '2101_612_KSARPER.png', '0602_170_CKURTOGLU.JPG', '0902_621_DAYDEMIR.png',
    '1002_203_AKORUCU.JPG', '1202_194_NSOYBAS.JPG', '1402_613_CYILMAZ.png',
    '2302_602_KKOZACIOGLU.png', '2802_231_MULUYURT.png', '0803_645_UENER.png',
    '1003_484_BOZTURK.png', '1203_173_CTAMAM.png', '1603_220_APALABIYIK.png',
    '1703_619_TYALCIN.png', '2303_643_DBOZBEY.png', '2703_631_VPEK.png',
    '2803_177_OMERAY.JPG', '0104_623_NGULNAR.png', '0404_140_EACIMIS.png',
    '0504_235_SOZDIL.png', '0704_183_FNOYUN.JPG', '0804_172_ZKOZACIOGLU.png',
    '1004_629_CKUCUKCAN.png', '1204_192_TUTKU.JPG', '1404_209_TKUTLU.png',
    '1704_169_SCELEBI.png', '1904_229_DOZKUL.png', '2404_462_HKOCATURK.png',
    '0505_213_SKESMEN.png', '0705_608_OAPAYDIN.JPG', '2705_630_MCANBERK.png',
    '0106_626_EARMAN.png', '1606_193_CSARAYDAR.png', '2106_430_BOZBASOGLU.png',
    '2206_232_FTOPALOGLU.JPG', '2706_614_BUKET.png', '2706_197_VGEMICI.JPG',
    '0207_174_OKUTEVU.png', '0407_431_NKAVRAR.png', '0907_171_UAYSALAR.png',
    '1107_176_SSOLMAZER.png', '1307_224_BIZ.JPG', '1907_175_GSARAC.JPG',
    '0308_211_SCANTURK.png', '1308_122_OGURMAN.png', '2308_219_SURAL.png',
    '2508_178_AKOCAK.png', '2708_185_AALPTEKIN.png', '2808_196_STANGERLI.png',
    '0109_186_TODABASI.JPG', '0609_179_AOZOLMEZ.png', '0909_634_ISAYIN.png',
    '1009_603_DSABANCI.JPG', '1209_632_AMENEVSE.png', '2709_627_EGIRMEN.JPG',
    '1410_617_YGUNEY.JPG', '2110_774_DKOZACIOGLU.png', '2310_201_SVURAL.JPG',
    '0611_205_AARUNDAR.png', '0711_221_BATES.png', '0811_207_CBALCI.png',
    '1011_465_ZERGUN.png', '1711_640_SEROL.png', '2011_206_BCANATAN.JPG',
    '2511_637_HULUTURK.png', '2811_189_JKOKAZ.JPG', '0212_204_OYAYCIOGLU.png',
    '1512_223_OYILMAZ.png', '1812_610_GCAKICIOGLU.png', '1912_374_DONGUN.png',
    '2012_261_EZOHRE.JPG', '2312_190_OBENER.png', '2512_195_EFINDIKOGLU.png',
    '2712_198_BTUNCER.JPG'
];

const tagsphere = document.getElementById('tagsphere');

// Get today's date as DDMM
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const todayCode = dd + mm;

// Create container to show today's birthday person
const birthdaySidebar = document.createElement('div');
birthdaySidebar.style.position = 'fixed';
birthdaySidebar.style.top = '50px';
birthdaySidebar.style.right = '20px';
birthdaySidebar.style.background = '#fff';
birthdaySidebar.style.padding = '10px';
birthdaySidebar.style.border = '2px solid green';
birthdaySidebar.style.borderRadius = '10px';
birthdaySidebar.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
birthdaySidebar.style.textAlign = 'center';
birthdaySidebar.style.display = 'none';
document.body.appendChild(birthdaySidebar);

images.forEach(img => {
    const day = img.substring(0, 2);
    const month = img.substring(2, 4);
    const personCode = day + month;
    const name = img.split('_').pop().replace('.JPG', '');

    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const birthday = `${day} ${months[parseInt(month, 10) - 1]}`;

    const link = document.createElement('a');
    link.href = '#';
    link.title = birthday;

   const imgElement = document.createElement('img');
    imgElement.src = `${imagePath}${img}`;
    imgElement.alt = birthday;
    imgElement.width = 60;
    imgElement.height = 60;
    imgElement.style.borderRadius = '50%';
    imgElement.style.objectFit = 'cover';
    imgElement.style.aspectRatio = '1 / 1';
    imgElement.style.display = 'block';

    // Highlight today's birthday
    if (personCode === todayCode) {
        imgElement.style.border = '3px solid green';
        birthdaySidebar.innerHTML = `
            <img src="${imagePath}${img}" style="width:100px; height:100px; object-fit:cover; border-radius:50%;"><br>
            <small>${birthday}</small>
        `;
        birthdaySidebar.style.display = 'block';
    }

    link.appendChild(imgElement);
    tagsphere.appendChild(link);
});

window.onload = function () {
    try {
        TagCanvas.Start('tagcanvas', 'tagsphere', {
            textColour: null,
            outlineColour: '#ff0000',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            imageMode: "image",
            imagePosition: "random",
            clickToFront: 500,
            frontSelect: true,
            noSelect: false
        });
    } catch (e) {
        document.getElementById('tagcanvas').style.display = 'none';
        console.log("TagCanvas error:", e);
    }
};

document.addEventListener('click', function (e) {
    const a = e.target.closest('a');
    if (a && a.title) {
        e.preventDefault();

        document.querySelectorAll('#tagsphere img').forEach(img => {
            img.style.transform = 'scale(1)';
        });

        const img = a.querySelector('img');
        if (img) {
            img.style.transform = 'scale(2)';
        }

        showPopup(a.title);
    }
});

function showPopup(text) {
    const popup = document.createElement('div');
    popup.innerHTML = text;
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.background = 'rgba(0, 0, 0, 0.8)';
    popup.style.color = '#fff';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '8px';
    popup.style.zIndex = '9999';
    popup.style.fontSize = '16px';
    popup.style.textAlign = 'center';

    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 3000);
}