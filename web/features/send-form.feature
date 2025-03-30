#language: es

Característica: Enviar un formulario en la web
  Como usuario
  Quiero poder enviar un formulario de contacto
  para comunicarme con la empresa

  Escenario: Envío exitoso del formulario de contacto
    Dado que el usuario ha introducido el teléfono "658343234" y el nombre "John Contacto"
    Cuando el usuario hace clic en Enviar
    Entonces debería ver un mensaje de confirmación que dice "¡Envíado!" y desaparecer el popup
