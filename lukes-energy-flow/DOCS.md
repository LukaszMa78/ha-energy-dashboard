# Lukes Energy Flow Documentation

## Overview

Lukes Energy Flow is a comprehensive Home Assistant add-on that provides beautiful, real-time visualization of your home energy system. Built with React and modern web technologies, it offers an intuitive interface for monitoring solar production, battery storage, grid consumption, and more.

## Architecture

The add-on is built using:
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Charts**: Recharts for data visualization
- **UI Components**: Radix UI primitives with shadcn/ui
- **Build Tool**: Vite for fast development and building
- **Container**: Alpine Linux based Docker container

## Components

### Main Dashboard Components

#### EnergyFlowDashboard
The primary dashboard component that orchestrates all energy data visualization:
- Real-time energy flow display
- Battery status monitoring
- Solar production charts
- Grid interaction monitoring
- Historical data analysis

#### DashboardHeader
Clean, modern header with:
- Current time and date
- System status indicators
- User controls and settings

#### DeviceCard
Reusable component for displaying individual device information:
- Device status (active/inactive)
- Real-time metrics
- Interactive controls

### Data Management

The add-on connects to Home Assistant entities to pull real-time data:

```yaml
entities:
  solar_panels: 
    - sensor.solar_panel_1_power
    - sensor.solar_panel_2_power
  battery_soc: sensor.battery_state_of_charge
  battery_power: sensor.battery_power
  grid_power: sensor.grid_power
  house_total_power: sensor.house_consumption
```

### Styling and Theming

The add-on uses a comprehensive design system defined in `src/index.css`:

- **Colors**: HSL-based color system with semantic tokens
- **Gradients**: Beautiful gradients for cards and backgrounds  
- **Shadows**: Layered shadow system for depth
- **Animations**: Smooth transitions and micro-interactions

### API Integration

The add-on provides RESTful endpoints for:
- Current energy status
- Historical data retrieval
- Device control (where supported)
- Configuration management

## Configuration

### Entity Mapping

Map your Home Assistant entities to the dashboard:

```yaml
options:
  entities:
    solar_panels: ["sensor.pv1_power", "sensor.pv2_power"]
    battery_soc: "sensor.battery_soc"
    battery_power: "sensor.battery_power"
    grid_power: "sensor.grid_power"
    house_total_power: "sensor.house_consumption"
```

### Customization

The dashboard supports various customization options:
- Theme colors and gradients
- Chart display preferences
- Data refresh intervals
- Alert thresholds

## Development

### Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

### Building the Add-on

1. Build the Docker image: `docker build -t lukes-energy-flow .`
2. Test locally: `docker run -p 8080:8080 lukes-energy-flow`

### Contributing

Contributions are welcome! Please read the contributing guidelines and submit pull requests for any improvements.

## Troubleshooting

### Common Issues

1. **Add-on won't start**: Check entity configuration and Home Assistant connectivity
2. **Missing data**: Verify entity names match your Home Assistant setup
3. **Performance issues**: Ensure adequate system resources

### Logs

Access add-on logs through Home Assistant supervisor or:
```bash
docker logs lukes-energy-flow
```

## Support

For support, bug reports, and feature requests:
- GitHub Issues: [Project Repository](https://github.com/LukaszMa78/ha-lukes-energy-flow)
- Home Assistant Community Forum
- Discord server

## License

MIT License - see LICENSE file for details.