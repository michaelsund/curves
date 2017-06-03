package com.curves;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.smixx.reactnativeicons.ReactNativeIcons;
import com.smixx.reactnativeicons.ReactNativeIcons;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
//Added
import com.oblador.vectoricons.VectorIconsPackage;
import com.github.reactNativeMPAndroidChart.MPAndroidChartPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  @Override
  public void onCreate() {
    super.onCreate();
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ReactNativeIcons(),
          //added
          new VectorIconsPackage(),
          new MPAndroidChartPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}