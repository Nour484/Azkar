import 'dart:convert';
import 'package:azkar/provider/mode_provider.dart';
import 'package:azkar/screen/jsonDataBase/details.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

class ReadJsonFile extends StatefulWidget {
  bool isLight;
  ReadJsonFile(this.isLight, {super.key});

  @override
  State<ReadJsonFile> createState() => _ReadJsonFileState();
}

class _ReadJsonFileState extends State<ReadJsonFile> {
  List? jsonData;
  Future<String> loadJsonAsset() async {
    final String jsonString =
        await rootBundle.loadString('assets/json/adhkar.json');

    setState(() {
      jsonData = jsonDecode(jsonString);
    });
    return "Success";
    //print(jsonData);
  }

  @override
  void initState() {
    loadJsonAsset();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        actions: [
          IconButton(
              onPressed: () {
                Provider.of<modeProvider>(context, listen: false).changeMode();
              },
              icon: Icon(widget.isLight ? Icons.dark_mode : Icons.light_mode))
        ],
        // backgroundColor: Theme.of(context).colorScheme.tertiary,
      ),
      body: ListView.builder(
        itemCount: jsonData == null ? 0 : jsonData?.length,
        itemBuilder: ((context, index) {
          var id = jsonData![index]['id'];
          var category = jsonData![index]["category"];
          List array = jsonData![index]["array"];
          // var text = jsonData![index]["array"][0]["text"];

          return Column(
            children: <Widget>[
              InkWell(
                child: Card(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        SizedBox(
                          // width: MediaQuery.sizeOf(context).width - 30,
                          child: SizedBox(
                            width: MediaQuery.sizeOf(context).width - 100,
                            child: Text(
                              category,
                              style: TextStyle(fontSize: 18),
                              textDirection: TextDirection.rtl,
                              textAlign: TextAlign.justify,
                            ),

                            // maxLines: 2,
                          ),
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Text(
                          "$id",
                        ),
                      ],
                    ),
                  ),
                ),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => Details(widget.isLight, array)),
                  );
                },
              ),
            ],
          );
        }),
      ),
    );
  }
}
