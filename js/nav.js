var fileName = location.href.replace(/\.[^/.]+$/, "").split("/").slice(-1);
$('nav a').each(function () {
  if ($(this).attr('href') == location.href.split("/").slice(-1)) { $(this).addClass("-isActive"); }
});