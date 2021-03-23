
---

<img alt="RentX" src="./github/logoRentX.png"/>

-----

<h3 align="center">
RentX - The simplest way to rent a car!
 </h3>

<p align="center"></blockquote>

<p align="center">
  <a>What?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a>What you will see here</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a>Project installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a>Diagram</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a>Licence</a>
</p>

---

## What?

This is a fictional car rental company that offers car rental services. The mobile version of the RentX project represents the customer's vision, that is, all features present in this project are for the end user. This repository contains the API (Back-end) of the project.

Basically this is for renting a car. *(You can use the structure to rent anything !!!)*

Below are described the features that you must add to application to meet all requirements. *(This features can change any time!!!)*

---

### **1. Authentication**

Allow the creation of users and the authentication of created users. These users will be both the application administrators and the deliverers.

For this, you can create a `users` table, where all users saved in that table will be used in the authenticated routes that you access.

Admin users must have a field in the `admin` data table that will be `true`.

- Authentication can be done using JWT.

**Tip:**  Perform the validation of the input data;

The fields that users must have are:

- id (user id);
- name (user name);
- image (user profile image);
- email (user email);
- password (user password);
- admin (Boolean to define whether the user is an administrator or not);
- created_at;
- updated_at;

### 2. **Vehicle registration**

You must allow vehicles to be kept (registered / updated) in the application, these will be ** authenticated routes ** where only authenticated users, who ** are admins, ** can access it. To do this, you must create a `cars` table that will have the following ** fields: **

- id (car id);
- name (name of the car);
- brand (car brand);
- daily_value (daily rate);
- created_at;
- updated_at;

For this management, you can create routes for listing / registering / updating / removing cars;

### 3. **Specification record**

In order to register cars, it is suggested that you create a separate table that will contain the specifications shared between two or more cars. This table will have a relationship * many to one * with the table `` cars` * where the same specification can be in more than one vehicle.

Still on the specifications table, it is interesting that you store ** only ** mandatory fields such as the type of fuel and exchange. The other information (including, you do not need to stick only to the six elements that are in the layout) should be directly in the table `cars` because they are information directly linked to the vehicle. If you think of a new field that can be shared between two or more cars, it is interesting to include that table as well.

The specifications table will have the following ** fields: **

- spec_id (specification id);
- car_id (car id that will have the reference of that spec.);
- name (name of the specification);
- description (description of the spec);
- icon (name of the icon to be used to display the specification card);
- created_at;
- updated_at.

### 4. **Car rental**

You must allow rentals made and saved in your application database. To do this, you must create a `rentals` table that will have the following ** fields: **

- car_id (rental car id)
- client_id (user id responsible for renting)
- start_date (initial rental date);
- end_date (final rental date);
- created_at;
- updated_at;


### 5. **Vehicle listing**

For this functionality, you must allow the listing of vehicles according to their availability, so that when listing cars, you must enter the start date and the end date, and show only the cars that will be available in the range of that date.

In addition, you should have some filters in the listing, such as a name filter (vehicle name), value (value range), fuel filter (Gasoline, Electric, Alcohol) and a transmission filter (automatic and manual).

---

### **Project installation**


- Clone this repo:

```
> git clone https://github.com/nadalmateus/RentX
```

- Go to project folder:

```
> cd RentX
```

- Install depencies with yarn:

```
yarn
```

- Run the test: (When available)

```
yarn test
```

- And run the project:

```
yarn dev
```
---
#### **Diagram:**

<p>--
<img alt="Digram" src="./github/diagrama.png" />


---
#### **Docs:**

- This is a OpenAPI compative project, see all documentation in:

```
http://localhost:3333/api-docs/
```


## **Licence**

This project is under the MIT license.

---

<p align="center">

  <a> Made with ❤ by <a href="https://www.linkedin.com/in/nadalmateus/">Matt</a> and a little help from <a href="https://github.com/Rocketseat"> Rocketseat

</p>