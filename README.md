# react-native-mpremotecommandcenter

## Add it to your project

You can use [`rnpm`](https://github.com/rnpm/rnpm) to add native dependencies automatically:

`$ rnpm link`

or do it manually as described below:

### iOS

1. Run `npm install react-native-mpremotecommandcenter --save`
2. Open your project in XCode, right click on `Libraries` and click `Add
   Files to "Your Project Name"` Look under `node_modules/react-native-mpremotecommandcenter` and add `RNMPRemoteCommandCenter.xcodeproj`.
3. Add `libRNMPRemoteCommandCenter.a` to `Build Phases -> Link Binary With Libraries`
4. Click on `RNMPRemoteCommandCenter.xcodeproj` in `Libraries` and go the `Build
   Settings` tab. Double click the text to the right of `Header Search
   Paths` and verify that it has `$(SRCROOT)/../react-native/React` - if it
   isn't, then add it. This is so XCode is able to find the headers that
   the `RNMPRemoteCommandCenter` source files are referring to by pointing to the
   header files installed within the `react-native` `node_modules`
   directory.
5. Whenever you want to use it within React code now you can: `var LinearGradient =
   require('react-native-mpremotecommandcenter');`

## Examples

### Simple

### License

License is MIT
