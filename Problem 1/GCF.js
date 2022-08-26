exports.function = (x,y) => {

    const GCF = (a, b) => {
	if (b % a == 0){
		return b;
	} else {
	return GCF(b, b%a);
    }
    }
    
    return GCF(x,y)
}