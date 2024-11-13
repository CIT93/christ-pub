const form = document.getElementById("form");
        const output = document.getElementById("output");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Get the selected day type from the dropdown
            const dayType = document.getElementById("dayPicker").value;

            // Only proceed if a valid option is selected
            if (dayType) {
                getWeatherIcon(dayType)
                    .then((icon) => {
                        output.textContent = `Weather: ${dayType} ${icon}`;
                    })
                    .catch((error) => {
                        output.textContent = `Error: ${error}`;
                    });
            } else {
                output.textContent = "Please select a weather type.";
            }
        });

        function getWeatherIcon(weather) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    switch(weather) {
                        case 'Sunny':
                            resolve('☀️');
                            break;
                        case 'Cloudy':
                            resolve('☁️');
                            break;
                        case 'Rainy':
                            resolve('🌧️');
                            break;
                        case 'partlyCloudy':
                            resolve('🌤️');
                            break;
                        default:
                            reject('No icon found');
                    }
                }, 100);
            });
        }