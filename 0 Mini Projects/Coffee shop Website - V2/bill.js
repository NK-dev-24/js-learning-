	let unit_price = 10;


function pricelist (){
cof=[2]
tea=[5]
vada=[5]	
	for (cust=0; cust < cof.length; cust++){
		cof_total = cof[cust]*unit_price;
		tea_total = tea[cust]*unit_price;
		vada_total = vada[cust]*unit_price;
		total_price = cof_total + vada_total + tea_total;
		total_quant = cof[cust]+tea[cust]+vada[cust]
		cust_no = (Number(cust)+1)
		
		console.log("Customer: "+ cust_no);
		console.log("Items      \t Quantity   \t Price")
		console.log("======================================")
		console.log('Coffee','\t', '\t', cof[cust],'\t', '\t', cof_total);
		console.log('Tea','\t', '\t',tea[cust],'\t', '\t', tea_total);
		console.log('Vada','\t', '\t',vada[cust],'\t', '\t',vada_total);
		console.log('Total Quantity = ' + total_quant);
		console.log('Total Price = ' + total_price,'\n');
	}
}


(function () {
	if (!console) {
			console = {};
	}
	var old = console.log;
	var logger = document.getElementById('js-bill');
	console.log = function (message) {
			if (typeof message == 'object') {
					logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
			} else {
					logger.innerHTML += message + '<br />';
			}
	}
})();	

console.log(pricelist())
