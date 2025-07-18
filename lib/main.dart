import 'package:azkar/screen/home_screen.dart';
import 'package:azkar/theme.dart';
import 'package:flutter/material.dart';

import 'package:provider/provider.dart';

import 'provider/mode_provider.dart';

void main() {
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (context) => modeProvider()..getTheme()),
    ],
    child: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      themeAnimationStyle: const AnimationStyle(
          duration: Duration(milliseconds: 450), curve: Curves.easeInQuad),
      debugShowCheckedModeBanner: false,
      title: 'Azkar',
      theme: Provider.of<modeProvider>(context).lightModeEnable
          ? ModeTheme.lightMode
          : ModeTheme.darkMode,
      home: HomeScreen(Provider.of<modeProvider>(context).lightModeEnable),
    );
  }
}
