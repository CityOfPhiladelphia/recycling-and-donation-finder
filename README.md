# recycling-and-donation-finder

This is the sourcecode for the [Resources for recycling and donation](https://www.phila.gov/recycling-donation-finder/) app.

The app uses the framework [Pinboard](https://github.com/CityOfPhiladelphia/pinboard), in npm as [@phila/pinboard](https://www.npmjs.com/package/@phila/pinboard).

![Example](https://mapboard-images.s3.amazonaws.com/pinboard/recycling-donation-finder.JPG)
![Example](https://mapboard-images.s3.amazonaws.com/pinboard/phone-recycling-donation-finder.JPG)

Full instructions for how this repo uses the @phila/pinboard package can be found in the [Pinboard wiki](https://github.com/CityOfPhiladelphia/pinboard/wiki).

Basic instructions are here:

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deployments

Commits to the master branch will automatically deploy through travis.ci to an AWS S3 bucket.
