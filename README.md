# Car registration

**Functional Requirement**
- It must be possible to register a new car.


**Non-functional requirement**
- It should not be possible to register a car with an existing license plate.
- The car must be registered, by default, with availability.
- The user responsible for the registration must be an administrator user.

# List of cars

**Functional Requirement**
- It should be possible to list all available cars
- It should be possible to list all available cars by - category name
- It should be possible to list all available cars by - brand name
- It should be possible to list all available cars by - car name

**Non-functional requirement**
- The user does not need to be logged in to the system.


# Specification registration on the car

**Functional Requirement**
- It must be possible to register a specification for a car


**Non-functional requirement**
- It should not be possible to register a specification for an unregistered car.
- It should not be possible to register an existing specification for the same car.
- The user responsible for the registration must be an administrator user.


# Registration of car images

**Functional Requirement**
- It must be possible to register the car image

**RNF**
- Use the multer to upload the files

**Non-functional requirement**
- The user must be able to register more than one image for the - same car
- The user responsible for the registration must be an administrator user.


# Car rental

**Functional Requirement**
- It must be possible to register a rental


**Non-functional requirement**
- The rental must have a minimum duration of 24 hours.
- It should not be possible to register a new rental if already - there is an open one for the same user
- It should not be possible to register a new rental if already - there is an open one for the same car
- The user must be logged in to the application
- When making a rental, the car's status must be - changed to unavailable


# Car return

**Functional Requirement**
- It must be possible to return a car

**Non-functional requirement**
- If the car is returned with less than 24 hours, it must - be charged full daily.
- When making the return, the car must be released for - another rental.
- When making the return, the user must be released - for another rental.
- When making the return, the total rent must be calculated.
- If the return time is longer than the expected delivery time, a fine will be charged - proportional to the days of delay.
- If there is a fine, it must be added to the total rent.
- The user must be logged in to the application


# Rental List for User

**Functional Requirement**
- It must be possible to search for all rentals for the user

**Non-functional requirement**
- The user must be logged in to the application


# Recover Password

**Functional Requirement**
- It must be possible for the user to recover the password by informing the email
- The user should receive an email with the step-by-step password recovery
- The user must be able to enter a new password

**Non-functional requirement**
- The user needs to enter a new password
- The link sent for recovery must expire in 3 hours

# Diagram
<img src=".github/diagram.png">