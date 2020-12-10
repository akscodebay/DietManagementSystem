# DietManagementSystem

## General info
This project is online diet management system using spring boot and angular and for database mysql was used.

## Table of Contents
* [Frontend](#frontend)
* [Backend](#backend)
* [Application Properties File](#application-properties-file)
	
## Frontend
* Folder named fed_angular contains angular files.
* Install the dependencies if required.

## Backend
* Folder named bed_restapi contains spring boot files.
* Install the dependencies if required.

## Application Properties File
* Make changes in ```application.properties``` file in ```bed_restapi/src/main/resources``` folder. 
* Change database name, username of database and password according to your config.
```
spring.datasource.url= jdbc:mysql://localhost:3306/<database-name>
spring.datasource.username=<username-of-your-database>
spring.datasource.password=<database-password>
```

* Change email address and password as per your mail address for sending mail through that email. 
```
spring.mail.username=<your-email-address>
spring.mail.password=<email-password>
```

* If you get message saying access issue. Need to enable that in gmail settings for sending emails.
