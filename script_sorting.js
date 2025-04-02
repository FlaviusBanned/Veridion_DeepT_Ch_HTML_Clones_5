let uploadedFiles = [];

// lista de Files
window.onload = function() {
    if (localStorage.getItem('uploadedFiles')) {
        uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles'));
        displayFiles();  
    } else {
        displayFiles();  
    }
};
``
function uploadDoc() {
    const files = document.getElementById('fileInput').files;
    for (let i = 0; i < files.length; i++) {
        uploadedFiles.push(files[i]);
    }
    uploadedFiles.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles)); 
    displayFiles();  
}

function displayFiles() {
    const fileListElement = document.getElementById('uploadedFiles');
    fileListElement.innerHTML = '';  

    if (uploadedFiles.length === 0) {
        return; 
    }

    uploadedFiles.forEach(file => {
        const listItem = document.createElement('div');
        listItem.classList.add('file-item');
        listItem.textContent = `Name: ${file.name}, Size: ${file.size} bytes`;
        fileListElement.appendChild(listItem);
    });
}

function clearFiles() {
    uploadedFiles = [];  
    localStorage.removeItem('uploadedFiles'); 
    displayFiles();  
}
function seeOutput(){
    
}
