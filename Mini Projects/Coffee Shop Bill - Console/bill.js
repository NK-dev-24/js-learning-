	let unit_price = 10;


function pricelist (){
cof=[2,5,6]
tea=[5,4,6]
vada=[5,4,6]	
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

pricelist();