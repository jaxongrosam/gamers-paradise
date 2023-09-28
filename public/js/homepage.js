const postBtn = document.getElementById("postBtn");
async function postFormHandler(event) {
  event.preventDefault();

  const name = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  const newPostParams = {
    name,
    content,
  };
  console.log(newPostParams);
  if (name && content) {
    const response = await fetch("/api/posts", {
      method: "post",
      body: JSON.stringify(newPostParams),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

postBtn.addEventListener("click", postFormHandler);
