"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const documentBuilder = new swagger_1.DocumentBuilder().setTitle("API").setDescription(`### REST

<details><summary>Detailed specification</summary>
<p>

**List:**
  - \`GET /<post>/\`
    - Get the list of **< posts >**
  - \`GET /<post>?<id>\`
    - Get the *<post>* for a given **< post_id >**
    - Output a **404** if  **< post >** is not found
  - \`GET /<post>/<preview>\`
    - Get the *<post preview>* for a given **< post_id >**
    - Output a **404** if  **< post >** is not found

**Creation / Suppression:**
  - \`<METHOD>\` is:
    - **POST** for creation
    - **Delete** for suppression
  - \`POST /<post>\`
    - Create **< post >**
    - Output (?)
  - \`DELETE /<post>/<id>\`
    - Delete **< post >**
    - Output a **404** if  **< post >** is not found
</p>
</details>`);
    if (process.env.API_VERSION) {
        documentBuilder.setVersion(process.env.API_VERSION);
    }
    const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder.build());
    swagger_1.SwaggerModule.setup("documentation", app, document, {
        swaggerOptions: {},
    });
    console.info(`Documentation: http://localhost:${process.env.PORT}/api`);
}
//# sourceMappingURL=setup-swagger.js.map