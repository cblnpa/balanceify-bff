<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

WIP

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Architecture

This architecture follows multiple software principles, design patterns and best practices that make your application scalable, maintainable and modular.

```
src
│── modules
│   │── user
│   │   ├── user.controller.ts   # API REST presentation
│   │   ├── user.service.ts      # business logic and use cases
│   │   ├── user.repository.ts   # persistency (DB, external API)
│   │   ├── user.entity.ts       # data model
│   │   ├── user.module.ts       # nestJS module
│── common                       # shared code
│   │── utils                    # reusable functions
│   │   ├── date.util.ts
│   │   ├── string.util.ts
│   │   ├── format.util.ts
│   │── helpers                  # classes or functions with specific reusable logic
│   │   ├── password.helper.ts
│   │   ├── jwt.helper.ts
│   │── pipes                    # custom pipes (transformation and validations)
│   │── guards                   # guards for authorization and authentication
│   │── interceptors             # global interceptors
│   │── filters                  # global excepction filters
│── config                       # app global configuration
│── main.ts
│── app.module.ts

```

### 📌 Benefits

#### 1️⃣ Modularization and High Cohesion

- **Principle applied**: Separation of Concerns (SoC) and Single Responsibility Principle (SRP).
- **Benefit**: Each module (user, product, etc.) is well-defined and isolated, allowing easy maintenance, testing and reuse.


#### 2️⃣ Decoupling and Abstraction (Low Coupling)

- **Principles applied**: 
  - Dependency Inversion Principle (DIP) (SOLID Dependency Inversion Principle).
  - Interface Segregation Principle (ISP).
  - Inversion of Control (IoC) and Dependency Injection (DI) through @Injectable() in services and repositories.

- **Benefit**: Allows you to swap implementations without affecting other layers, for example: 
  - You can switch from MongoDB to PostgreSQL just by modifying user.repository.ts.
  - You can change the business logic without affecting the API or the database.


#### 3️⃣ Clean Code and Clean Architecture

- **Pattern applied**: Clean Architecture (inspiration from Robert C. Martin).
- **Benefit**: Separates layers of presentation, application, domain and infrastructure within the same module without overloading the structure.

#### 4️⃣ Scalability and Extensibility

- **Patterns applied**: 
  - Microkernel Architecture (Plugin-based Architecture) → Each module (user, product, etc.) can be expanded without affecting other modules. 
  - Hexagonal Architecture → Business logic is isolated from the infrastructure.
- **Benefit**: You can add new modules without modifying the existing structure.


#### 5️⃣ Testability and TDD Ready

- **Principles applied**: Test-Driven Development (TDD) and Mocking with Dependency Injection. 
- **Benefit**: As each layer is separated, unit tests can be easily written:
  - You can mock repositories in service tests (user.service.ts). 
  - You can mock services in controller tests (user.controller.ts).


#### 6️⃣ Security with Guards and Interceptors

- **Applied concepts**: Middleware Pattern, Authorization Guards and Security Best Practices. 
- **Benefit**: Separates authentication and authorization using NestJS Guards:
  - `auth.guard.ts` protects routes with @UseGuards(AuthGuard). 
  - `jwt.helper.ts` handles generation and validation of JWTs.


#### 7️⃣ Reuse with Utils and Helpers

- **Patterns applied**: Utility Functions and Singleton Helper Classes.
- **Benefit**: DRY (Don't Repeat Yourself) code, which facilitates:
  - Use of `format.util.ts` in multiple modules.
  - Centralization of password hashing in `password.helper.ts`.


#### 8️⃣ Error Handling with Filters

- **Pattern applied**: Global Exception Handling with Exception Filters.
- **Benefit**: All exceptions are caught in `filters/http-exception.filter.ts`, avoiding unexpected errors in production.


#### 9️⃣ Centralized Configuration

- **Patterns applied**: Configuration Management and Environment Variable Handling. 
- **Benefit**: config/ centralizes environment variables (.env), allowing:
  - Different configurations for development, production and testing.
  - No credentials exposed in the code.

This architecture is not only clean and organized, but also follows SOLID, Clean Architecture, Inversion of Control and Microkernel Architecture principles, making it modular, scalable and testable.

🚀 Your code is ready for growth without becoming chaotic!

> 🔹 **Disclaimer**: this is a project for personal use and educational purposes. <br> The description of this architecture is the ideal to move forward with the content of the project, but possibly not 100% applicable


## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
