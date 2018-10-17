"use strict";
class AddressBook {
    constructor() {
        this.contacts = [
            {
                name: "Sarah",
                email: "sarah@yahoo.com",
                phone: "8085555555",
                relation: "sister"
            },
            {
                name: "Ben",
                email: "bmoney@gmail.com",
                phone: "5058888888",
                relation: "brother"
            }
        ];
    }
    // Make a new Contact instance and adds it to this AddressBook’s contacts
    add(info) {
        this.contacts.push(info);
    }
    // Remove the contact at the given array index in this AddressBook’s
    // contacts.
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    //  Log all of this AddressBook’s contacts to the console.
    print() {
        this.contacts.forEach((contact) => {
            console.log(`Name: ${contact.name} | Email: ${contact.email} | Phone: ${contact.phone} | Relation: ${contact.relation}`);
        });
    }
}


class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let addressBook = new AddressBook();

while (true) {
    let choice = prompt("Add, Remove, Print, or Quit?");
    if (choice === "add") {
        let name = prompt("Name?");
        let email = prompt("Email?");
        let phone = prompt("Phone?");
        let relation = prompt("Relation?");
        addressBook.add(new Contact(name, email, phone, relation));
    } else if (choice === "remove") {
        let number = prompt("Index number?");
        addressBook.deleteAt(number);
    } else if (choice === "print") {
        addressBook.print();
    } else {
        break;
    }
}
