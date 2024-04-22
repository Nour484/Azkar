import 'dart:async';

import 'package:flutter/material.dart';

class TimerProvider with ChangeNotifier {
  int min = 5;
  int sec = 0;
  int percent = 0;
  int totaltime = 5;

  bool isRunning = false;
  bool isStart = false;
  Timer? timer;

  startTimer() {
    isStart = true;
    isRunning = true;
    if (timer != null) {
      min = totaltime;
    }

    timer = Timer.periodic(Duration(seconds: 1), (timer) {
      if (sec > 0) {
        sec--;

        percent++;
        isRunning = true;
        notifyListeners();
        print("sec  $sec");
      } else {
        if (min > 0) {
          min--;
          percent++;

          sec = 59;
          isRunning = true;
          // print(minInSec);
          print("min $min");
          notifyListeners();
        } else {
          timer.cancel();
        }
      }
    });
  }

  pauseTimer() {
    timer?.cancel();
    timer = null;
    isStart = true;
    isRunning = false;
    notifyListeners();
  }

  stopTimer() {
    timer?.cancel();
    min = totaltime;

    percent = 0;
    sec = 0;
    timer = null;
    isStart = false;
    isRunning = false;
    notifyListeners();
  }
}
