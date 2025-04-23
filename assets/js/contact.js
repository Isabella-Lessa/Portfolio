document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch("https://formsubmit.co/ajax/isabella.lessa27@gmail.com", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.textContent = "Mensagem enviada com sucesso!";
          status.style.color = "limegreen";
          form.reset();
        } else {
          return response.json().then((data) => {
            throw new Error(data.message || "Erro ao enviar.");
          });
        }
      })
      .catch((error) => {
        status.textContent = "Erro ao enviar. Tente novamente.";
        status.style.color = "tomato";
        console.error("Erro:", error);
      });
  });
});
