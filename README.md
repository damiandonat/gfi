# Gfi
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

# NOTE TEST
Logically you would implement greater security measures,
but in this case as a technical test and because of the project itself we do not apply them

# deployment
## linux
Run the ./deployment.sh

## windows
rm -rf package-lock.json
rm -rf node_modules
npm i

# Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Login credentials
email: 'test@gfi.com',
password: 'T3stgf1'

## Structure

├── angular.json
├── deployment.sh
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.e2e.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing
│   │   │   ├── app-routing.module.spec.ts
│   │   │   └── app-routing.module.ts
│   │   ├── modules
│   │   │   ├── films
│   │   │   │   ├── details
│   │   │   │   │   ├── details.component.css
│   │   │   │   │   ├── details.component.html
│   │   │   │   │   ├── details.component.spec.ts
│   │   │   │   │   └── details.component.ts
│   │   │   │   ├── favorites
│   │   │   │   │   ├── favorites.component.css
│   │   │   │   │   ├── favorites.component.html
│   │   │   │   │   ├── favorites.component.spec.ts
│   │   │   │   │   └── favorites.component.ts
│   │   │   │   └── list
│   │   │   │       ├── films.component.css
│   │   │   │       ├── films.component.html
│   │   │   │       ├── films.component.spec.ts
│   │   │   │       └── films.component.ts
│   │   │   └── login
│   │   │       ├── login.component.css
│   │   │       ├── login.component.html
│   │   │       ├── login.component.spec.ts
│   │   │       └── login.component.ts
│   │   └── services
│   │       ├── account
│   │       │   ├── account.service.spec.ts
│   │       │   └── account.service.ts
│   │       ├── api
│   │       │   └── films
│   │       │       ├── api.service.spec.ts
│   │       │       └── api.service.ts
│   │       ├── auth
│   │       │   ├── auth.service.spec.ts
│   │       │   └── auth.service.ts
│   │       ├── films
│   │       │   ├── films.service.spec.ts
│   │       │   └── films.service.ts
│   │       └── login
│   │           ├── login.service.spec.ts
│   │           └── login.service.ts
│   ├── assets
│   │   └── img
│   │       └── gfi.png
│   ├── browserslist
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   ├── tslint.json
│   └── utils
│       ├── api
│       │   └── film.api.js
│       └── credentials
│           └── credentials.login.js
├── tsconfig.json
└── tslint.json