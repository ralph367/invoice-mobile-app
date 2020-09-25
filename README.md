# Invoice mobile application

This is a repository for issuing an invoice for a customer. You will be able to create/edit/remove items/customers/invoices and finally send the invoice by email to the chosen customer .
## Disclaimer this is just a simple example for testing and developing not for production use

## Prerequistes 

Tested on:
- Windows 10
- Andoird 8.0

Install:
- React Native 0.63.1
- Nodejs 
- Expressjs
- Sequelize
- Nodemailer
- Expo CLI

## Installation

Clone the front and backend repositories:
- Open any terminal and change directory into the backend folder then use: `npm run dev`
- Open another termninal and change directory into the frontend folder then use: `npm install && expo start`

## Documentation

### Expressjs

In the following system expressjs is only being used to save the items, customers and invoices data, these actions will be triggered using API by the help of Sequelize
| Methods | URLs              | Actions                       |
|---------|-------------------|-------------------------------|
| POST    | /api/items/       | create a new item             |
| POST    | /api/customers/   | create a new customer         |
| POST    | /api/invoices/    | create a new invoice          |
| POST    | /api/invoices/send| sned the invoice by email     |
| GET     | /api/items/       | get all the available items   |
| GET     | /api/items/:id/   | get item data by id           |
| GET     | /api/customers/   | get all the customers         |
| GET     | /api/customers/:id| get customers by id           |
| GET     | /api/invoices/    | get all invoices              |
| GET     | /api/invoices/:id | get invoice by id             |
| DELETE  | /api/items/:id/   | delete the itme by id         |
| DELETE  | /api/customers/:id| delete the custoemer by id    |
| DELETE  | /api/invoices/:id | delete the invoice by id    |

### React Native

React is used to run the cliend application on the mobile.

