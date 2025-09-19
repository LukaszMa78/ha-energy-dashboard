# Energy Flow Dashboard - Home Assistant Add-on

A beautiful, real-time energy monitoring dashboard for Home Assistant that visualizes your solar panels, battery storage, grid connection, and household energy consumption.

## About

This add-on provides a comprehensive energy monitoring interface that connects to your Home Assistant instance to display:

- **Solar Panel Monitoring**: Individual panel performance with energy, power, voltage, and current data
- **Battery Storage**: Real-time battery status, state of charge, and historical data
- **Grid Connection**: Import/export status with financial tracking
- **Inverter Monitoring**: Multi-phase power measurements and efficiency metrics
- **House Consumption**: Room-by-room energy usage breakdown
- **Backup Devices**: UPS and generator status monitoring

## Installation

1. Add this repository to your Home Assistant add-on store
2. Install the "Energy Flow Dashboard" add-on
3. Configure your Home Assistant entities in the add-on configuration
4. Start the add-on
5. Access the dashboard through the Web UI

## Configuration

```yaml
supervisor_api: true
homeassistant_api: true
host_network: true
entities:
  # Solar Panel Entities (configure up to 30 panels)
  solar_panels:
    - sensor.solar_panel_01_power
    - sensor.solar_panel_01_voltage
    - sensor.solar_panel_01_current
    - sensor.solar_panel_01_energy_today
  
  # Battery Entities
  battery:
    power: sensor.battery_power
    soc: sensor.battery_soc
    voltage: sensor.battery_voltage
    current: sensor.battery_current
  
  # Grid Entities
  grid:
    power: sensor.grid_power
    import_today: sensor.grid_import_today
    export_today: sensor.grid_export_today
  
  # Inverter Entities
  inverter:
    power: sensor.inverter_power
    efficiency: sensor.inverter_efficiency
    temperature: sensor.inverter_temperature
    
  # House Consumption Entities (by room)
  consumption:
    living_room: sensor.living_room_power
    kitchen: sensor.kitchen_power
    bedroom_1: sensor.bedroom_1_power
    # Add more rooms as needed
```

## Features

### 🌞 Solar Panel Monitoring
- Individual panel performance tracking
- Real-time power, voltage, and current measurements
- Daily energy production per panel
- Active/inactive panel status
- Scrollable panel list with hidden scrollbars

### 🔋 Battery Management
- State of charge visualization
- Power flow (charging/discharging)
- Historical performance charts
- Battery health indicators

### ⚡ Grid Connection
- Import/export status with color coding
- Daily/monthly energy statistics
- Cost tracking and financial overview
- Real-time power flow visualization

### 🏠 Smart Home Integration
- Room-by-room consumption breakdown
- Device-level monitoring
- Expandable floor and room views
- Real-time device status

### 📊 Advanced Analytics
- Historical data visualization
- Energy forecasting
- Efficiency metrics
- Performance trends

## API Integration

The add-on connects to Home Assistant's API to fetch real-time data from your configured entities. It supports:

- WebSocket connections for real-time updates
- RESTful API integration
- Automatic entity discovery
- Configurable update intervals

## Supported Hardware

This add-on works with any Home Assistant compatible energy monitoring hardware:

- Solar inverters (SolarEdge, Fronius, Huawei, etc.)
- Battery systems (Tesla Powerwall, LG Chem, Pylontech, etc.)
- Smart meters and energy monitors
- Individual smart plugs and switches

## Development

This project was built with Lovable and synced to GitHub. The dashboard is built using:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Local Development

```sh
# Clone the repository
git clone https://github.com/LukaszMa78/ha-energy-dashboard.git

# Navigate to the project directory
cd ha-energy-dashboard

# Install dependencies
npm i

# Start the development server
npm run dev
```

## Support

For support and feature requests, please visit the [GitHub repository](https://github.com/LukaszMa78/ha-energy-dashboard) or the [Home Assistant Community Forum](https://community.home-assistant.io/).

## Changelog

### v1.0.0
- Initial release
- Complete energy monitoring dashboard
- Home Assistant API integration
- Responsive design with dark/light mode support
- Real-time data updates

## License

This project is licensed under the MIT License - see the LICENSE file for details.
