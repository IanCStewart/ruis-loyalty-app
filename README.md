# Ruis Loyalty App

![Github_Banner](Github_Banner.png)
> Graduation Project [Communication &amp; Multimedia Design, Amsterdam University of Applied Sciences](https://www.cmd-amsterdam.nl) for [Club Ruis](http://www.clubruis.nl)

## 📖 Introduction
This app is a loyalty app for [Club Ruis](http://www.clubruis.nl). With this app you can collect club coins by for instance visiting the club or ordering drinks. With these coins you will be able to get deals like `x% discount on x drinks`.

### Use Case
A club visitor has the loyalty app installed on his device and is waiting in line. When he enters the club he can get his personal code scanned. By scanning his code at the door he receives an amount of club coins. While in the club the visitor decides he wants to have a drink. While heading to the register he activate a deal for `2 beer for the price off 1`. At the register he orders 2 bears. Before checkout he gets his personal code scanned. The cash register acknowledges the discount redeemed by the user and adds the discount before checkout. The visitor can now enjoy his beer with his friend who just got a free drink.

## ⚙️ Installation & Development
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* [Node](https://github.com/creationix/nvm) version ^4.8.0 || ^5.7.0 || ^6.2.2 || >=8.0.0
* [Yarn](https://yarnpkg.com/en/)
* [Expo app](https://expo.io/tools#client) on your device *(This is to run the app on a real device)*
* [Xcode](https://developer.apple.com/xcode/) Simulator preferably the latest version *(This is to run the app in an iOS simulator)*
* [Android Studio](https://developer.android.com/studio/) Simulator *(This is to run the app in an android simulator)*

### Installing
Follow these steps to get a copy of the project and get the dependencies installed.

1. Clone the repository *(Make sure your in your development directory)*
```bash
$ git clone git@github.com:IanCStewart/ruis-loyalty-app.git
```

2. Change to the new directory
```bash
$ cd ruis-loyalty-app
```

3. Install the dependencies
```bash
$ yarn install
```

### Running
Follow these steps to get the project running.

#### iOS Simulator
1. Start the React Native packager
```bash
$ yarn start
```

If all went as expected you should see something like `11:15:51: Starting packager...` in your terminal.

2. Open the app in Expo

After `Packager started!` appeared in your terminal you should see an QR code with some other instructions. To run the app on the iOS sim press `i` on your keyboard. Your terminal should say `11:19:59: Starting iOS...` and a simulator should be started up.

3. Use the app in the sim

After the packer is done compiling the following message should be prompted:
```
11:23:01: Finished building JavaScript bundle in 35ms
11:23:02: Running app on Ian in development mode
```

The app is now ready to be explored within the simulator.

#### Android Simulator
1. Check if the emulator command is registered in your terminal
```bash
$ which emulator
```

If `emulator not found` is returned add the following to your ~/.zshrc config
```bash
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

2. Open Android Studio and make sure a SDK is installed. see: https://developer.android.com/studio/intro/update

3. Create an emulator *(Pixel_2_XL_API_27 recommended)*. see: https://developer.android.com/studio/run/managing-avds

4. Start the simulator
```
$ emulator @Pixel_2_XL_API_27
```
For more information on starting simulators: https://developer.android.com/studio/run/emulator-commandline

5. Start the React Native packager
```bash
$ yarn start
```

If all went as expected you should see something like `11:15:51: Starting packager...` in your terminal.

6. Open the app in Expo

After `Packager started!` appeared in your terminal you should see an QR code with some other instructions. To run the app on the Android sim press `a` on your keyboard. Your terminal should say `11:19:59: Starting Android...`.

7. Use the app in the sim

After the packeger is done compiling the following message should be prompted:
```
11:23:01: Finished building JavaScript bundle in 35ms
11:23:02: Running app on Ian in development mode
```

#### Physical iOS device
1. Start the React Native packager
```bash
$ yarn start
```

If all went as expected you should see something like `11:15:51: Starting packager...` in your terminal.

2. Open the app in Expo

After `Packager started!` appeared in your terminal you should see an QR code with some
other instructions. To run the app on your iOS device send the link below the QR code, this should look somewhat like `Your app is now running at URL: exp://10.0.1.19:19000`, too yourself and open this link *(OR send the link by email by pressing `s` on your keyboard and the filling in your email)*. The expo app should launch and open the project

3. Use the app on your iOS device

After the packager is done compiling the message should be prompted:
```
11:38:38: Finished building JavaScript bundle in 3374ms
11:38:41: Running app on iPhone in development mode
```

#### Physical Android device
1. Start the React Native packager
```bash
$ yarn start
```

If all went as expected you should see something like `11:15:51: Starting packager...` in your terminal.

2. Open the app in Expo

After `Packager started!` appeared in your terminal you should see an QR code with some
other instructions. To run the app on your Android device point the expo QR scanner towards the code in your terminal *(OR send the link below the QR code, this should look somewhat like `Your app is now running at URL: exp://10.0.1.19:19000`, too yourself and open this link; OR send the link by email by pressing `s` on your keyboard and the filling in your email)*. The expo app should open the project.

3. Use the app on your Android device

After the packager is done compiling the message should be prompted:
```
11:38:38: Finished building JavaScript bundle in 3374ms
11:38:41: Running app on iPhone in development mode
```

## ✅ Todo's
### Critical Points
- [ ] Back-end (API & Database)
- [ ] Create connection with cash registers
- [ ] Social Login using OAuth
- [ ] More usability testing
- [ ] Iterate on current design
- [ ] Finalize Front-end code

### Nice To Have
- [ ] Admin pannel to create app content
- [ ] Better naming for ranking
- [ ] Better Ruis Branding

## 📃 License
This project is licensed under the [MIT](LICENSE.MD) License
