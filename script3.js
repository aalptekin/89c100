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

// Add click event to enlarge or shrink the image in the month boxes
// Ensure only one image is enlarged at a time, and toggle the size of the clicked image

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const currentDay = String(today.getDate()).padStart(2, '0'); // Format as DD
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // Format as MM
    const currentDate = currentDay + currentMonth; // Format as DDMM

    let birthdayImageFound = false;

    document.querySelectorAll('.month-images img').forEach(image => {
        const filename = image.src.split('/').pop();
        const imageDate = filename.substring(0, 4); // Extract DDMM
        
        if (imageDate === currentDate) {
            birthdayImageFound = true;

            // Automatically enlarge the image
            image.classList.add('enlarged');
            image.style.zIndex = '1000'; // Ensure it stays on top
            image.style.position = 'relative'; // Ensure proper positioning
            image.style.transform = 'scale(2)'; // Enlarge the image

            // Extract text to display below the image
            const day = filename.substring(0, 2);
            const monthNumber = parseInt(filename.substring(2, 4), 10);
            const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
            const monthName = months[monthNumber - 1] || "Unknown";
            const textToDisplay = `${day}-${monthName}`;

            // Create and display the label inside the enlarged image
            const label = document.createElement('div');
            label.classList.add('image-label');
            label.textContent = textToDisplay;
            label.style.position = 'absolute';
            label.style.color = 'white';
            label.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            label.style.padding = '5px 10px';
            label.style.borderRadius = '5px';
            label.style.bottom = '5px'; // Position at the bottom inside the image
            label.style.left = '50%';
            label.style.transform = 'translate(-50%, 0)'; // Center horizontally
            label.style.zIndex = '1001';
            label.style.width = 'auto';

            image.parentElement.style.position = 'relative';
            image.parentElement.appendChild(label);
        }
    });

    if (!birthdayImageFound) {
        console.log("No birthdays today.");
    }
});

// Ensure images remain clickable for toggling size
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG' && event.target.closest('.month-images')) {
        const allImages = document.querySelectorAll('.month-images img');
        const image = event.target;

        // If the clicked image is already enlarged, revert it to original size
        if (image.classList.contains('enlarged')) {
            image.classList.remove('enlarged');
            image.style.zIndex = ''; // Reset z-index
            image.style.position = ''; // Reset position
            image.style.transform = ''; // Reset transform
            const label = image.parentElement.querySelector('.image-label');
            if (label) label.remove(); // Remove the text label
            return; // Exit function to prevent re-enlarging
        }

        // Remove enlarged styles and labels from all images
        allImages.forEach(img => {
            img.classList.remove('enlarged');
            img.style.zIndex = ''; // Reset z-index
            img.style.position = ''; // Reset position
            img.style.transform = ''; // Reset transform
            const label = img.parentElement.querySelector('.image-label');
            if (label) label.remove(); // Remove the text label
        });

        // Enlarge the clicked image
        image.classList.add('enlarged');
        image.style.zIndex = '1000'; // Ensure it stays on top
        image.style.position = 'relative'; // Ensure proper positioning
        image.style.transform = 'scale(2)'; // Enlarge the image

        // Extract the first 4 characters of the filename
        const filename = image.src.split('/').pop();
        const day = filename.substring(0, 2); // First two characters (day)
        const monthNumber = parseInt(filename.substring(2, 4), 10); // Last two characters (month as number)

        // Map month number to month name
        const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
        const monthName = months[monthNumber - 1] || "Unknown"; // Handle invalid cases
        const textToDisplay = `${day}-${monthName}`;

        // Create and display the label inside the enlarged image, at the bottom
        const label = document.createElement('div');
        label.classList.add('image-label');
        label.textContent = textToDisplay;
        label.style.position = 'absolute';
        label.style.color = 'white';
        label.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        label.style.padding = '5px 10px';
        label.style.borderRadius = '5px';
        label.style.bottom = '5px'; // Position at the bottom inside the image
        label.style.left = '50%';
        label.style.transform = 'translate(-50%, 0)'; // Center horizontally
        label.style.zIndex = '1001';
        label.style.width = 'auto';

        image.parentElement.style.position = 'relative'; // Ensure parent container allows absolute positioning
        image.parentElement.appendChild(label);
    }
});






document.addEventListener('DOMContentLoaded', () => {
    const footer = document.createElement('footer');
    footer.textContent = "TAC89 © 2025";
    footer.style.position = 'bottom';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.width = '100%';
    footer.style.color = 'gray';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px 0';

    document.body.appendChild(footer);
});

