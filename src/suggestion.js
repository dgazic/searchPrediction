var fs = require('fs');

fs.readFile('./src/long.txt', function (err, data) {
                    if (err) throw err;

});

function suggestionTool(currentText) {
	//implementirati neku magiju
	//vratiti array top 5 sugestija
}	

//sugestije trebaju raditi za do 3 riječi
//dakle suggestionTool("I am very") je legalno
//ali suggestionTool("I am very hungry") nije
//["I AM just", "I am often", "I am currently", "I am 90%"]

module.exports = suggestionTool;