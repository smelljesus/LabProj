# vehicles.py
class ТранспортныеСредство:
    def __init__(self, name):
        self.name = name

    def ехать(self):
        print(f"{self.name} начало движение")

class ВодноеТС(ТранспортныеСредство):
    def __init__(self, name):
        super().__init__(name)

    def плавать(self):
        print(f"{self.name} начало плавание")

class КолесноеТС(ТранспортныеСредство):
    def __init__(self, name):
        super().__init__(name)

    def ехать(self):
        print(f"{self.name} начало движение на колесах")

class Автомобиль(КолесноеТС):
    def __init__(self, name):
        super().__init__(name)

    def остановиться(self):
        print(f"{self.name} остановился")