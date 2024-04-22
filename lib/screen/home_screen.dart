import 'package:flutter/material.dart';

import 'jsonDataBase/read_json_file.dart';

class HomeScreen extends StatelessWidget {
  bool isLight;
  HomeScreen(this.isLight, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      body: Stack(
        children: [
          Container(
              decoration: BoxDecoration(
                  image: DecorationImage(
            fit: BoxFit.fill,
            image: AssetImage(isLight
                ? "assets/images/adhkar_light.jpg"
                : "assets/images/adhkar_dark.jpg"),
          ))),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // SizedBox(
                //   height: MediaQuery.sizeOf(context).width / 3,
                // ),
                InkWell(
                  child: SizedBox(
                    height: MediaQuery.sizeOf(context).width / 2,
                    width: MediaQuery.sizeOf(context).width - 30,
                    child: const Stack(
                      children: [
                        // Container(
                        //     decoration: BoxDecoration(
                        //         borderRadius: BorderRadius.circular(25),
                        //         image: DecorationImage(
                        //           fit: BoxFit.fill,
                        //           image: AssetImage(isLight
                        //               ? "assets/images/bg_light .jpg"
                        //               : "assets/images/adhkar_dark.jpg"),
                        //         ))),
                        Card(
                          // elevation: 0,
                          // color: Colors.transparent,
                          child: Center(
                              child: Text(
                            "الــقــرآن الـكـــريــم",
                            style: TextStyle(fontSize: 25),
                          )),
                        ),
                      ],
                    ),
                  ),
                  onTap: () {},
                ),
                InkWell(
                  child: SizedBox(
                    height: MediaQuery.sizeOf(context).width / 2,
                    width: MediaQuery.sizeOf(context).width - 30,
                    child: const Card(
                      child: Center(
                          child: Text(
                        " حُــصـن المُـســلــم ",
                        style: TextStyle(fontSize: 25),
                      )),
                    ),
                  ),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => ReadJsonFile(isLight)),
                    );
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
