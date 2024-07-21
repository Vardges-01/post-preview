import type { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication): void {
  const documentBuilder = new DocumentBuilder().setTitle("API").setDescription(
    `### REST

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
</details>`,
  );

  if (process.env.API_VERSION) {
    documentBuilder.setVersion(process.env.API_VERSION);
  }

  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup("documentation", app, document, {
    swaggerOptions: {},
  });

  console.info(`Documentation: http://localhost:${process.env.PORT}/documentation`);
}
