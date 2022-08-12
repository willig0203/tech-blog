async function homeHandler() {
  const response = await fetch("/api/main/home", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

// console.log(document);

// document.getElementById("#home").addEventListener("click", homeHandler);
