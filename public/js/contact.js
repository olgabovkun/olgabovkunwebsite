const form = document.getElementById("messageForm");
const liveToast = document.getElementById("liveToast");
const toastMessage = document.getElementById("toastMessage");


form.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    form.classList.add('was-validated');
    
    let name, email, message;
    const formData = new FormData(form);
    for (const pair of formData.entries()) {
        if(pair[0] === 'name') {
            name = pair[1];
        }
        if(pair[0] === 'email') {
            email = pair[1];
        }
        if(pair[0] === 'message') {
            message = pair[1];
        }
    }

    await axios({
        method: 'post',
        url: '/sendMessage',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          name: name,
          email: email,
          message: message
        }
      }).then((response) => {
        liveToast.classList.add("text-bg-success");
        const toast = new bootstrap.Toast(liveToast);
        toastMessage.textContent = 'Message was sent successfully.';
        toast.show();
        form.reset();
        form.classList.remove('was-validated');
      }).catch(error => {
        liveToast.classList.add("text-bg-danger");
        const toast = new bootstrap.Toast(liveToast);
        toastMessage.textContent = "I'm sorry, but an error has occurred. Please try again later or contact me through LinkedIn.";
        toast.show();
      });
});