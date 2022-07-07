import { faker } from '@faker-js/faker';

// export is used to make the class available to use other places
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `Username: ${this.name}`
  }
}
