import stringUtils from 'app/stringUtils.js';
import numberUtils from 'app/amd/utils.js';
import $ from 'jquery';
import minicolors from 'claviska/jquery-minicolors';
import 'minicolors.css';

console.log(stringUtils.reverse('reverse me'));
console.log(numberUtils.cube(10));

$('#colorPicker').minicolors();
