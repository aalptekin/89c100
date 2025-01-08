const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const imagePath = 'images/resimlerbirthdays/';
const images = [
'0401_181_BKOKSALOGLU.JPG', '0501_628_IERGENC.JPG', '2001_200_AHEKIMOGLU.JPG', 
'2101_612_KSARPER.JPG', 
'0602_170_CKURTOGLU.JPG', '1002_203_AKORUCU.JPG', '1202_194_NSOYBAS.JPG', 
'1402_613_CYILMAZ.JPG', '2302_602_KKOZACIOGLU.JPG', '2802_231_MULUYURT.JPG', 
'1003_484_BOZTURK.JPG', '1203_173_CTAMAM.JPG', '1603_220_APALABIYIK.JPG', '1703_619_TYALCIN.JPG', 
'2303_643_DBOZBEY.JPG', '2703_631_VPEK.JPG', '2803_177_OMERAY.JPG', 
'0104_623_NGULNAR.JPG', '0404_140_EACIMIS.JPG', '0504_235_SOZDIL.JPG', 
'1004_629_CKUCUKCAN.JPG', '1204_192_TUTKU.JPG', '1404_209_TKUTLU.JPG', 
'1804_169_SCELEBI.JPG', '1904_229_DOZKUL.JPG', '2404_462_HKOCATURK.JPG', 
'0705_608_OAPAYDIN.JPG', '2705_630_MCANBERK.JPG', 
'1606_193_CSARAYDAR.JPG', '2106_430_BOZBASOGLU.JPG', '2206_232_FTOPALOGLU.JPG', 
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
