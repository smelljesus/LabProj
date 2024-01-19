# Программирование на языке высокого уровня (Python).
# Задание 4.3.6.
# Выполнил: Поветьев Герман Юрьевич
# Группа: ПИН-б-з-22-1
# E-mail: smelljesus@yandex.ru

from players import АудиоПлеер, ВидеоПлеер, DvdПлеер

audio_player = АудиоПлеер("АудиоПлеер")
video_player = ВидеоПлеер("ВидеоПлеер")
dvd_player = DvdПлеер("DvdПлеер")

audio_player.запустить()
audio_player.воспроизвести_аудио("Песня 1")
audio_player.остановить()

video_player.запустить()
video_player.воспроизвести_видео("Фильм 1")
video_player.остановить()

dvd_player.запустить()
dvd_player.перемотать(30)
dvd_player.воспроизвести_видео("Фильм на DVD")
dvd_player.остановить()