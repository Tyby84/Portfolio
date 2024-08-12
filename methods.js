window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.paddingTop = "10px";
    document.getElementById("navbar").style.paddingBottom = "10px";
  } else {
    document.getElementById("navbar").style.paddingTop = "30px";
    document.getElementById("navbar").style.paddingBottom = "30px";
  }
}