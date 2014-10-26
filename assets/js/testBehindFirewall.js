var image = new Image();

image.onerror = function() {
   alert('Site not available');
};

image.onload = function() {
   alert('Site available');
};

//try to get facebook
image.src = 'http://www.facebook.com/favicon.ico';