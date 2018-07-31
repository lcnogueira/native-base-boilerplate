# Native-base Simple Boilerplate

This is a simple boilerplate to create a new mobile app by using [native-base](http://docs.nativebase.io/).

## How to test it

After cloning this project:

1.  Install and run the app:

```
cd native-base-boilerplate
yarn install
yarn start
```

2.  Install the Expo app on your phone and point it to the QRCode.
3.  Have fun!

## How to create new screens

To create new screens, import and use the `components/Container.js`. This component provides a status bar, a header (you can define the `title` by passing a `prop` to the container), a footer and a main content. You can insert content in the main content section by passing `children` `props` to the Container.

After that, add the screen to the `MainRouter/index.js` file, so that the screen can appear in the `SideBar` menu (simple like that).

## Tested platforms

This boilerplate was only tested on android devices. So, it's not possible to guarantee it will run on iOS devices too.

## Preview

The boilerplate looks like this:

<p align="center">
    <img src="https://user-images.githubusercontent.com/12154623/43433051-124ace00-944c-11e8-9e04-6f6b1b7fa883.png" width=150 >
    <img src="https://user-images.githubusercontent.com/12154623/43433094-4816c87c-944c-11e8-99a0-9759a373e13d.png" width=150 >
    <img src="https://user-images.githubusercontent.com/12154623/43433098-4b221878-944c-11e8-94d4-34906bb2ac61.png" width=150 >
</p>

## create-react-native-app

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can find more information on how to perform common tasks [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).
