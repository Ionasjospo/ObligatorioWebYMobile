# ObligatorioWebYMobile Grupo 6

![](Aspose.Words.8fc8b1ab-96d6-4f65-b637-3b40dc55c63c.001.png)

Obligatorio Programación Web y Mobile

La empresa Vientos Del Este necesita diseñar e implementar un software web y mobile, el cual les permita a sus ingenieros diseñar generadores eólicos de manera eficiente para los distintos puntos geográficos del país.

![](Aspose.Words.8fc8b1ab-96d6-4f65-b637-3b40dc55c63c.002.jpeg)

Para llevar a cabo este sistema, el área de TI identificó los siguientes requerimientos:

Catálogo de piezas

Es necesario contar con un catálogo de piezas para poder identificar las diferentes partes de los generadores eólicos.

Para ello, el sistema deberá contar con un módulo de listado, creación, edición y eliminación de las piezas.

Cada pieza tiene una categoría, una foto, altura, resistencia eólica y material.

Las categorías pueden ser:

- Base
- Cuerpo
- Aspa

El listado de piezas debe poder soportar filtros por categoría y material, además de poder previsualizar la foto de la pieza.

Mapa de armado

El cometido de este módulo es poder generar el diagrama a grandes rasgos del futuro generador a ser construido.

Por lo tanto, es necesario poder visualizar las 3 partes del generador:

- Base
- Cuerpo
- Aspa

Mediante drag & drop, el usuario podrá elegir desde un listado de piezas, la pieza necesaria para cada categoría.

Al rellenar las 3 partes del generador con las piezas seleccionadas, ingresar un nombre y una descripción, el usuario podrá guardar el diagrama para ser aprobado por un auditor. Tendrá un estado que por defecto será  “PENDIENTE DE APROBACIÓN”

Módulo de aprobación

El módulo de aprobación contará con un listado de los diagramas generados y guardados del módulo de armado.

El usuario podrá elegir un diagrama, visualizarlo, aprobarlo o rechazarlo.

Este módulo también contará con un listado de todos los diseños aprobados o rechazados.

Módulo de Usuarios

El sistema deberá soportar tres tipos de usuarios:

- Administradores
- Operarios
- Auditores

Los 3 tipos de usuarios deberán poder ingresar al sistema mediante un nombre de usuario y contraseña.

Para mayor seguridad, el login proporcionará un sistema de token para validar la autenticidad del usuario.

Se sugiere que el nombre de usuario sea un mail proporcionado por el mismo.

Los usuarios además podrán recuperar sus contraseñas mediante el envío de un link a su mail (se sugiere utilizar Sendgrid) .

Administradores

Los usuarios administradores podrán crear cualquier tipo de usuario. Podrán acceder al listado de usuarios, editarlos o eliminarlos. Además, pueden acceder a cualquier funcionalidad del sistema.

Operarios

Los operarios podrán crear, eliminar, listar y editar piezas, además, serán los encargados de crear los diseños.

Auditor

El auditor es el encargado de listar los diseños con estado “PENDIENTE DE APROBACIÓN” y rechazarlos o aceptarlos.

También puede acceder a los listados de los diseños rechazados o aceptados.

Entregable

Se pide una aplicación  web y mobile que cumpla con los requerimientos previamente descritos, tomando en cuenta las salvedades del diseño para cada resolución.

Se sugiere utilizar Angular para la parte web.

Se deberá implementar una webapi desarrollada en Node JS

El sistema debe manejar algún tipo de persistencia.

Como parte del entregable final, se pide generar un documento con el diagrama de la arquitectura.
Programación Web y Mobile 2022 ![](Aspose.Words.8fc8b1ab-96d6-4f65-b637-3b40dc55c63c.003.png)
