ARG BUILD_FROM
FROM $BUILD_FROM

# Install Node.js and serve
RUN apk add --no-cache nodejs npm
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Create a simple static dashboard
COPY <<EOF /app/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Energy Flow Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="bg-gray-900 text-white min-h-screen">
    <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-8 text-center">
            <i class="fas fa-solar-panel text-yellow-500 mr-2"></i>
            Energy Flow Dashboard
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- Solar Panel Card -->
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">Solar Production</h3>
                    <i class="fas fa-sun text-yellow-500 text-2xl"></i>
                </div>
                <p class="text-3xl font-bold text-yellow-500" id="solar-power">0 W</p>
                <p class="text-sm text-gray-400">Today: <span id="solar-energy">0 kWh</span></p>
            </div>

            <!-- Battery Card -->
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">Battery</h3>
                    <i class="fas fa-battery-half text-green-500 text-2xl"></i>
                </div>
                <p class="text-3xl font-bold text-green-500" id="battery-soc">0%</p>
                <p class="text-sm text-gray-400">Power: <span id="battery-power">0 W</span></p>
            </div>

            <!-- Grid Card -->
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">Grid</h3>
                    <i class="fas fa-plug text-blue-500 text-2xl"></i>
                </div>
                <p class="text-3xl font-bold text-blue-500" id="grid-power">0 W</p>
                <p class="text-sm text-gray-400">Status: <span id="grid-status">Connected</span></p>
            </div>

            <!-- House Card -->
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">House Consumption</h3>
                    <i class="fas fa-home text-purple-500 text-2xl"></i>
                </div>
                <p class="text-3xl font-bold text-purple-500" id="house-power">0 W</p>
                <p class="text-sm text-gray-400">Today: <span id="house-energy">0 kWh</span></p>
            </div>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 class="text-xl font-bold mb-4">Energy Flow Visualization</h2>
            <div class="text-center">
                <p class="text-gray-400 mb-4">Real-time energy monitoring dashboard</p>
                <p class="text-sm text-gray-500">Configure your Home Assistant entities in the add-on settings to see live data</p>
            </div>
        </div>
    </div>

    <script>
        // Simulate some data for demo
        function updateDemo() {
            document.getElementById('solar-power').textContent = Math.floor(Math.random() * 5000) + ' W';
            document.getElementById('battery-soc').textContent = Math.floor(Math.random() * 100) + '%';
            document.getElementById('grid-power').textContent = Math.floor(Math.random() * 2000) + ' W';
            document.getElementById('house-power').textContent = Math.floor(Math.random() * 3000) + ' W';
        }
        
        // Update demo data every 5 seconds
        setInterval(updateDemo, 5000);
        updateDemo();
    </script>
</body>
</html>
EOF

# Expose port
EXPOSE 8080

# Copy run script
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]