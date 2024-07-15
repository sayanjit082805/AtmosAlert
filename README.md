
# AtmosAlert

AtmosAlert is a simple web-based application which provides provides weather details for any city. Built using Vite+React and styled using Tailwind Css.



# Features

* Weather updates throughout the globe using OpenWeather API.
* Fully animated icons using [Meteocons](https://bas.dev/work/meteocons).
* Again, a rather minimalist UI.
* Toast notifications using [react-toastify](https://fkhadra.github.io/react-toastify/introduction/).
* Small loading animations using [React Spinners](https://mhnpd.github.io/react-loader-spinner/).


# Showcase

## Demo

![](https://raw.githubusercontent.com/sayanjit082805/AtmosAlert/main/demo/demo.gif)

## Screenshots

![](https://raw.githubusercontent.com/sayanjit082805/AtmosAlert/main/demo/ss3.png)

* Random city

![](https://raw.githubusercontent.com/sayanjit082805/AtmosAlert/main/demo/ss2.png)

* Toast notifications

![](https://raw.githubusercontent.com/sayanjit082805/AtmosAlert/main/demo/ss1.png)

* Another random city


## Prerequisites

- Node.js (v-14 or later)
- npm or yarn
- Openweathermap api key


## Installation

### Initial Setup

First, head over to [Openweather](https://openweathermap.org/appid) and generate your own API-Key, it's completely free. Then, follow the below mentioned steps :

* Clone the repository.
  
```bash
git clone https://github.com/sayanjit082805/AtmosAlert.git
cd AtmosAlert
```

* Install dependencies with ```npm install```

* Create a .env file in the root directory of the project and enter your api key like this: 
 ```
 VITE_API_KEY = 'your-api-key'
 ```

### Running

* Start the application with ```npm run dev```.
* Next, open your browser and navigate to ```http://localhost:5173``` or the port as specified by vite.


## Contributing

Contributions are always welcome!

- Fork the repository

- Create a new branch ```(git checkout -b feature-branch)```

- Commit your changes ```(git commit -m 'Add new feature')```

- Open a pull request



## Acknowledgements

 - The API is provided by Openweather.
 - [Meteocons](https://bas.dev/meteocons), for the awesome animated weather icons.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



