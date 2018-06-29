
$.index.open();
$.index.layout = 'vertical';

// var label = Ti.UI.createLabel({
	// color : 'black',
	// top : 30,
	// text : 'demo',
// });
// $.index.add(label);

var clientHttp = Ti.Network.createHTTPClient({
	onload: function(){
		// label.text = this.responseText;
		var result = JSON.parse(this.responseText);
		
		
		for(var i=0; i< result.resultados.length; i++){
			
			if(result.resultados[i].resultado != undefined){
				var label = Ti.UI.createLabel({
					color : 'black',
					top : 10,
					// bottom : 10,
					left : 10,
					text : result.resultados[i].resultado.titulo,
					height : Ti.UI.SIZE,
				});
				
				$.index.add(label);
			}
			
			
		}
		
		
	},
	onerror : function(e){
		alert(e.error);
	},
	timeout : 3000,
});

clientHttp.open('GET', 'https://gist.githubusercontent.com/addieljuarez/5518083/raw/14c5ecf04bae5cd873754dd5359efacb9dcd478c/gistfile1.json');
clientHttp.send();



// text => obj
// JSON.parse();
// 
// obj => text 
// JSON.stringify();
