document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    const pictures = [
        'images/25y/UENER.JPG',
        'images/25y/USALIK.JPG',
        'images/25y/UAYSALAR.JPG',
        'images/25y/TKUTLU.JPG',
        'images/25y/SOZKASAP.JPG',
        'images/25y/SURAL.JPG',
        'images/25y/STANGERLI.JPG',
        'images/25y/SSOLMAZER.JPG',
        'images/25y/SSAYGILI.JPG',
        'images/25y/SOZDIL.JPG',
        'images/25y/SEROL.JPG',
        'images/25y/SCELEBI.JPG',
        'images/25y/OYILMAZ.JPG',
        'images/25y/OYAYCIOGLU.JPG',
        'images/25y/OKUTEVU.JPG',
        'images/25y/OGURMAN.JPG',
        'images/25y/OBENER.JPG',
        'images/25y/MULUYURT.JPG',
        'images/25y/MCANBERK.JPG',
        'images/25y/LOZTURK.JPG',
        'images/25y/KSARPER.JPG',
        'images/25y/KKOZACIOGLU.JPG',
        'images/25y/ISAYIN.JPG',
        'images/25y/IERGENC.JPG',
        'images/25y/HKOCATURK.JPG',
        'images/25y/GCAKICIOGLU.JPG',
        'images/25y/FNOYUN.JPG',
        'images/25y/EFINDIKOGLU.JPG',
        'images/25y/EARMAN.JPG',
        'images/25y/EACIMIS.JPG',
        'images/25y/DOZKUL.JPG',
        'images/25y/DONGUN.JPG',
        'images/25y/DBOZBEY.JPG',
        'images/25y/DKOZACIOGLU.JPG',
        'images/25y/DALDEMIR.JPG',
        'images/25y/CYILMAZ.JPG',
        'images/25y/CTAMAM.JPG',
        'images/25y/CKUCUKCAN.JPG',
        'images/25y/CBALCI.JPG',
        'images/25y/BOZTURK.JPG',
        'images/25y/BOZBASOGLU.JPG',
        'images/25y/BKOKSALOGLU.JPG',
        'images/25y/BATES.JPG',
        'images/25y/ATURKMEN.JPG',
        'images/25y/APALABIYIK.JPG',
        'images/25y/AOZOLMEZ.JPG',
        'images/25y/AOZKECELI.JPG',
        'images/25y/AMENEVSE.JPG',
        'images/25y/AKOCAK.JPG',
        'images/25y/AALPTEKIN.JPG',
            // Add more picture names as needed
        ];

    // Add pictures to the gallery
    pictures.forEach(picture => {
        const pictureElement = document.createElement('div');
        pictureElement.classList.add('picture');

        const imgElement = document.createElement('img');
        imgElement.src = picture;
        imgElement.alt = picture;

        pictureElement.appendChild(imgElement);
        gallery.appendChild(pictureElement);

        // Add click event listener to each picture
        pictureElement.addEventListener('click', function() {
            const originalSrc = imgElement.src;
            const additionalSrc = originalSrc.replace('.JPG', '1.JPG');
            showAdditionalPicture(imgElement, additionalSrc);
        });
    });

    // Function to show additional picture
    function showAdditionalPicture(imgElement, additionalSrc) {
        imgElement.src = additionalSrc;
    }
});
