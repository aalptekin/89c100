// Initialize Parse Server
Parse.initialize("burDaliPLstPolKtA7ozgIUXgvgIAbsEDDRRaall", "nlAyYXfDQpZY7cMixJCodO0rGpOrt9iAfjKfvYLd");
Parse.serverURL = 'http://burda-aaa-01.herokuapp.com/parse';

let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");
let uploadFileLabel = document.getElementById("upload-file-label");
const errorMessageElement = document.getElementById('error-message');

console.log("test 60");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

uploadFileLabel.addEventListener("click", async function () {
    console.log("test 33");
    
    uploadFileLabel.style.visibility = "hidden";

    const selectedFile = inputFile.files[0];

    if (selectedFile) {
        // Upload the image to Parse Server
        //const imageUrl = await uploadImageToParseServer(selectedFile);
        savePicture();
    }
});



async function savePicture() {
    console.log("test savePucture function");
    uploadFileLabel.style.visibility = "hidden";

    const fileInput = document.getElementById('input-file');
    const file = fileInput.files[0];

    if (!file) {
        console.error('No file selected.');
        return;
    }

    try {
        // Create a Parse File object with the selected file
        const parseFile = new Parse.File(file.name, file);
        // Save the Parse File object to the server
        const savedFile = await parseFile.save();

        // Create a Parse Object to store the picture and any other data
        const Picture = Parse.Object.extend("Picture");
        const picture = new Picture();
        picture.set("image", savedFile);
        // Add any additional data if needed
        // picture.set("caption", "A beautiful picture");

        // Save the Parse Object
        const result = await picture.save();
        console.log('Picture saved successfully:', result);
        errorMessageElement.textContent = result;
        profilePic.src = "images/ok.png";    
        uploadFileLabel.style.visibility = "visible";
    } catch (error) {
        console.error('Error saving picture:', error);
        errorMessageElement.textContent = error;
        profilePic.src = "images/nok.png";    
        uploadFileLabel.style.visibility = "visible";
    }
}
