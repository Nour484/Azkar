import 'package:flutter/material.dart';

// ignore: must_be_immutable
class TaksDetailsScreen extends StatelessWidget {
  TaksDetailsScreen({super.key});

  TextEditingController title = TextEditingController();
  TextEditingController note = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: TextField(
              controller: title,
              decoration: InputDecoration(
                  hintText: "title",
                  prefix: Icon(Icons.add),
                  //constraints: BoxConstraints(maxWidth: 500),
                  border: OutlineInputBorder()),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: TextField(
              controller: note,
              decoration: InputDecoration(
                  hintText: "note ",
                  prefix: Icon(Icons.add),
                  border: OutlineInputBorder()),
            ),
          ),
          IconButton(onPressed: () async {}, icon: Icon(Icons.add))
        ],
      ),
    );
  }
}
