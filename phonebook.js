/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const Contact = require('./models/Contact');
let contacts = [
	new Contact('Peter', '+359 887 847575'),
	new Contact('John', '+359 885 545454'),

];

function getContacts(){
	return contacts;
}

function addContact(name, phone){
	let contact = new Contact(name, phone);
	contacts.push(contact);
}

module.exports = {
	getContacts,
	addContact
};