# angular8-docker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

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


## Docker Setup

You can mention the port you wnat to run your application inside the container  on the docker-compose.yml `- PORT=3000`

Mention which ports to map in docker-compose.yml. The left side is the port on your local machine,and the right side is the port inside the container
ports: - "3000:3000"

To Build the image and run the container `sudo docker compose up --build`

To Check the images   `sudo docker images` to check the containers `sudo docker ps`

To Stop the containers  `sudo docker stop containerId` or `sudo docker rm -f $(sudo docker ps -aq)`


