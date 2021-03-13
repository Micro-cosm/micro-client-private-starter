# MicroClientPrivateStarter
_A quickstart project that quickly/easily bootstraps a testable/deployable/runnable authenticated 
Angular micro-frontend(a.k.a. **miffy**) that encourages rapid iteration and supports micro-cms content in the form of GraphQL datasources.
Because our of the shared common purpose, **we are quick to respond to your hackathon team needs... your win IS our win!**_

----
**Caution:**  Be aware this project is heavily-opinionated with a bias towards action and to the Nodejs(Typescript)/GoLang/Angular(CLI)/Google(GCP)/Kubernetes ecosystems and will be quick to contribute early/often any opinions, preferably in code,
to any relevant dependencies that share our penchant.

Your feedback and perspective is **ALWAYS** valued.  Chances are, if this broad ecosystem(s) is not to your liking or important to your world, 
then this project is probably not quite right for you, feel free to quietly move along.

We do avidly pursue a better way to quickly develop/deploy miffys and their supporting architectures, however, we do not necessarily consider ourselves
experts in any facet of this endeavor, nor do we strive to promote our own brilliance beyond the wisdom of our own crowd that share a common curiousity and 
enthusiasm to expose ourselves to the broadest spectrun of technology without the PITA associated with things that do not matter, so we can see concepts in
an always-on mode.  None of us is smarter than all of you.  IOWs, we are interested in the conversation not in your pursuit of reputation, so, as always,
a little humility, enthusiasm, and respect for the weakest among us is a big deal, d-bags need not apply.  Maybe help each other out, especially us newbs,
we want to be productive, participate, and contribute across the broadest possible spectrum of development.

This project will ALWAYS invite your "dumb" questions and other sorts of valuable contributions that you might wish to offer!  Thanks!!

A few commitments for which this project strives are to:

- Opt first for include and embrace anyone who wishes to participate, without judgement.
- Run the latest lts node implementation
- Run the latest of angular cli
- Use `ng new <PROJECT NAME>` to create a new miffy
- Use @angular/schematics wherever available to install libraries
- Use @angular/cli best practice and default libraries where conflicts with miffy best practices are not present
- Use the latest library version of the most active project that serves the need
- All changes must pass 100% of available tests **with 90% coverage** before they can be accepted 
- Deployable and testable exclusively on GCP infrastructure using tools that optimize as such, and opting for support of other cloud-based infrastructures where practical. 

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3 and can be fully reproduced from scratch
by cloning micro-client-public-starter and applying the following updates: 

###### Add Authentication:      [ngx-auth-firebaseui]() 

1. `npm i -s @angular/material @angular/cdk`
1. `npm i -s @angular/material @angular/cdk`
1. `npm i -s @angular/animations`
1. `npm i -s firebase @angular/fire`
1. `npm i -s material-design-icons`

Due to [this bug]() the schematic that is available for the [ngx-auth-firebaseui](https://ngx-auth-firebaseui.firebaseapp.com/getting-started) project dies in npm dependency hell.
Until this bug is fixed you can copy all subdirectories under node_modules.tmp directly into your node_modules directory and all should be right with the world.


----
# Quickstart

`vi .fd.<ROOT_DOMAIN>`  -- Update the first few variables to meet your needs

    typically modify:
        FD_TARGET_LOCAL_PORT    -- the localhost port used for Docker mapping (s/b unique to miffy realm and match npm start port))
        FD_NICKNAME             -- the base route for all requests(peferably relevant to service function)
        FD_TARGET_REALM         -- the subdomain that will serve the realm(must end with a dot)(appended to the root domain to form the auth realm)


Search/Replace all instances 'micro-client-private-starter' with your repo name/project root directory name

`npm install`

`pu.sh --local`  -- You should be up and running locally at the link provided upon completion of deployment with a working Docker demo!

-- _OR_ --

`npm run start`  -- You should be up and running locally in development mode with watchers and hot reload awaiting your development!

Lastly, update this README with your relevant deets.

----
# Angular Boilerplate Docs
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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
