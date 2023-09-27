const userData = "";  // how to connect this with database... ???? 
const profileImage = document.getElementById("profileID");

if (userData.image !== "") {
  profileImage.src = userData.image;
} else {
  // If no user image is found, set the src attribute to the default placeholder image
  profileImage.src = "profile-placeholder.jpg";
};