window.addEventListener("DOMContentLoaded", function() {

  var form = document.getElementById("contact-form");
  var button = document.getElementById("contact-submit");
  var goodStatus = document.getElementById("good-status");
  var badStatus = document.getElementById("bad-status");

  // Hide Success and Error messages until form is submitted
  goodStatus.style = "display: none ";
  badStatus.style = "display: none ";

  // Success and Error functions for after the form is submitted
  function success() {
    form.reset();
    goodStatus.style = "display: block ";
    badStatus.style = "display: none ";
  }
  function error() {
    goodStatus.style = "display: none ";
    badStatus.style = "display: block ";
  }

  // Handle form submission event
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// Function for sending AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}