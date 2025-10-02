import requests

def get_weather(city, api_key):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    r = requests.get(url)
    if r.status_code == 200:
        data = r.json()
        print(f"{city.title()}: {data['weather'][0]['description']}, {data['main']['temp']}°C")
    else:
        print("City not found or API error.")

if __name__ == "__main__":
    city = input("Enter city: ")
    api_key = input("Enter your OpenWeatherMap API key: ")
    get_weather(city, api_key)
