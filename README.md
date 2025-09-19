# Energy Flow Dashboard Add-on Repository

[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FLukaszMa78%2Fha-energy-dashboard)

A beautiful energy monitoring dashboard for Home Assistant that displays solar production, battery status, grid consumption, and household energy usage.

## Add-ons

This repository contains the following add-on:

### Energy Flow Dashboard

![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield] ![Supports i386 Architecture][i386-shield]

A comprehensive energy monitoring dashboard that provides real-time visualization of:

- Solar panel production
- Battery status and power flow
- Grid import/export metrics
- Household consumption by room
- Inverter performance

## Installation

1. Add this repository to your Home Assistant:
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FLukaszMa78%2Fha-energy-dashboard)

2. Navigate to **Settings** → **Add-ons** → **Add-on Store**
3. Find "Energy Flow Dashboard" and click **Install**
4. Configure your energy entities in the add-on configuration
5. Start the add-on and open the web UI

## Configuration

The add-on requires configuration of your Home Assistant entities for:

- Solar panel sensors
- Battery sensors (SOC, power, voltage, current)
- Grid sensors (power, import/export energy)
- Inverter sensors (power, efficiency, temperature)
- House consumption sensors by room

## Support

For issues and feature requests, please visit the [GitHub repository](https://github.com/LukaszMa78/ha-energy-dashboard).

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
