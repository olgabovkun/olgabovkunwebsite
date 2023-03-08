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

btn.addEventListener("click", () => {
  axios({
    url: 'http://olgabovkunwebsite-dev.us-west-2.elasticbeanstalk.com/download',
    method: 'GET',
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Olga_Bovkun_CV.pdf');
    document.body.appendChild(link);
    link.click();
  }).catch(error => {
    console.log(error);
    const toast = new bootstrap.Toast(toastLive);
    errorMessage.textContent = 'Something Went Wrong. Contact me to get CV.';
    toast.show();
  });

});