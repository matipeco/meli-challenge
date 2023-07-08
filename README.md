&nbsp;
<div align="center">
<img src="https://i.imgur.com/phR8JsG.png" alt="Mercado Libre" />
 <h1>Challenge Mercado libre</h1>
</div>


<h4>La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización
de resultados y la descripción del detalle del producto.</h4>
<ul>

<h3>Stack tecnológico</h3>
<h4>Cliente:</h4>

<li>HTML</li>
<li>CSS (deseable utilizar Sass)</li>
<li>Javascript (deseable usar React)</li>
<br />
<h4>Servidor:</h4>
<li>Node >= 6</li>
<li>Express</li>
<br />

<h3>Qué tener en cuenta</h3>
A la hora de hacer la aplicación, es importante tener en cuenta ciertos detalles como:
<br />

<li>Usabilidad</li>
<li>SEO</li>
<li>Performance</li>
<li>Escalabilidad</li>

</ul>

<p>Por problemas con Vercel (que lo detectaba como una página de phishing), no pude hacer el deploy.</p>
<br />

<a><img width="250px" src="https://i.imgur.com/LtO2JJH.png"></a>
<a><img width="250px" src="https://i.imgur.com/b2wonbP.png"/></a>
<a><img width="250px" src="https://i.imgur.com/FzZAEWm.png"/></a>
<br />

## 🤔 ¿Cómo iniciar el proyecto localmente?

Primero, clonarlo con:

```bash
git clone https://github.com/matipeco/meli-challenge.git
```

Una vez clonado, abrir el directorio raiz y ejecutar `cd api` para entrar al directorio del back. Crear un archivo .env con la siguiente variable: `PORT = 3001`. Finalmente, ejecutar `npm install` y una vez que termine, `npm run dev` para iniciar el servidor.

Realizar lo mismo para el directorio client: desde la carpeta raiz ejecutar `cd client`, crear un .env y poner la siguiente variable: `REACT_APP_SERVER_URL = http://localhost:3001`. Para iniciar el front, ejecutar primero `npm install` y después `npm start`.

<br />

&nbsp;
