function Car (name, model, type) {
	this.name = ((name == null) ? 'General' : name);
	this.model = ((model == null) ? 'GM' : model);
	this.type = type;
	this.numOfDoors = ((name == 'Porshe' || name == 'Koenigsegg') ? 2 : 4);
	this.numOfWheels = ((type == 'trailer') ? 8 : 4);
	this.isSaloon = ((name == 'MAN') ? false:  true);
	this.speed = '0 km/h';
	this.drive = function (spd) {
		this.speed = (type == 'trailer') ? (spd * 11) + ' km/h' : Math.ceil(spd * 28.003) + ' km/h';
	return this;
	}
}


