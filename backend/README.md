# Penneo Weather(TM) Backend
## Description
This is a small weather API that gets data from https://openweathermap.org/.

It uses TypeScript, nodejs and express.


## About this test

- Checkout this repository
- Create a branch for the solution
- Create a pull request with your commits and a description for the changes.

We'd also love to hear your thoughts, feel free to write them in the pull request comments or commit them in a file.
We'd also love to know what tools and programs you used.


## How to run this project

You will need to install `nodejs` and `npm`, maybe `nvm` as well. You can find setup instructions on the internet.

- Node.JS
- NPM

Pro tip: If you install [nvm](https://github.com/creationix/nvm) (Node version manager), it will install both [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) for you.

To run this project first you need to run following command

```sh
    npm install          # installs all the npm dependencies
    npm start            # runs project on port 9080.
```

## Config
Config is held in `/config/openweathermap/index.js`. There is an API key there, if none of the endpoints work, it could be expired.
You can get a new from https://home.openweathermap.org/api\_keys, you will need to set up an account. Please note, they can take a few
hours to activate.

Please let us know if it's expired, we try to keep it active so you can use this project with as less setup as possible.


## How to use it
Please see the `example-requests.md` file. If some of the requests fail, you might need to update the API key in `/config`.


## Tasks
- [ ] There is a bug in one of the API endpoints, try calling them.
- [ ] Change the temperature units from Kelvin to °C. You may be tempted to just use a formula, try not to.
- [ ] Change the API so that it returns random values for temperature, latitude, location names, etc. You can do this however you see fit, but it should be possible to toggle this useful 'feature' on and off from config or using an environment variable.

