import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';

class Details extends StatelessWidget {
  List array;
  bool isLight;
  Details(
    this.isLight,
    this.array,
  );

  @override
  Widget build(BuildContext context) {
    final player = AudioPlayer();
    return Scaffold(
        extendBodyBehindAppBar: true,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
        ),
        body: Stack(children: [
          Container(
              decoration: BoxDecoration(
                  image: DecorationImage(
            fit: BoxFit.fill,
            image: AssetImage(isLight
                ? "assets/images/adhkar_light.jpg"
                : "assets/images/adhkar_dark.jpg"),
          ))),
          ListView.builder(
            itemCount: array.length,
            itemBuilder: ((context, index) {
              var id = array[index]['id'];
              var category = array[index]["text"];
              String audio = array[index]["audio"];

              return Column(
                children: <Widget>[
                  Card(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        children: [
                          Text(
                            "{ $id }",
                          ),
                          SizedBox(
                            width: MediaQuery.sizeOf(context).width - 30,
                            child: Text(
                              category,
                              style: TextStyle(fontSize: 18),
                              textDirection: TextDirection.rtl,
                              textAlign: TextAlign.justify,
                            ),
                          ),
                          Row(
                            children: [
                              IconButton(
                                  onPressed: () async {
                                    final duration =
                                        await player.setAsset("assets$audio");

                                    player.play();
                                  },
                                  icon: Icon(Icons.play_arrow)),
                              IconButton(
                                  onPressed: () async {
                                    player.stop();
                                  },
                                  icon: Icon(Icons.stop))
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 30,
                  )
                ],
              );
            }),
          )
        ]));
  }
}
