#!/usr/bin/with-contenv bashio

# ==============================================================================
# Home Assistant Add-on: Lukes Energy Flow
# Runs the energy dashboard
# ==============================================================================

bashio::log.info "Starting Lukes Energy Flow dashboard..."

# Check if configuration is valid
if ! bashio::config.has_value 'entities.battery_soc'; then
    bashio::log.warning "Battery SOC entity not configured"
fi

if ! bashio::config.has_value 'entities.grid_power'; then
    bashio::log.warning "Grid power entity not configured"
fi

if ! bashio::config.has_value 'entities.house_total_power'; then
    bashio::log.warning "House total power entity not configured"
fi

# Set the Home Assistant API URL and token
export HASS_URL="http://supervisor/core/api"
export HASS_TOKEN="${SUPERVISOR_TOKEN}"

# Change to app directory
cd /app || bashio::exit.nok "Could not change to app directory"

# Start the application
bashio::log.info "Starting Node.js server on port 8080..."
exec node server.js