# Spotify Angular Client
A sample Angular 7 app consuming spotify Web API

This project was generated with 
- [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
- [ng-swagger-gen](https://github.com/albatrosary/ng-swagger-gen): Automatic code generation for Swagger | OpenApi 
- [APIS Gusu's spotify swagger file](https://api.apis.guru/v2/specs/spotify.com/v1/swagger.json)
- [OAuth 2 and OpenId Connect (OIDC) for Angular.](https://github.com/manfredsteyer/angular-oauth2-oidc)
    - [Register Your App](https://developer.spotify.com/documentation/general/guides/app-settings/)
    - [Spotify Implicit Grant Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow)

## Generate the API
``` bash
./node_modules/.bin/ng-swagger-gen -i ./spotify.json
```
## OAuth Settings
Get the app settings from [Spotify Dashboard](https://developer.spotify.com/dashboard/applications) and edit the `AuthConfig` object in `app.component.ts` accordingly.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
