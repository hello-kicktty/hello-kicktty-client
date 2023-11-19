import serial
import csv

# 시리얼 포트 설정 (아두이노에서 사용 중인 포트로 변경해주세요)
ser = serial.Serial('COM18', 115200)  # 포트와 통신 속도는 아두이노와 동일하게 설정

# CSV 파일에 헤더를 쓰기
with open('data.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Red', 'Green', 'Blue'])  # 헤더 데이터

# 시리얼 통신으로부터 데이터 수신하여 CSV 파일에 기록
with open('data.csv', mode='a', newline='') as file:
    writer = csv.writer(file)
    while True:
        data = ser.readline().decode().strip()  # 시리얼로부터 데이터 읽기
        print(data)  # 터미널에 데이터 출력 (선택 사항)

        # CSV 파일에 데이터 기록
        writer.writerow(data.split(','))  # 쉼표를 기준으로 데이터 분할하여 기록