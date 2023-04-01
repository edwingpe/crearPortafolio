export class persona{
    personaId?: '1';
    firstName: String;
    lastName: String;
    description: String;
    imageURL: String;

    constructor(firstName: String, lastName: String, description: String, imageURL: String) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.imageURL = imageURL;
    }
}