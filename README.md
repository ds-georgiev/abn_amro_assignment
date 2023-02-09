# ABN Amro Movie Base

_The purpose of this assignment is to evaluate candidate’s familiarity with front-end technologies, programming patterns and to showcase a sample of what clean and reusable code means to the candidate._

## Project Description

The project uses the open TV shows API http://www.tvmaze.com/api to allow users to view a lists of TV shows based on different genres (drama, comedy, adventure and action).

The project displays all TV shows (with genre: drama, comedy, adventure and action) sorted on their rating in different dashboards. There are two types of dashboards:

- Slider Dashboard - where all of the genres shows are displayed in separated horizontal sliders
- Grid Dashboard - where single genre shows is displayed in a grid

If the user clicks on a TV show then the details of that TV show are displayed on another screen. This action can be performed by both of the above mentioned dashboards.

Moreover, the project contains a navigation bar that allows the user to navigate easily trough the application. In the navigation bar the user can also search for a TV show. If there are multiple search results the user will be offered a list with the results. In case there is only one show that contains the search query, the user will be navigated directly to the show details page.

## The Code

The project itself is set using the `vue-cli`:

- Vue3 + Typescript
- Vuex
- Vue Router
- SCSS as CSS preprocessor
- Jest for Unit testing

The code is logically divided in:

- assets
- components
- plugins
- router
- store
- views
- tests

#### `assets`

The assets folder contains the styling part from the project. The style is separated in two folders (`components` and `utils`) and one `main.scss` file that combines them all.

The `utils` folder contains all of the `.scss` files that are used throughout the project such as colors, sizes, fonts, mixins.

The `component` folder contains the `.scss` files that are responsible for styling the components and views. There is no scoped `scss` in the project for better maintenance.

#### `components`

The components folder contains all of the reusable components that are used in the project. They are created using the CompositionAPI from Vue3. Moreover, they are registered in the `main.ts` file in order to be used within the whole application.

#### `plugins`

This plugins folder contains the "setup" file for the Fontawesome library. Since that file can grow really fast it is good practice to contain it and move it out of the `main.ts` file. The file is still imported there but just as a reference. If one want to add new icons one should register them first in the `fontawesome.ts` file and then use it in the project.

#### `router`

This router folder contains the router file. All paths are registered there as well as a safe path check if none is found to navigate to the `404 Page`.

#### `store`

This store folder contains the `vuex` files as well as a helper file `types.ts` where all of the types are stored and exported. The `index.ts` is the actual sore that is responsible for the `state` management as well as the `API` calls. With the help of `vuex-persist` the `state` will be persistent on page refresh.

The project makes three calls to the `API`:

- Fetch the basic info for the shows
- Fetch the details info for the shows
- Fetch the cast of the show

The genre filtering, sorting, and search is done locally to reduce the calls to the `API`. The `sate` is set using `mutations` and the calls to the `API` are done with the `actions` from the `vuex` using `axios` as a HTTP client.

#### `views`

This folder views contains all of the `components` used as a page. Moreover, one can fin the `404 page` under the `util` folder.

#### `tests`

This folder tests contain a folder named `unit` where once can find all of the implemented test scenarios. Moreover, here you can also find a folder `mocks` where one can find the files used to retrieve the mocked data as well as the API health check function.

There are three `test suits` each containing different `tests`:

- `api` - Here the test will check if it can establish a successful connection with the `API`
- `DetailsView` - Here the tests will use the mocked data to mount the `DetailsComponent` and check if several `<div>` elements contain the correct data.
- `HomeView` - Here the test will create a mock `vuex` store that will simulate fetching the data s we do in the `HomeView` itself and mount he view and check if the correct function was called. Since we have checked the `API` health means we will get the desired result.

## Used external `npm` packages

- `fortawesome` - Icon manager
- `axios` - HTTP Client
- `swiper` - Slider builder
- `vuex-persist` - Persistent `vuex` state

## How to `setup` and `run` the project

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Run unit tests

```
npm run test:unit
```
