import 'package:flutter/material.dart';

import 'task_details_screen.dart';

class TaskScreen extends StatelessWidget {
  const TaskScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Item(
                icon: Icon(Icons.sunny),
                text: 'Today',
              ),
              Item(
                icon: Icon(Icons.next_week_rounded),
                text: 'Tomorrow',
              ),
              Item(
                icon: Icon(Icons.today),
                text: 'this week',
              ),
              Item(
                icon: Icon(Icons.date_range),
                text: 'planned',
              ),
              Item(
                icon: Icon(Icons.done_outlined),
                text: 'completed ',
              ),
              Item(
                icon: Icon(Icons.task),
                text: 'Taks ',
              ),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: Divider(),
              ),
              Container(
                height: 200,
              ),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: TextField(
                  decoration: InputDecoration(
                      hintText: "  add a new task",
                      prefix: Icon(Icons.add),
                      //constraints: BoxConstraints(maxWidth: 500),
                      border: OutlineInputBorder()),
                ),
              )
            ],
          ),
        ));
  }
}

class Item extends StatelessWidget {
  final Icon icon;
  final String text;

  Item({
    required this.icon,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      child: Card(
        // color: color,
        elevation: 0,
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Row(
            children: [
              icon,
              SizedBox(
                width: 10,
              ),
              Text(text),
            ],
          ),
        ),
      ),
      // overlayColor:
      //     MaterialStateColor.resolveWith((states) => Colors.red),
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => TaksDetailsScreen()),
        );
      },
    );
  }
}
