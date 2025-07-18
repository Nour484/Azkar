//
//     final welcome = welcomeFromJson(jsonString);

import 'dart:convert';

List<Welcome> welcomeFromJson(String str) =>
    List<Welcome>.from(json.decode(str).map((x) => Welcome.fromJson(x)));

String welcomeToJson(List<Welcome> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class Welcome {
  int id;
  String category;
  String audio;
  String filename;
  List<Array> array;

  Welcome({
    required this.id,
    required this.category,
    required this.audio,
    required this.filename,
    required this.array,
  });

  factory Welcome.fromJson(Map<String, dynamic> json) => Welcome(
        id: json["id"],
        category: json["category"],
        audio: json["audio"],
        filename: json["filename"],
        array: List<Array>.from(json["array"].map((x) => Array.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "category": category,
        "audio": audio,
        "filename": filename,
        "array": List<dynamic>.from(array.map((x) => x.toJson())),
      };
}

class Array {
  int id;
  String text;
  int count;
  String audio;
  String filename;

  Array({
    required this.id,
    required this.text,
    required this.count,
    required this.audio,
    required this.filename,
  });

  factory Array.fromJson(Map<String, dynamic> json) => Array(
        id: json["id"],
        text: json["text"],
        count: json["count"],
        audio: json["audio"],
        filename: json["filename"],
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "text": text,
        "count": count,
        "audio": audio,
        "filename": filename,
      };
}
