This Weekend’s Assignment :clipboard::nerd_face:👍




DELIVERABLES :

✅
▶️ Do a create-react-app


▶️ I need y’all to create a Shopping🛒✨  or  Favoriting😍✨ App


✅
▶️ Render a List of
< ItemsList />  OR  <ThingsThatCanBeFavorited />


@@@
▶️ When the user CLICKS on an
< Item />  OR  < ThingToFavorite />,
that clicked Component should go into (be rendered in)
< ShoppingCart />  OR  <Favorites />
THEN
upon CLICKing on an < Item />  OR  < ThingToFavorite />, that is ALREADY in/ rendered-in your < ShoppingCart />  OR  <Favorites />, it should be REMOVED/Deleted from theDOM
(If this is presenting itself to be difficult skip passed it and return to it later :ok_hand::skin-tone-5::meditating::dizzy:)


▶️ Add a Like AND Dislike Button AND a <p/> or <h4 /> to EACH
< Item />  OR  < ThingToFavorite />
▶️▶️ Feel Free to use any text-based tag for the actual like/dislike count
Both Buttons should be impacting the same variable, likes/count
The Like Button increments the likes/count value
The DisLike Button increments the likes/count value


▶️ Create an h1 at the Top of your Application that Toggles between the following two Texts upon being CLICKED:
“Now I’m Shopping”  AND  “Now I’m Favoriting”


▶️ Add a Form which upon being SUBMITTED, will add a new string/object/piece-of-data to your
array of items OR thingsToFavorite
This Form should have AT LEAST two input fields (minimum)
one text based (translates to a name:  key)
one image based (translates to an image_URL:  key)


▶️ Add a SearchBar that changes/reRenders the Components matching the text typed/in-put into the SearchBar
You can search though your items OR thingsToFavorite by the string/text based attribute (from the Form’s first input field)
This will cause the items shown to be VISIBLY filtered through
When the Search Bar is empty/has no text, we should have all items OR thingsToFavorite  rendered








SUGGESTIONS + LOGISTICS + REMINDERS:




▶️ Feel free to either have an array of items or thingsToFavorite objects either

➡️ Directly inside of  < App />

OR

➡️ As an array in a separate Js file, imported into  < App />

OR

➡️ As a db.json file and fetch() from it into  < App />




▶️ Somewhere in your Project, you WILL NEED 5 Components minimum to satisfy this

➡️  <App />

➡️  < ItemsList />  OR  < ThingsThatCanBeFavorited />

➡️  < ShoppingCart />  OR  <Favorites />

➡️  <Item />  OR  < ThingToFavorite />

➡️ < NewItemForm /> OR < NewThingForm />


▶️▶️ Feel Free to Rename Your Components Differently Than I Wrote in the DELIVERABLES in any ways that make the most sense to ✨YOU✨  //  😅👍




▶️ You WILL NEED to use State (useState())
▶️ You WILL NEED to use props
▶️ You WILL NEED to use events (onClick + onSubmit  in particular at a minimum)











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
