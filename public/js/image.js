document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
console.log("image upload clicked.");
  // Get the file input element
  const fileInput = document.querySelector('input[name="image"]');
  const selectedFile = fileInput.files[0];

  // if (!selectedFile) {
  //   console.error("No file selected.");
  //   return;
  // }

  // Create a FormData object to send the file
  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Image uploaded successfully.");
      // Handle any further actions after successful upload if needed
    } else {
      console.error("Image upload failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});




// async function imageUploadFormHandler(event) {
//     event.preventDefault();
//     console.log("heeeeeeeeeeeeeee");

//     //collect signup login information
//     const image = document.querySelector('input[type="file"]');
//     const selectedFile = fileInput.files[0];    

    
//   }
  
// document
//   .querySelector(".imageupload-form")
//   .addEventListener("submit", imageUploadFormHandler);


/* <h1>Upload a File</h1>
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file" accept=".jpg, .png, .gif">
  <button type="submit">Upload</button>
</form>

<script src="./js/image.js"></script> */

