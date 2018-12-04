const stylesString = `
  background-color: #fff;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height: 40px;
  outline: 0;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: auto;
`;
var raws = stylesString.split(';');
var result = {};

for(var i = 0; i < raws.length; i++){
	var	raw = raws[i].split(':');
	var property = raw[0];
	property = property.replace(/\s/g, '');
	var value = raw[1];
	console.log('value:', value);
	value = value.replace(/\s/g, '');
	result[property] = value;
	
}
console.log(result);

