const expandAboutProjects = document.querySelector('.index-experience-learn-more');
const wrapperPojectInfo = document.querySelector('.wrapper-project-info');
const expandIcon = document.querySelector('#expand-icon');

expandAboutProjects.addEventListener('click', (event) => {
  if ((wrapperPojectInfo.classList.contains("hide-div")) ||
    (!wrapperPojectInfo.classList.contains("show-div") && !wrapperPojectInfo.classList.contains("hide-div"))) {
    wrapperPojectInfo.classList.add("show-div");
    wrapperPojectInfo.classList.remove("hide-div", "d-none");
  } else {
    wrapperPojectInfo.classList.add("hide-div");
    
    wrapperPojectInfo.classList.remove("show-div");
  }

  if ((expandIcon.classList.contains("expand-icon-rollup")) ||
    (!expandIcon.classList.contains("expand-icon-rollup") && !expandIcon.classList.contains("expand-icon-roll"))) {
    expandIcon.classList.add("expand-icon-roll");
    expandIcon.classList.remove("expand-icon-rollup");
  } else {
    expandIcon.classList.add("expand-icon-rollup");
    expandIcon.classList.remove("expand-icon-roll");
  }
});


const btn = document.querySelector(".download-cv");
const toastLive = document.getElementById("liveToast");
const errorMessage = document.getElementById("error-message");

// btn.addEventListener("click", async () => {
//   await axios({
//     url: '/download',
//     method: 'GET',
//     responseType: 'blob',
//   }).then((response) => {
//     const url = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'Olga_Bovkun_CV.pdf');
//     document.body.appendChild(link);
//     link.click();
//   }).catch(error => {
//     console.log(error);
//     const toast = new bootstrap.Toast(toastLive);
//     errorMessage.textContent = 'Something Went Wrong. Contact me to get CV.';
//     toast.show();
//   });

// });

btn.addEventListener("click", async () => {
  await fetch('/download')
  .then(resp => {
    if(resp.ok) {
      return resp.blob();
    }
    throw new Error('Something went wrong.');
  })
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Olga_Bovkun_CV.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    alert('your file has downloaded!'); // or you know, something with better UX...
  })
  .catch((error) => {
    console.log(error);
    const toast = new bootstrap.Toast(toastLive);
    errorMessage.textContent = 'Something Went Wrong. Contact me to get CV.';
    toast.show();
  });

});

//   .then(function(response) {                      // first then()
// if(response.ok)
// {
//   return response.text();         
// }

// throw new Error('Something went wrong.');
// })  
// .then(function(text) {                          // second then()
// console.log('Request successful', text);  
// })  
// .catch(function(error) {                        // catch
// console.log('Request failed', error);
// });
