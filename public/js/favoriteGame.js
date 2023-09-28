const favBtn = document.querySelectorAll(".favBtn");

async function favoriteGameHandler(event) {
  event.preventDefault();

  const userId = event.target.getAttribute("data-userid");
  const gameId = event.target.getAttribute("data-gameid");

  console.log("userId: ", userId);
  console.log("gameId: ", gameId);

  if (userId && gameId) {
    const response = await fetch("/api/favoriteGame", {
      method: "post",
      body: JSON.stringify({userId, gameID}),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

postBtn.addEventListener("click", favoriteGameHandler);