const classNames = (obj) => {
		let arr = [];
		for (let key in obj) {
			if(obj[key] == true) {
				arr.push(key);
			}
		}
		return arr.join(" ");
	}

export default classNames;