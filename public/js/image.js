async function imageUploadFormHandler(event) {
  event.preventDefault();
  console.log("Image upload clicked.");

  // Get the file input element
  const fileInput = document.querySelector('input[type="file"]');
  const selectedFile = fileInput.files[0];

  if (!selectedFile) {
    console.error("No file selected.");
    return;
  }

  // Create a FormData object to send the file
  const formData = new FormData();
  formData.append("image", selectedFile); // Make sure the field name matches the server-side name

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Image uploaded successfully.");
      // Handle any further actions after successful upload if needed
    } else {
      console.error("Image upload failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
  
document
  .querySelector(".imageupload-form")
  .addEventListener("submit", imageUploadFormHandler);
