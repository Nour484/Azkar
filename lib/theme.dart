import 'package:flutter/material.dart';

class ModeTheme {
  //* light mode
  static final ThemeData lightMode = ThemeData(
    useMaterial3: true,
    scaffoldBackgroundColor: const Color(0xFFF9F9F9), 
    cardColor: const Color(0xFFE8F5E9), 
    colorScheme: ColorScheme.fromSeed(
      seedColor:  const Color(0xFF4CAF50), 
      brightness: Brightness.light,
    ),
    iconTheme: IconThemeData(color: Colors.green[700]),
    textTheme:  const TextTheme(
      bodyLarge: TextStyle(color: Colors.black87, fontSize: 18),
      bodyMedium: TextStyle(color: Colors.black54),
    ),
  );

  //* dark mode
  static final ThemeData darkMode = ThemeData(
    useMaterial3: true,
    scaffoldBackgroundColor: const Color(0xFF121212), 
    cardColor: const Color(0xFF1E1E1E), 
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF66BB6A), 
      brightness: Brightness.dark,
    ),
    iconTheme:const IconThemeData(color: Colors.greenAccent),
    textTheme:  const TextTheme(
      bodyLarge: TextStyle(color: Colors.white, fontSize: 18),
      bodyMedium: TextStyle(color: Colors.white70),
    ),
  );
}
