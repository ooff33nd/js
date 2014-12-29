(function() {
 
 
 var buttons = document.getElementsByTagName('button');
  
 var changeColor = function () { 
    if (this.id === 'day') {
        document.body.className = 'day';
    } else if (this.id === 'night') {
        document.body.className = 'night';
    } 
 };
 

 
 for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].addEventListener('click', changeColor, false );  
 };
 
 
 
})();  