// Importamos las funciones de Cucumber.js
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const request = require("supertest");


let sms = '';


let name;
let phone;
let email;
let car;
let licencePlate;


Given('que el usuario ha introducido el teléfono {string} y el nombre {string}', function (_phone, _name) {
  name = _name;
  phone = _phone;
});

Given('que esta en la página del vehículo {string}', function (_car) {
car =_car;
});

When('el usuario hace clic en Enviar', { timeout: 10000 }, async function () {
  const response = await request("http://localhost:4321/")
      .post("_actions/sendData")
      .field("phone", phone)
      .field("name", name)
      .set("Content-Type", "multipart/form-data");
  sms = response.body[0];
});

When('el usuario hace clic en Enviar mi petición', { timeout: 10000 }, async function () {
  const response = await request("http://localhost:4321/")
      .post("_actions/sendData")
      .field("phone", phone)
      .field("name", name)
      .field("car", car)
      .set("Content-Type", "multipart/form-data");

  console.log(response.body[0]);
  sms = response.body[0];
});

// Definición del paso "Entonces debería ver un mensaje de confirmación que dice"
Then('debería ver un mensaje de confirmación que dice {string} y desaparecer el popup', function (mensajeEsperado) {
  assert.strictEqual(sms, mensajeEsperado);
  console.log('Mensaje de confirmación mostrado: ' + sms);
});
Given(/^que rellena el campo de matrícula "([^"]*)"$/, function (_licencePlate) {
  licencePlate =_licencePlate;

});
When(/^el usuario hace clic en Más información$/, async function () {
  const response = await request("http://localhost:4321/")
      .post("_actions/sendData")
      .field("phone", phone)
      .field("name", name)
      .field("licence-plate", licencePlate)
      .set("Content-Type", "multipart/form-data");

  console.log(response.body[0]);
  sms = response.body[0];
});