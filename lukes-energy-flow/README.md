# Lukes Energy Flow - Home Assistant Add-on

Beautiful energy monitoring dashboard with advanced flow visualization for solar panels, battery storage, and home consumption tracking.

## Features

- **Real-time Energy Monitoring**: Live tracking of solar production, battery status, and home consumption
- **Interactive Dashboard**: Modern, responsive interface with detailed charts and metrics
- **Multi-device Support**: Monitor multiple solar panels, inverters, and energy storage systems
- **Historical Data**: View energy trends over time with customizable date ranges
- **Home Assistant Integration**: Seamless integration with Home Assistant entities

## Installation

1. Add this repository to your Home Assistant add-on store
2. Install the "Lukes Energy Flow" add-on
3. Configure your energy entities in the add-on options
4. Start the add-on

## Configuration

Configure the following entities in the add-on options:

### Solar Panels
- `solar_panels`: List of solar panel entities

### Battery System
- `battery_soc`: Battery state of charge sensor
- `battery_power`: Battery power sensor
- `battery_voltage`: Battery voltage sensor (optional)
- `battery_current`: Battery current sensor (optional)

### Grid Connection
- `grid_power`: Grid power sensor
- `grid_voltage`: Grid voltage sensor (optional)
- `grid_current`: Grid current sensor (optional)
- `grid_import_energy`: Grid import energy sensor (optional)
- `grid_export_energy`: Grid export energy sensor (optional)

### Inverter
- `inverter_power`: Inverter power sensor
- `inverter_efficiency`: Inverter efficiency sensor (optional)
- `inverter_temperature`: Inverter temperature sensor (optional)
- `inverter_ac_phases`: List of AC phase entities

### Home Consumption
- `house_total_power`: Total home power consumption sensor
- `house_rooms`: List of room-specific power sensors

## Screenshots

The dashboard provides a comprehensive view of your energy system with:
- Real-time energy flow visualization
- Interactive charts and graphs
- Detailed metrics for each component
- Historical data analysis
- Device status monitoring

## Support

For issues and feature requests, please visit the [GitHub repository](https://github.com/LukaszMa78/ha-lukes-energy-flow).

## License

This project is licensed under the MIT License.