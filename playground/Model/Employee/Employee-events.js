model.Employee.age.onGet = function() {
	if (this.dateOfBirth === null) {
		return 0;
	}
	var age = 0,
		diff = 0;
		
	diff = (new Date() - this.dateOfBirth) / 1000 / (60 * 60 *24);
	age = Math.floor(diff / 365.25);
	return age;
};

model.Employee.age.onSort = function(value) {
	if (value) {
		return 'dateOfBirth desc';
	} else {
		return 'dateOfBirth';
	}
};

model.Employee.events.save = function() {
	try {
		ds.Revision.checkEntity(this);
	} catch (e) {
		return e;
	}
};