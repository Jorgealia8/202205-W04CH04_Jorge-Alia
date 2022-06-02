# 202205-W04CH04-Jorge_Alia
# Week 4 - Challenge 3

## Teléfono React

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

- Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
- Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
- No se puede introducir un número de más de 9 cifras.
- El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
- El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
- Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
- Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
- Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.

Separa todo en los siguientes componentes:

- Info
- Display
- Actions
  - Action
- Keyboard
  - Key

# Responsabilidades

#Info : Mensaje superior 'Calling...'. Su responsabilidad es mostar ese menaje una vez que se llame.
#Display : Su responsabilidad es renderizar los números tecleados
#Actions  
 Action : Botones de llamar y colgar.
-Call: ejecutar la llamada que implica mostrar Info. Mostrase una vez que hay 9 dígitos en le display. Desaparecer una vez que se clica para llamar.
-Hang: colgar la llamada cuando se hace click. Mostrarse una vez que se hace click sobre call y cuando desaparecer cuando se hace click sobre él.
#Keyboard
Key : cuando se hace click sobre los números que se guarde. Borar en la flecha.
