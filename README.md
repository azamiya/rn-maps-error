## requirements
- [Read project documentation](./docs/documentation.md)
- node 8.11.1 (please use [nvm](https://github.com/creationix/nvm))
- watchman
- XCode
- appleSimUtils // required for detox, please refer to [getting started](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md)
- Android Studio
- detox-cli // run `npm install -g detox-cli` it should be installed globally

## Android support
>= Android 6

## iOS support
>= iOS 9

## dev
```
$> yarn install
```

To start *metro* server run:
```
$> yarn start
```

### Android Emulator
You must have at least one device installed (check adb documentation) and running and then run:
```
$> yarn run android
```

_note_: it's important to speed the build process in dev environment, in order to do that, add to `graddle.properties` file to
`~/.gradle` (if file doesn't exist, just create it) next line to enable daemon:
```
org.gradle.daemon=true
```
For more info check [gradle documentation](https://docs.gradle.org/2.14.1/userguide/gradle_daemon.html)

#### *Debug*
In order to debug on android emulator and to avoid current url issues, please do the following:

On Mac:
- Cmd+M
- Select "Dev Settings"
- Select "Debug server host & port for device"
- enter `localhost:8081`
- *go back*
- Cmd+M
- Select "Start Remote JS Debugging"

### iOS Emulator
```
$> yarn run ios
```

#### *Debug*
- Cmd+D
- Debug JS Remotely

## Unit testing
```
$> yarn test
```

To keep jest running and watching changes run:

```
$> yarn test:watch
```
