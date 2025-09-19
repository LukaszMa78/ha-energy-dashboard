# Energy Flow Dashboard Add-on Documentation

## About

The Energy Flow Dashboard is a beautiful, comprehensive energy monitoring add-on for Home Assistant that provides real-time visualization of your solar panels, battery storage, grid connection, and household energy consumption.

## Installation

1. Add this repository to your Home Assistant
2. Install the "Energy Flow Dashboard" add-on
3. Configure your energy entities
4. Start the add-on
5. Open the web UI

## Configuration

The add-on requires configuration of your Home Assistant entities for proper operation. Below is an example configuration:

```yaml
entities:
  solar_panels:
    - sensor.solar_panel_01_power
    - sensor.solar_panel_02_power
  battery:
    soc: sensor.battery_state_of_charge
    power: sensor.battery_power
    voltage: sensor.battery_voltage
    current: sensor.battery_current
  grid:
    power: sensor.grid_power
    voltage: sensor.grid_voltage
    current: sensor.grid_current
    import_energy: sensor.grid_import_today
    export_energy: sensor.grid_export_today
  inverter:
    power: sensor.inverter_power
    efficiency: sensor.inverter_efficiency
    temperature: sensor.inverter_temperature
    ac_phases:
      - sensor.inverter_phase_1
      - sensor.inverter_phase_2
      - sensor.inverter_phase_3
  house:
    total_power: sensor.house_total_power
    rooms:
      - name: Living Room
        entities:
          - sensor.living_room_power
      - name: Kitchen
        entities:
          - sensor.kitchen_power
```

### Configuration Options

#### `entities`
**Required**: Yes  
**Type**: Object

Main configuration section for all energy entities.

#### `entities.solar_panels`
**Required**: No  
**Type**: List of strings  
**Description**: List of solar panel sensor entities to monitor

#### `entities.battery`
**Required**: No  
**Type**: Object  
**Description**: Battery monitoring configuration

- `soc`: State of charge sensor (percentage)
- `power`: Power flow sensor (W)
- `voltage`: Battery voltage sensor (V) - optional
- `current`: Battery current sensor (A) - optional

#### `entities.grid`
**Required**: No  
**Type**: Object  
**Description**: Grid connection monitoring

- `power`: Grid power sensor (W) - positive for import, negative for export
- `voltage`: Grid voltage sensor (V) - optional
- `current`: Grid current sensor (A) - optional
- `import_energy`: Daily import energy sensor (kWh) - optional
- `export_energy`: Daily export energy sensor (kWh) - optional

#### `entities.inverter`
**Required**: No  
**Type**: Object  
**Description**: Solar inverter monitoring

- `power`: Inverter output power (W)
- `efficiency`: Inverter efficiency (%) - optional
- `temperature`: Inverter temperature (°C) - optional
- `ac_phases`: List of AC phase sensors - optional

#### `entities.house`
**Required**: No  
**Type**: Object  
**Description**: House consumption monitoring

- `total_power`: Total house power consumption (W)
- `rooms`: List of room configurations - optional

Each room configuration requires:
- `name`: Display name for the room
- `entities`: List of power sensor entities for that room

## Features

### Real-time Monitoring
- Live updates from Home Assistant sensors
- WebSocket connection for instant data refresh
- Color-coded status indicators

### Solar Panel Tracking
- Individual panel monitoring
- Total production statistics
- Performance indicators

### Battery Management
- State of charge visualization
- Charging/discharging status
- Historical data tracking

### Grid Integration
- Import/export monitoring
- Cost tracking capabilities
- Connection status

### Smart Home Integration
- Room-by-room consumption
- Device-level monitoring
- Expandable views

## Troubleshooting

### Add-on Won't Start
1. Check that all configured entities exist in Home Assistant
2. Verify entity names are spelled correctly
3. Ensure sensors are providing numeric values

### No Data Displayed
1. Verify entities are configured correctly
2. Check Home Assistant API access
3. Review add-on logs for errors

### Web UI Not Accessible
1. Confirm add-on is running
2. Check port configuration (default: 8080)
3. Verify ingress settings

## Support

For issues and feature requests, visit the [GitHub repository](https://github.com/LukaszMa78/ha-energy-dashboard).