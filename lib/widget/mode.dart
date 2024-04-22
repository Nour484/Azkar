import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../provider/mode_provider.dart';

// ignore: must_be_immutable
class Mode extends StatelessWidget {
  bool isLight;
  Mode(this.isLight, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Stack(
        children: [
          Container(
              decoration: BoxDecoration(
                  image: DecorationImage(
            fit: BoxFit.cover,
            image: AssetImage(isLight
                ? "assets/images/bg_light.jpg"
                : "assets/images/bg_dark.jpg"),
          ))),
          Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Center(
                child: ElevatedButton.icon(
                    onPressed: () async {
                      Provider.of<modeProvider>(context, listen: false)
                          .changeMode();
                    },
                    icon: isLight
                        ? const Icon(Icons.dark_mode)
                        : const Icon(Icons.light_mode),
                    label: Text(isLight ? "Dark" : "Light")),
              ),
              // Row(
              //   mainAxisAlignment: MainAxisAlignment.center,
              //   children: [
              //     Text(" Dark Mode"),
              //     Switch(
              //         value: !Provider.of<timerProvider>(context, listen: false)
              //             .lightModeEnable,
              //         onChanged: (value) async {
              //           Provider.of<timerProvider>(context, listen: false)
              //               .changeMode();
              //         }),
              //   ],
              // )
            ],
          ),
        ],
      ),
    ));
  }
}
