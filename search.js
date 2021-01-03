function ShowHideBox (box_num) {
if (box_num > 100) {
box_num -= 100;
cfocus = false;
} else {
cfocus = true;
}
var trans_value = '';		
try {
for (x=1; x < 1000; x++){
if (document.getElementById('box_' + x).className != 'fbox') {
if (document.getElementById('box_' + x).value != '') {
trans_value = document.getElementById('box_' + x).value;

if (box_num != 9 && box_num != 10) {
if (x == 9 || x == 10) {
trans_value = '';
}
}
}
var t = window.setTimeout('SearchBoxClose('+x+')', 1);
}
}
} catch(e){}
if (document.getElementById('box_' + box_num).className != '' ) {
document.getElementById('box_' + box_num).className = '';
document.getElementById('box_' + box_num).style.width = '1px';
var t = window.setTimeout('SearchBoxOpen('+box_num+')', 1);
if (cfocus) {
document.getElementById('box_' + box_num).focus();
}
if (trans_value!='') {
document.getElementById('box_' + box_num).value = trans_value;	
}
} else {
window.focus();
}
}
function SearchBoxClose (box_num) {
box = document.getElementById('box_' + box_num)
if (box.style.width.replace('px', '') > 16) {
box.style.width = (parseInt(box.style.width.replace('px', '')) - 15) + 'px';
t = window.setTimeout('SearchBoxClose('+box_num+')', 1);
} else {
document.getElementById('box_' + box_num).className = 'fbox';
document.getElementById('button_' + box_num).title = '';
if (isOpera())
box.parentNode.parentNode.parentNode.removeAttribute('width');
}
}
function SearchBoxOpen (box_num) {
box = document.getElementById('box_' + box_num)
if (box.style.width.replace('px', '') < 95) {
box.style.width = (parseInt(box.style.width.replace('px', '')) + 15) + 'px';
var t = window.setTimeout('SearchBoxOpen('+box_num+')', 1);
} else {
if (isOpera())
box.parentNode.parentNode.parentNode.parentNode.width = '135%';
}
}
function isOpera () {
z = navigator.userAgent.indexOf('Opera');
if (z == -1)
return false;
else
return true;
}
function SearchButton (n) {
if (document.getElementById('box_' + n).className == 'fbox') {
ShowHideBox(n);
document.getElementById('button_' + n).title = 'Submit';
} else {
document.getElementById('form' + n).submit();
}
}
