{/* <h1>Upload a File</h1>
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file" accept=".jpg, .png, .gif">
  <button type="submit">Upload</button>
</form>

<script src="./js/image.js"></script> */}


async function imageUploadFormHandler(event) {
    event.preventDefault();

    //collect signup login information
    const image = document.querySelector('input[name="file"]').value.trim();    

    // if (username && email && password) {
    //   const response = await fetch("../upload/") {
    //     method: "post",
    //     body: JSON.stringify(signUpParams),
    //     headers: { "Content-Type": "application/json" },
    //   });
  
    //   // check the response status
    //   if (response.ok) {
    //     console.log("success");
    //     document.location.replace("/profile");
    //   } 
    //   else {
    //     alert(response.statusText);
    //   };
    // }
  }
  
  document
    .querySelector(".imageupload-form")
    .addEventListener("submit", imageUploadFormHandler);
  