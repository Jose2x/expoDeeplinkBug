# expoDeeplinkBug
https://github.com/expo/expo/issues/2389

### 1. Build Android standalone app
`$ expo build:android`

### 2. Install app to Android device through adb (cable connection)
`$ adb install expoBuild.apk`

### 3. Expected behavior - app responds to all deep links
* Open app through icon (launcher)
* Minimize app
* Run `$ adb shell am start -a android.intent.action.VIEW -d "deeplink://link1"` - App shows `deeplink://link1` in `next`
* Minimize app (works even without minimizing)
* Run `$ adb shell am start -a android.intent.action.VIEW -d "deeplink://link2"` - App shows `deeplink://link2` in `next`

### 4. Deeplink bug - app responds only to first (initial) deep link
* Make sure app is closed (killed)
* Run `$ adb shell am start -a android.intent.action.VIEW -d "deeplink://initial"` - App shows `deeplink://initial` in `init`
* Minimize app
* Run `$ adb shell am start -a android.intent.action.VIEW -d "deeplink://link2"` - App DOES NOT show `deeplink://link2` in `next`
