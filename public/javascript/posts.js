async function newPostFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-form-title").value.trim();
  const content = document.querySelector("post-form-content").value.trim();

  if (title && content) {
    const response = await fetch("/postNew", {
      method: "post",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".post-form")
  .addEventListener("newPostButton", newPostFormHandler);
