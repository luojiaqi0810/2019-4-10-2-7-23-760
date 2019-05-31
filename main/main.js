module.exports = function main(input) {
    // write your code here...
	var price = 0;
	if (input.distance<=2)
	{
		price = 6 + 0.25 * input.parkTime;
	}
	else if (input.distance<=8)
	{
	 	price = 6 + (input.distance-2)*0.8 + 0.25*input.parkTime;
	 }
	else {
		price = 6+6*0.8+(input.distance-8)*1.2+0.25*input.parkTime;
	}


    return Math.round(price);
};
