# 🎨 Weather App

A simple and responsive **weather application** built with **HTML, CSS, and JavaScript**.  
Fetches real-time weather data from the [OpenWeather API](https://openweathermap.org/api) and displays temperature, humidity, and wind speed for any city.

---

## 🚀 Live Demo

[Live Demo](https://themartisuper.github.io/weather-app)

---

## 🖼️ Preview

![Weather App Preview](https://github.com/themartisuper/weather-app/blob/main/preview.gif)

---

## 🧠 Features

- 🌍 Search weather by **city name**
- 🌡️ Displays **temperature**, **humidity**, and **wind speed**
- ☁️ Dynamically updates **weather icons**:
  - 🌤️ Clear → `clear.png`
  - ☁️ Clouds → `clouds.png`
  - 🌧️ Rain → `rain.png`
  - 🌦️ Drizzle → `drizzle.png`
  - 🌫️ Mist → `mist.png`
- ⚠️ Handles invalid city names gracefully
- 🧪 Checks if **API key is connected** before fetching data
- 🧭 Lightweight, responsive, and fast — no frameworks

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5      | Structure of the app |
| CSS3       | Styling (`global.css` and `style.css`) |
| JavaScript (ES6 modules) | Logic, DOM manipulation, and API calls |
| OpenWeather API | Fetch real-time weather data |

---

## 📂 Project Structure

```

weather-app/
├── API_keys/
│   └── openWeather.js        # contains your API key
├── images/                   # weather icons (clear.png, rain.png, etc.)
├── global.css
├── style.css
├── script.js
└── index.html

```

---

## ⚙️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/themartisuper/weather-app.git
   ```

2. Open the project folder:

   ```bash
   cd weather-app
   ```
3. Create your `API_keys/openWeather.js` file with your OpenWeather API key:

   ```js
   export const apiKey = "YOUR_API_KEY_HERE";
   ```
4. Open `index.html` in your browser.

> ⚠️ Ensure the relative import path in `script.js` matches your folder structure:

```js
let apiKey;
try {
  const module = await import("../../API_keys/openWeather.js");
  apiKey = module.apiKey;
} catch (err) {
  console.warn("⚠️ API key module not found:", err);
  apiKey = null;
};
```

The app will alert if the API key is missing or invalid.

---

## 💡 Possible Improvements

* Enhance UI/UX with animations or better transitions
* Add **unit toggle** between Celsius and Fahrenheit
* Improve error handling for network issues
* Optimize code for modularity and scalability

### 🌟 Future Features

* 🌐 **5-day weather forecast**
* 📍 **Geolocation support** to auto-detect user’s city
* 🎨 **Dark/light theme toggle**
* 📊 **Weather statistics history** (using local storage or backend)
* ⚡ API rate-limit handling and caching

---

## 📝 Project-Specific Notes

* Requires **OpenWeather API key**; do not commit key to GitHub
* API key is loaded dynamically via ES6 module import
* Weather icons are stored in `images/` and mapped according to API `weather[0].main` values
* Input search works on both **click** and **Enter key**
* Error messages are displayed in the `.error` container if city is invalid
* GIF preview shows live interaction, dynamic icon updates, and error handling

---

## 👩‍💻 Author

**[Your Name]**
[GitHub Profile](https://github.com/themartisuper)

---

## 🧠 My Thoughts

This project helped me practice:

* Fetching and handling API data in JavaScript
* Modular code with ES6 imports
* DOM manipulation and dynamic UI updates
* Responsive design using CSS flex and gradients

It’s a lightweight, beginner-friendly project with potential to expand into a more advanced weather dashboard.