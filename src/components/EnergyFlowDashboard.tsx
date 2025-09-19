import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Sun, 
  Zap, 
  Battery, 
  Home, 
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  Plug,
  Shield,
  Lightbulb,
  Tv,
  Microwave,
  Car,
  Thermometer,
  ChevronDown,
  ChevronRight,
  Building,
  Cpu,
  Activity,
  Gauge
} from 'lucide-react';

const EnergyFlowDashboard = () => {
  const [expandedFloors, setExpandedFloors] = useState<number[]>([]);
  const [expandedRooms, setExpandedRooms] = useState<string[]>([]);

  // Mock data - replace with Home Assistant entity IDs
  const energyData = {
    pv1: { 
      name: "South Roof PV", 
      power: 3.2, 
      voltage: 245, 
      current: 13.1, 
      production: 24.8,
      maxPower: 5.0,
      efficiency: 18.2 
    },
    pv2: { 
      name: "East Roof PV", 
      power: 2.8, 
      voltage: 238, 
      current: 11.8, 
      production: 21.2,
      maxPower: 4.5,
      efficiency: 17.8 
    },
    battery: { 
      power: -1.5, 
      soc: 78, 
      capacity: 13.5,
      voltage: 51.2,
      current: -29.3,
      timeToFull: "2h 15m",
      timeToEmpty: "8h 42m",
      temperature: 22.5,
      cycles: 1247
    },
    grid: { 
      power: 2.1, 
      voltage: 230, 
      current: 9.1, 
      frequency: 50.0,
      imported: 5.2, 
      exported: 12.3,
      cost: 0.24,
      feedInTariff: 0.08
    },
    inverter: { 
      power: 5.8, 
      efficiency: 97.2, 
      temperature: 45.3,
      dcVoltage: 385,
      acVoltage: 230,
      frequency: 50.0
    },
    backupDevices: [
      { name: 'Induction Hob', power: 2.1, voltage: 230, current: 9.1, icon: Zap, status: 'active' },
      { name: 'Wallbox', power: 7.2, voltage: 400, current: 10.4, icon: Car, status: 'charging' },
      { name: 'Heat Pump', power: 3.8, voltage: 400, current: 5.5, icon: Thermometer, status: 'heating' }
    ],
    house: {
      totalPower: 15.2,
      floors: [
        {
          name: "Ground Floor",
          power: 5.8,
          rooms: [
            {
              name: "Living Room",
              power: 1.2,
              devices: [
                { name: "TV", power: 0.15, status: "on" },
                { name: "Sound System", power: 0.08, status: "on" },
                { name: "LED Strips", power: 0.12, status: "on" },
                { name: "AC Unit", power: 0.85, status: "cooling" }
              ]
            },
            {
              name: "Kitchen",
              power: 2.1,
              devices: [
                { name: "Refrigerator", power: 0.15, status: "on" },
                { name: "Dishwasher", power: 1.2, status: "washing" },
                { name: "Coffee Machine", power: 0.05, status: "standby" },
                { name: "Microwave", power: 0.7, status: "heating" }
              ]
            },
            {
              name: "Dining Room",
              power: 0.3,
              devices: [
                { name: "Pendant Lights", power: 0.18, status: "on" },
                { name: "Floor Lamp", power: 0.12, status: "on" }
              ]
            },
            {
              name: "Guest Bathroom",
              power: 0.8,
              devices: [
                { name: "Heated Towel Rail", power: 0.6, status: "on" },
                { name: "Ventilation", power: 0.2, status: "on" }
              ]
            },
            {
              name: "Hallway",
              power: 1.4,
              devices: [
                { name: "Ceiling Lights", power: 0.25, status: "on" },
                { name: "Security System", power: 0.15, status: "armed" },
                { name: "Router/Network", power: 1.0, status: "on" }
              ]
            }
          ]
        },
        {
          name: "First Floor",
          power: 4.9,
          rooms: [
            {
              name: "Master Bedroom",
              power: 1.1,
              devices: [
                { name: "Bedside Lamps", power: 0.16, status: "on" },
                { name: "TV", power: 0.12, status: "standby" },
                { name: "AC Unit", power: 0.82, status: "cooling" }
              ]
            },
            {
              name: "Bedroom 2",
              power: 0.8,
              devices: [
                { name: "Desk Lamp", power: 0.08, status: "on" },
                { name: "Computer", power: 0.65, status: "on" },
                { name: "Phone Charger", power: 0.07, status: "charging" }
              ]
            },
            {
              name: "Bedroom 3",
              power: 0.4,
              devices: [
                { name: "Night Light", power: 0.05, status: "on" },
                { name: "Air Purifier", power: 0.35, status: "on" }
              ]
            },
            {
              name: "Main Bathroom",
              power: 1.2,
              devices: [
                { name: "Heated Towel Rail", power: 0.6, status: "on" },
                { name: "Ventilation", power: 0.3, status: "on" },
                { name: "Mirror Lights", power: 0.3, status: "on" }
              ]
            },
            {
              name: "Home Office",
              power: 1.4,
              devices: [
                { name: "Desktop PC", power: 0.85, status: "on" },
                { name: "Monitor 1", power: 0.25, status: "on" },
                { name: "Monitor 2", power: 0.25, status: "on" },
                { name: "Desk Light", power: 0.05, status: "on" }
              ]
            }
          ]
        },
        {
          name: "Second Floor",
          power: 4.5,
          rooms: [
            {
              name: "Attic Bedroom",
              power: 0.9,
              devices: [
                { name: "Ceiling Fan", power: 0.45, status: "on" },
                { name: "Reading Light", power: 0.08, status: "on" },
                { name: "Humidifier", power: 0.37, status: "on" }
              ]
            },
            {
              name: "Storage Room",
              power: 0.2,
              devices: [
                { name: "Motion Sensor Light", power: 0.12, status: "auto" },
                { name: "Dehumidifier", power: 0.08, status: "on" }
              ]
            },
            {
              name: "Laundry Room",
              power: 2.1,
              devices: [
                { name: "Washing Machine", power: 1.8, status: "washing" },
                { name: "Dryer", power: 0.2, status: "standby" },
                { name: "Iron", power: 0.1, status: "standby" }
              ]
            },
            {
              name: "Workshop",
              power: 0.8,
              devices: [
                { name: "Workbench Light", power: 0.18, status: "on" },
                { name: "Tool Charger", power: 0.25, status: "charging" },
                { name: "Air Compressor", power: 0.37, status: "standby" }
              ]
            },
            {
              name: "Roof Access",
              power: 0.5,
              devices: [
                { name: "Emergency Light", power: 0.05, status: "standby" },
                { name: "Weather Station", power: 0.45, status: "monitoring" }
              ]
            }
          ]
        }
      ]
    },
    pvPanels: {
      totalProduced: 47.7, // Total energy produced today
      currentPower: 7.3, // Combined current power from all panels
      voltage: 385,
      current: 18.9,
      panelsActive: 28, // Number of panels currently producing
      totalPanels: 30, // Default 30 panels, configurable
    }
  };

  const toggleFloor = (floorIndex: number) => {
    setExpandedFloors(prev => 
      prev.includes(floorIndex) 
        ? prev.filter(i => i !== floorIndex)
        : [...prev, floorIndex]
    );
  };

  const toggleRoom = (roomId: string) => {
    setExpandedRooms(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  const PVSystemCard = ({ pv, className = "" }) => (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Sun className="w-4 h-4 text-primary" />
          {pv.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-muted-foreground">Power</div>
            <div className="font-mono text-primary text-sm">{pv.power}kW</div>
          </div>
          <div>
            <div className="text-muted-foreground">Efficiency</div>
            <div className="font-mono text-sm">{((pv.power / pv.maxPower) * 100).toFixed(1)}%</div>
          </div>
          <div>
            <div className="text-muted-foreground">Voltage</div>
            <div className="font-mono text-sm">{pv.voltage}V</div>
          </div>
          <div>
            <div className="text-muted-foreground">Current</div>
            <div className="font-mono text-sm">{pv.current}A</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Today: {pv.production}kWh</span>
            <span className="text-muted-foreground">Max: {pv.maxPower}kW</span>
          </div>
          <Progress value={(pv.power / pv.maxPower) * 100} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );

  const BatteryCard = ({ battery }) => (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Battery className="w-4 h-4 text-primary" />
          Battery Storage
          <Badge variant={battery.power > 0 ? "default" : "secondary"} className="ml-auto">
            {battery.power > 0 ? 'Charging' : 'Discharging'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-muted-foreground">Power</div>
            <div className="font-mono text-primary text-sm">{Math.abs(battery.power)}kW</div>
          </div>
          <div>
            <div className="text-muted-foreground">SOC</div>
            <div className="font-mono text-sm">{battery.soc}%</div>
          </div>
          <div>
            <div className="text-muted-foreground">Voltage</div>
            <div className="font-mono text-sm">{battery.voltage}V</div>
          </div>
          <div>
            <div className="text-muted-foreground">Current</div>
            <div className="font-mono text-sm">{battery.current}A</div>
          </div>
          <div>
            <div className="text-muted-foreground">Temperature</div>
            <div className="font-mono text-sm">{battery.temperature}°C</div>
          </div>
          <div>
            <div className="text-muted-foreground">Cycles</div>
            <div className="font-mono text-sm">{battery.cycles}</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">
              {battery.power > 0 ? `Full in: ${battery.timeToFull}` : `Empty in: ${battery.timeToEmpty}`}
            </span>
            <span className="text-muted-foreground">{battery.capacity}kWh</span>
          </div>
          <Progress value={battery.soc} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );

  const InverterCard = ({ inverter }) => (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Cpu className="w-4 h-4 text-primary" />
          Inverter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-center">
          <div className="font-mono text-2xl text-primary">{inverter.power}kW</div>
          <div className="text-xs text-muted-foreground">Power Output</div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-muted-foreground">Efficiency</div>
            <div className="font-mono text-sm">{inverter.efficiency}%</div>
          </div>
          <div>
            <div className="text-muted-foreground">Temperature</div>
            <div className="font-mono text-sm">{inverter.temperature}°C</div>
          </div>
          <div>
            <div className="text-muted-foreground">DC Voltage</div>
            <div className="font-mono text-sm">{inverter.dcVoltage}V</div>
          </div>
          <div>
            <div className="text-muted-foreground">AC Voltage</div>
            <div className="font-mono text-sm">{inverter.acVoltage}V</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const GridCard = ({ grid }) => (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Plug className="w-4 h-4 text-primary" />
          Grid Connection
          <Badge variant={grid.power > 0 ? "destructive" : "default"} className="ml-auto">
            {grid.power > 0 ? 'Importing' : 'Exporting'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-muted-foreground">Power</div>
            <div className="font-mono text-primary text-sm">{Math.abs(grid.power)}kW</div>
          </div>
          <div>
            <div className="text-muted-foreground">Frequency</div>
            <div className="font-mono text-sm">{grid.frequency}Hz</div>
          </div>
          <div>
            <div className="text-muted-foreground">Voltage</div>
            <div className="font-mono text-sm">{grid.voltage}V</div>
          </div>
          <div>
            <div className="text-muted-foreground">Current</div>
            <div className="font-mono text-sm">{grid.current}A</div>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-muted-foreground">Imported Today</div>
            <div className="font-mono text-sm">{grid.imported}kWh</div>
            <div className="text-muted-foreground">€{(grid.imported * grid.cost).toFixed(2)}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Exported Today</div>
            <div className="font-mono text-sm">{grid.exported}kWh</div>
            <div className="text-muted-foreground">€{(grid.exported * grid.feedInTariff).toFixed(2)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const BackupDevicesCard = ({ devices }) => {
    const totalPower = devices.reduce((sum, device) => sum + device.power, 0);
    
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-primary" />
            Backup Devices
            <Badge className="ml-auto">{totalPower.toFixed(1)}kW</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {devices.map((device, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2">
                <device.icon className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-sm font-medium">{device.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {device.voltage}V • {device.current}A
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-primary">{device.power}kW</div>
                <Badge variant="outline" className="text-xs">
                  {device.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };

  const PVPanelsCard = ({ pvPanels }) => (
    <Card className="bg-gradient-card border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Sun className="w-4 h-4 text-primary" />
          PV Panel Array
          <Badge className="ml-auto">{pvPanels.panelsActive}/{pvPanels.totalPanels}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Solar Panel Visualization */}
        <div className="bg-muted/30 rounded-lg p-4 border border-primary/20">
          <div className="grid grid-cols-6 gap-1 mb-3">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-sm border ${
                  i < pvPanels.panelsActive
                    ? 'bg-gradient-to-br from-primary/60 to-primary/40 border-primary/40'
                    : 'bg-muted border-muted-foreground/20'
                }`}
              />
            ))}
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground">
              {pvPanels.totalPanels} panels • {((pvPanels.panelsActive / pvPanels.totalPanels) * 100).toFixed(0)}% active
            </div>
          </div>
        </div>

        {/* Power Metrics */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-muted-foreground">Total Produced</div>
            <div className="font-mono text-primary text-lg font-bold">{pvPanels.totalProduced}kWh</div>
          </div>
          <div>
            <div className="text-muted-foreground">Current Power</div>
            <div className="font-mono text-primary text-lg font-bold">{pvPanels.currentPower}kW</div>
          </div>
        </div>

        <Separator />

        {/* Electrical Details */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-muted-foreground">Voltage</div>
            <div className="font-mono text-sm">{pvPanels.voltage}V</div>
          </div>
          <div>
            <div className="text-muted-foreground">Current</div>
            <div className="font-mono text-sm">{pvPanels.current}A</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const HouseConsumptionCard = ({ house, backupDevices }) => (
    <Card className="h-fit">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Home className="w-4 h-4 text-primary" />
          House Consumption
          <Badge className="ml-auto">{house.totalPower}kW</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* House floors */}
        <div className="space-y-2">
          {house.floors.map((floor, floorIdx) => {
            const floorId = `floor-${floorIdx}`;
            const isExpanded = expandedFloors.includes(floorIdx);
            
            return (
              <div key={floorIdx} className="space-y-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between p-2 h-auto"
                  onClick={() => toggleFloor(floorIdx)}
                >
                  <div className="flex items-center gap-2">
                    <Building className="w-3 h-3" />
                    <span className="text-sm">{floor.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">{floor.power}kW</span>
                    {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                  </div>
                </Button>
                
                {isExpanded && (
                  <div className="ml-4 space-y-1 border-l border-border pl-2">
                    {floor.rooms.map((room, roomIdx) => {
                    const roomId = `${floorId}-room-${roomIdx}`;
                    const isRoomExpanded = expandedRooms.includes(roomId);
                    
                    return (
                      <div key={roomIdx} className="space-y-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-between p-1.5 h-auto text-xs"
                          onClick={() => toggleRoom(roomId)}
                        >
                          <div className="flex items-center gap-1.5">
                            <Lightbulb className="w-3 h-3" />
                            <span>{room.name}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-primary">{room.power}kW</span>
                            {isRoomExpanded ? <ChevronDown className="w-2.5 h-2.5" /> : <ChevronRight className="w-2.5 h-2.5" />}
                          </div>
                        </Button>
                        
                        {isRoomExpanded && (
                          <div className="ml-3 space-y-0.5 border-l border-border/50 pl-2">
                            {room.devices.map((device, deviceIdx) => (
                              <div key={deviceIdx} className="flex justify-between items-center py-1 text-xs">
                                <div className="flex items-center gap-1">
                                  <Activity className="w-2 h-2 text-muted-foreground" />
                                  <span className="text-muted-foreground">{device.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-mono text-primary">{device.power}kW</span>
                                  <Badge variant="outline" className="text-xs px-1 py-0">
                                    {device.status}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        </div>
        
        {/* Backup Devices */}
        <div className="pt-2 border-t border-border">
          <BackupDevicesCard devices={backupDevices} />
        </div>
      </CardContent>
    </Card>
  );

  const AnimatedArrow = ({ direction, power, className = "" }) => {
    const ArrowIcon = {
      right: ArrowRight,
      left: ArrowLeft,
      down: ArrowDown,
      up: ArrowUp
    }[direction];

    return (
      <div className={`absolute flex items-center justify-center ${className}`}>
        <div className="flex items-center space-x-1 bg-background/90 backdrop-blur px-3 py-1.5 rounded-full border shadow-lg">
          <ArrowIcon className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-xs font-mono text-primary font-medium">{Math.abs(power)}kW</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-background p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-primary mb-2">Home Assistant Energy Dashboard</h1>
        <p className="text-muted-foreground">Real-time energy monitoring with comprehensive device tracking</p>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 relative">
        
        {/* Top Left: PV Systems */}
        <div className="xl:col-span-1 space-y-4">
          <PVSystemCard pv={energyData.pv1} />
          <PVSystemCard pv={energyData.pv2} />
        </div>

        {/* Top Middle: PV Panels Array */}
        <div className="xl:col-span-2">
          <PVPanelsCard pvPanels={energyData.pvPanels} />
        </div>

        {/* Top Right: House Consumption */}
        <div className="xl:col-span-1">
          <HouseConsumptionCard house={energyData.house} backupDevices={energyData.backupDevices} />
        </div>

        {/* Middle Left: Battery */}
        <div className="xl:col-span-1">
          <BatteryCard battery={energyData.battery} />
        </div>

        {/* Middle Center: Inverter */}
        <div className="xl:col-span-2">
          <InverterCard inverter={energyData.inverter} />
        </div>

        {/* Middle Right: Empty for flow arrows */}
        <div className="xl:col-span-1 relative">
          {/* Energy Flow Arrows */}
          <div className="absolute inset-0">
            {/* PV to Inverter flows */}
            <AnimatedArrow 
              direction="right" 
              power={energyData.pv1.power + energyData.pv2.power} 
              className="top-1/4 left-1/2 transform -translate-x-1/2"
            />
            
            {/* Inverter to Battery */}
            <AnimatedArrow 
              direction="down" 
              power={energyData.battery.power} 
              className="top-1/2 left-1/4 transform -translate-x-1/2"
            />
            
            {/* Inverter to Home */}
            <AnimatedArrow 
              direction="up" 
              power={energyData.house.totalPower} 
              className="top-3/4 left-3/4 transform -translate-x-1/2"
            />
            
            {/* Grid interaction */}
            <AnimatedArrow 
              direction={energyData.grid.power > 0 ? "left" : "right"} 
              power={energyData.grid.power} 
              className="bottom-1/4 left-1/2 transform -translate-x-1/2"
            />
          </div>
        </div>

        {/* Middle Right: Empty for flow arrows */}
        <div className="xl:col-span-1 relative">
          {/* Energy Flow Arrows */}
          <div className="absolute inset-0">
            {/* PV to Inverter flows */}
            <AnimatedArrow 
              direction="right" 
              power={energyData.pv1.power + energyData.pv2.power} 
              className="top-1/4 left-1/2 transform -translate-x-1/2"
            />
            
            {/* Inverter to Battery */}
            <AnimatedArrow 
              direction="down" 
              power={energyData.battery.power} 
              className="top-1/2 left-1/4 transform -translate-x-1/2"
            />
            
            {/* Inverter to Home */}
            <AnimatedArrow 
              direction="up" 
              power={energyData.house.totalPower} 
              className="top-3/4 left-3/4 transform -translate-x-1/2"
            />
            
            {/* Grid interaction */}
            <AnimatedArrow 
              direction={energyData.grid.power > 0 ? "left" : "right"} 
              power={energyData.grid.power} 
              className="bottom-1/4 left-1/2 transform -translate-x-1/2"
            />
          </div>
        </div>

        {/* Bottom Left: Empty */}
        <div className="xl:col-span-1"></div>

        {/* Bottom Center: Empty */}
        <div className="xl:col-span-2"></div>

        {/* Bottom Right: Grid */}
        <div className="xl:col-span-1 xl:col-start-4">
          <GridCard grid={energyData.grid} />
        </div>
      </div>

      {/* Daily Summary */}
      <div className="mt-6">
        <Card className="bg-gradient-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-primary" />
              Daily Energy Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {(energyData.pv1.production + energyData.pv2.production).toFixed(1)}kWh
                </div>
                <div className="text-sm text-muted-foreground">Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">32.5kWh</div>
                <div className="text-sm text-muted-foreground">Consumed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">74%</div>
                <div className="text-sm text-muted-foreground">Self-sufficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">€12.80</div>
                <div className="text-sm text-muted-foreground">Daily Savings</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnergyFlowDashboard;