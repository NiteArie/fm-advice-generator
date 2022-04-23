(async () => {
    const adviceIdNode = document.querySelector(".js-advice-id");
    const adviceContentNode = document.querySelector(".js-advice");
    const adviceGenerateNode = document.querySelector(".js-random-advice-button")

    adviceGenerateNode.addEventListener("click", (event) => {
        displayAdvice();
    })

    async function displayAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice")
        const {
            slip: {
                id: adviceId,
                advice
            }
        } = await response.json();

        adviceIdNode.textContent = `# ${adviceId}`;
        adviceContentNode.innerHTML = `&#8220;${advice}&#8221;`;
    }

    displayAdvice();

})()