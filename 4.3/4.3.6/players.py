class Плеер:
    def __init__(self, name):
        self.name = name
        self.playing = False

    def запустить(self):
        self.playing = True
        print(f"{self.name} запущен")

    def остановить(self):
        self.playing = False
        print(f"{self.name} остановлен")

class АудиоПлеер(Плеер):
    def воспроизвести_аудио(self, track):
        if self.playing:
            print(f"{self.name} воспроизводит аудиотрек: {track}")
        else:
            print(f"{self.name} не может воспроизвести аудиотрек: {track}, так как остановлен")

class ВидеоПлеер(Плеер):
    def воспроизвести_видео(self, video):
        if self.playing:
            print(f"{self.name} воспроизводит видеоролик: {video}")
        else:
            print(f"{self.name} не может воспроизвести видеоролик: {video}, так как остановлен")

class DvdПлеер(ВидеоПлеер):
    def __init__(self, name):
        super().__init__(name)
        self.current_position = 0

    def воспроизвести_видео(self, video):
        if self.playing:
            print(f"{self.name} воспроизводит DVD-диск: {video}")
        else:
            print(f"{self.name} не может воспроизвести DVD-диск: {video}, так как остановлен")

    def перемотать(self, position):
        self.current_position = position
        print(f"{self.name} перемотал на позицию {position}")
