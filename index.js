const email = document.querySelector("#email")
console.log(email)

async function copyEmail() {
const emailLink = this.getAttribute('link')
console.log(emailLink)

    try {
        await navigator.clipboard.writeText(emailLink)
        alert("Email copiado com sucesso: " + emailLink)
    } catch (error) {
        console.log(error)
    }
}

email.addEventListener("click", copyEmail)
