import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';

class Details extends StatelessWidget {
  List array;
  bool isLight;

  Details(this.isLight, this.array, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
      ),
      body: ListView.builder(
        itemCount: array.length,
        itemBuilder: (context, index) {
          var id = array[index]['id'];
          var category = array[index]["text"];
          String audio = array[index]["audio"];
          final player = AudioPlayer();

          return Column(
            children: <Widget>[
              Card(
              
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    children: [
                      Text("{$id}"),
                      const SizedBox(height: 10),
                      Text(
                        category,
                        style: const TextStyle(fontSize: 18),
                        textDirection: TextDirection.rtl,
                        textAlign: TextAlign.justify,
                      ),
                      const SizedBox(height: 10),
                      PlayWidget(player: player, audio: audio),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 30),
            ],
          );
        },
      ),
    );
  }
}

class PlayWidget extends StatefulWidget {
  const PlayWidget({
    super.key,
    required this.player,
    required this.audio,
  });

  final AudioPlayer player;
  final String audio;

  @override
  State<PlayWidget> createState() => _PlayWidgetState();
}

class _PlayWidgetState extends State<PlayWidget> {
  bool isInitialized = false;

  Future<void> _initialize() async {
    if (!isInitialized) {
      await widget.player.setAsset("assets${widget.audio}");
      isInitialized = true;
    }
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<PlayerState>(
      stream: widget.player.playerStateStream,
      builder: (context, snapshot) {
        final playerState = snapshot.data;

        final playing = playerState?.playing ?? false;
        final processingState = playerState?.processingState;

        final isPaused =
            !playing && processingState == ProcessingState.ready; // Paused
        final isStopped = processingState == ProcessingState.idle;

        IconData icon;
        if (playing) {
          icon = Icons.pause;
        } else if (isPaused) {
          icon = Icons.play_arrow; // resume
        } else {
          icon = Icons.play_arrow; // initial play
        }

        return Row(
          children: [
            IconButton(
              onPressed: () async {
                await _initialize();
                if (playing) {
                  await widget.player.pause();
                } else {
                  await widget.player.play();
                }
              },
              icon: Icon(
                icon,
                color:
                    playing ? Colors.orange : Colors.green, 
              ),
            ),
            if (playing || isPaused)
              IconButton(
                onPressed: () async {
                  await widget.player.stop();
                },
                icon: const Icon(
                  Icons.stop,
                  color: Colors.red,
                ),
              ),
          ],
        );
      },
    );
  }
}
