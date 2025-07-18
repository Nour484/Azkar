import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class modeProvider with ChangeNotifier {
  bool _lightModeEnable = true;
  // SharedPreferences prefs;

  bool get lightModeEnable {
    return _lightModeEnable;
  }

  set lightModeEnable(bool value) {
    _lightModeEnable = value;
  }

  changeMode() async {
    final prefs = await SharedPreferences.getInstance();

    _lightModeEnable ? _lightModeEnable = false : _lightModeEnable = true;
    prefs.setBool("m", _lightModeEnable);
    notifyListeners();
  }

  getTheme() async {
    final prefs = await SharedPreferences.getInstance();
    lightModeEnable = prefs.getBool("m") ?? true;
    notifyListeners();
  }
}
