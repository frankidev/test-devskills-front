# Test DevSkills - frontend


## Requerimiento

El cliente ACME, solicita crear una página de videos recomendados. Esta página debe
contar con las siguientes funcionanlidades y caracteristicas:


    1. Un solo campo "Video" el cual acepta una `URL` o `ID` de un video de
      YouTube.
    2. Un botón "Agregar" el cual agrega este video a un listado (3) y al mismo tiempo
       comienza su reproducción.
    3. Un listado de videos agregados, con la posibilidad de elimiarlo del listado o
       comenzar su reproducción.
    4. Un reproductor de video de YouTube.


## Implementación


El diseño debe ser minimalista, dejando centrado de forma vertical y horizantal el
formulario, el listado debajo de este y el reproductor por encima de este.

```
    +--------------+
    |              |
    |   Video      |
    +--------------+

    +--------------+
    | form + botón |
    +--------------+

    +--------------+
    |              |
    |   listado... |
    |              |
    +--------------+
```

El diseño es arbitrario y podes usar el framework de CSS que quieras. Si es responsibe suma puntos!
Podes usar la `API` de YouTube o podes implementar un iframe. Recordá incluir lo
neceario para las credenciales en el `.env` si fuese necesario.


El listado debe guardarse de forma local usando `localStorage` o algún mecanismo similar
(cookies?), es importante que éste se mantenga vivo incluso después de refrescar la página.


## Tests

Opcionalmente, (suma puntos!) podes hacer los test con `jest` u otra libreria, para
validar los componentes y funcionanlidades.
