import 'package:azkar/screen/home_screen.dart';
import 'package:azkar/theme.dart';
import 'package:device_preview/device_preview.dart';
import 'package:flutter/material.dart';

import 'package:provider/provider.dart';

import 'provider/mode_provider.dart';
import 'provider/timer_provider.dart';

void main() {
  runApp(DevicePreview(
      enabled: true,
      builder: (context) => MultiProvider(
            providers: [
              ChangeNotifierProvider(
                  create: (context) => modeProvider()..getTheme()),
              ChangeNotifierProvider(create: (context) => TimerProvider()),
            ],
            child: MyApp(),
          )));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      //useInheritedMediaQuery: true,
      locale: DevicePreview.locale(context),
      // builder: DevicePreview.appBuilder,
      themeAnimationStyle: AnimationStyle(
          duration: Duration(milliseconds: 450), curve: Curves.easeInQuad),
      debugShowCheckedModeBanner: false,
      title: 'PomodoroApp',
      theme: Provider.of<modeProvider>(context).lightModeEnable
          ? ModeTheme.lightMode
          : ModeTheme.darkMode,

      // darkTheme: ModeTheme.darkMode,
      // home: TimerWidget(Provider.of<modeProvider>(context).lightModeEnable),
      // home: ReadJsonFile(Provider.of<modeProvider>(context).lightModeEnable));
      home: HomeScreen(Provider.of<modeProvider>(context).lightModeEnable),
    );
  }
}
