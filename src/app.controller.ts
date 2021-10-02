import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  indexRoute() {
    return `
      <h1>NestJS Shop API</h1>
      <h2>All the Routes</h2>
      <ul>
        <li>
          Get all Products @ <a href="/products">/products</a>
        </li>
        <li>
          Get all Products of Category @ <a href="/proucts/:id">/proucts/:id</a>
        </li>
        <li>
          Get Products in Price Range @ <a href="/products/price/min-max">/products/price/{min}-{max}</a>
        </li>
        <li>
          Get Products in Rating Range @ <a href="/products/rating/min-max">/products/rating/{min}-{max}</a>
        </li>
      </ul>
    `;
  }
}
