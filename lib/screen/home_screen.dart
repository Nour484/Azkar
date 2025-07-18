import 'dart:convert';
import 'package:azkar/provider/mode_provider.dart';
import 'package:azkar/screen/details_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatefulWidget {
  bool isLight;
  HomeScreen(this.isLight, {super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
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
        centerTitle: true,
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text(
          'حصن المسلم',
          style: TextStyle(
            color: Provider.of<modeProvider>(context, listen: false)
                    .lightModeEnable
                ? Colors.black
                : Colors.white,
          ),
        ),
        actions: [
          IconButton(
              onPressed: () {
                Provider.of<modeProvider>(context, listen: false).changeMode();
              },
              icon: Icon(Provider.of<modeProvider>(context, listen: false)
                      .lightModeEnable
                  ? Icons.dark_mode
                  : Icons.light_mode))
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

          return InkWell(
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Container(
                // decoration: BoxDecoration(
                //   boxShadow: [
                //     BoxShadow(
                //       color: Provider.of<modeProvider>(context, listen: false)
                //               .lightModeEnable
                //           ? Colors.green.shade100
                //           : Colors.grey.shade50,
                //       spreadRadius: 1,
                //       blurRadius: 3,
                //       offset: const Offset(2, 2), // changes position of shadow
                //     )
                //   ],
                //   color: Provider.of<modeProvider>(context, listen: false)
                //           .lightModeEnable
                //       ? Colors.green.shade100
                //       : Colors.grey.shade800,
                //   borderRadius: BorderRadius.circular(10),
                // ),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Text(
                        category,
                        style: const TextStyle(fontSize: 20),
                        textDirection: TextDirection.rtl,
                        textAlign: TextAlign.justify,
                      ),
                      const SizedBox(
                        width: 10,
                      ),
                      Text(
                        "$id",
                      ),
                    ],
                  ),
                ),
              ),
            ),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => Details(
                        Provider.of<modeProvider>(context, listen: false)
                            .lightModeEnable,
                        array)),
              );
            },
          );
        }),
      ),
    );
  }
}
