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
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

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
      cycles: 1247,
      dailyLevels: [
        { time: '00:00', level: 45 },
        { time: '01:00', level: 42 },
        { time: '02:00', level: 40 },
        { time: '03:00', level: 38 },
        { time: '04:00', level: 36 },
        { time: '05:00', level: 34 },
        { time: '06:00', level: 32 },
        { time: '07:00', level: 35 },
        { time: '08:00', level: 42 },
        { time: '09:00', level: 58 },
        { time: '10:00', level: 72 },
        { time: '11:00', level: 85 },
        { time: '12:00', level: 95 },
        { time: '13:00', level: 98 },
        { time: '14:00', level: 95 },
        { time: '15:00', level: 90 },
        { time: '16:00', level: 85 },
        { time: '17:00', level: 82 },
        { time: '18:00', level: 78 }
      ]
    },
    grid: { 
      power: 2.1, 
      voltage: { phase1: 229.8, phase2: 230.2, phase3: 229.9 },
      current: { phase1: 9.1, phase2: 8.8, phase3: 9.3 },
      frequency: { phase1: 50.02, phase2: 49.98, phase3: 50.01 },
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
      acVoltage: { phase1: 229.5, phase2: 230.1, phase3: 229.8 },
      current: { phase1: 8.4, phase2: 8.2, phase3: 8.7 },
      frequency: { phase1: 50.01, phase2: 49.99, phase3: 50.02 }
    },
    backupDevices: [
      { name: 'Induction Hob', power: 2.1, voltage: 230, current: 9.1, energyToday: 8.4, icon: Zap, status: 'active' },
      { name: 'Wallbox', power: 7.2, voltage: 400, current: 10.4, energyToday: 28.6, icon: Car, status: 'charging' },
      { name: 'Heat Pump', power: 3.8, voltage: 400, current: 5.5, energyToday: 15.2, icon: Thermometer, status: 'heating' }
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
      totalProduced: 47.7,
      forecastToday: 52.3,
      forecastUpcoming: [
        { day: 'Tomorrow', value: 48.7 },
        { day: 'Tuesday', value: 51.2 },
        { day: 'Wednesday', value: 49.8 },
        { day: 'Thursday', value: 53.1 },
        { day: 'Friday', value: 50.9 },
        { day: 'Saturday', value: 47.3 }
      ],
      currentPower: 7.3,
      totalPanels: 30,
      panels: Array.from({ length: 30 }, (_, i) => ({
        name: `Panel ${String(i + 1).padStart(2, '0')}`,
        energyToday: (Math.random() * 2 + 0.5).toFixed(1), // Random energy 0.5-2.5 kWh
        power: Math.random() > 0.1 ? (Math.random() * 0.4 + 0.1).toFixed(2) : '0.00', // 90% active
        voltage: Math.random() > 0.1 ? (380 + Math.random() * 10).toFixed(0) : '0',
        current: Math.random() > 0.1 ? (Math.random() * 2 + 0.5).toFixed(1) : '0.0',
        active: Math.random() > 0.1
      }))
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
        
        {/* Battery Level Chart */}
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">Battery Level Today</div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={battery.dailyLevels}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                  interval="preserveStartEnd"
                />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="level" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 3, fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
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
        </div>
        
        {/* Three-phase AC measurements */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">AC Phase Measurements</div>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="text-muted-foreground font-medium">Phase</div>
            <div className="text-muted-foreground font-medium">Frequency</div>
            <div className="text-muted-foreground font-medium">Voltage</div>
            <div className="text-muted-foreground font-medium">Current</div>
            
            <div className="text-muted-foreground">L1</div>
            <div className="font-mono text-sm">{inverter.frequency.phase1}Hz</div>
            <div className="font-mono text-sm">{inverter.acVoltage.phase1}V</div>
            <div className="font-mono text-sm">{inverter.current.phase1}A</div>
            
            <div className="text-muted-foreground">L2</div>
            <div className="font-mono text-sm">{inverter.frequency.phase2}Hz</div>
            <div className="font-mono text-sm">{inverter.acVoltage.phase2}V</div>
            <div className="font-mono text-sm">{inverter.current.phase2}A</div>
            
            <div className="text-muted-foreground">L3</div>
            <div className="font-mono text-sm">{inverter.frequency.phase3}Hz</div>
            <div className="font-mono text-sm">{inverter.acVoltage.phase3}V</div>
            <div className="font-mono text-sm">{inverter.current.phase3}A</div>
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
          <div className="col-span-2">
            <div className="text-muted-foreground">Power</div>
            <div className="font-mono text-primary text-sm">{Math.abs(grid.power)}kW</div>
          </div>
        </div>
        
        {/* Three-phase measurements */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">Phase Measurements</div>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="text-muted-foreground font-medium">Phase</div>
            <div className="text-muted-foreground font-medium">Frequency</div>
            <div className="text-muted-foreground font-medium">Voltage</div>
            <div className="text-muted-foreground font-medium">Current</div>
            
            <div className="text-muted-foreground">L1</div>
            <div className="font-mono text-sm">{grid.frequency.phase1}Hz</div>
            <div className="font-mono text-sm">{grid.voltage.phase1}V</div>
            <div className="font-mono text-sm">{grid.current.phase1}A</div>
            
            <div className="text-muted-foreground">L2</div>
            <div className="font-mono text-sm">{grid.frequency.phase2}Hz</div>
            <div className="font-mono text-sm">{grid.voltage.phase2}V</div>
            <div className="font-mono text-sm">{grid.current.phase2}A</div>
            
            <div className="text-muted-foreground">L3</div>
            <div className="font-mono text-sm">{grid.frequency.phase3}Hz</div>
            <div className="font-mono text-sm">{grid.voltage.phase3}V</div>
            <div className="font-mono text-sm">{grid.current.phase3}A</div>
          </div>
        </div>
        
        <Separator />
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-muted-foreground">Imported Today</div>
            <div className="font-mono text-sm">{grid.imported}kWh</div>
            <div className="text-muted-foreground">{(grid.imported * grid.cost).toFixed(2)} PLN</div>
          </div>
          <div>
            <div className="text-muted-foreground">Exported Today</div>
            <div className="font-mono text-sm">{grid.exported}kWh</div>
            <div className="text-muted-foreground">{(grid.exported * grid.feedInTariff).toFixed(2)} PLN</div>
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
                    {device.power}kW • {device.voltage}V • {device.current}A
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-primary">{device.power}kW</div>
                <div className="text-xs text-muted-foreground mb-1">Today: {device.energyToday}kWh</div>
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

  const PVPanelsCard = ({ pvPanels }) => {
    const activePanels = pvPanels.panels.filter(panel => panel.active).length;
    
    return (
      <Card className="bg-gradient-card border-primary/20 h-fit">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Sun className="w-4 h-4 text-primary" />
            PV Panel Array
            <Badge className="ml-auto">{activePanels}/{pvPanels.totalPanels}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Panel List */}
          <div className="max-h-60 overflow-y-auto space-y-1">
            {pvPanels.panels.map((panel, i) => (
              <div key={i} className={`flex items-center justify-between p-2 rounded text-xs border ${
                panel.active 
                  ? 'bg-primary/5 border-primary/20' 
                  : 'bg-muted/50 border-muted-foreground/20 opacity-60'
              }`}>
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`w-2 h-2 rounded-full ${
                    panel.active ? 'bg-primary' : 'bg-muted-foreground'
                  }`} />
                  <span className="font-medium">{panel.name}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span>{panel.energyToday}kWh</span>
                  <span className="text-primary">{panel.power}kW</span>
                  <span>{panel.voltage}V</span>
                  <span>{panel.current}A</span>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Summary */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-muted-foreground">Total Today</div>
                <div className="font-mono text-primary font-bold">{pvPanels.totalProduced}kWh</div>
              </div>
              <div>
                <div className="text-muted-foreground">Total Power</div>
                <div className="font-mono text-primary font-bold">{pvPanels.currentPower}kW</div>
              </div>
            </div>
            
            <div>
              <div className="text-muted-foreground text-xs mb-2">Forecast Today</div>
              <div className="font-mono text-foreground font-bold text-sm">{pvPanels.forecastToday}kWh</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-muted-foreground text-xs">Upcoming Forecasts</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {pvPanels.forecastUpcoming.map((forecast, i) => (
                  <div key={i} className="flex items-center gap-1 whitespace-nowrap">
                    <span className="text-muted-foreground">Forecast {forecast.day}:</span>
                    <span className="font-mono text-foreground">{forecast.value}kWh</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

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


  return (
    <div className="min-h-screen bg-gradient-background p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-primary mb-2">Home Assistant Energy Dashboard</h1>
        <p className="text-muted-foreground">Real-time energy monitoring with comprehensive device tracking</p>
      </header>

      {/* Main Grid Layout */}
      <div className="space-y-4">
        
        {/* Top Row: PV Systems, PV Panels, House Consumption */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          {/* PV Systems */}
          <div className="xl:col-span-1 space-y-4">
            <PVSystemCard pv={energyData.pv1} />
            <PVSystemCard pv={energyData.pv2} />
          </div>

          {/* PV Panels Array - Extended */}
          <div className="xl:col-span-2">
            <PVPanelsCard pvPanels={energyData.pvPanels} />
          </div>

          {/* House Consumption */}
          <div className="xl:col-span-1">
            <HouseConsumptionCard house={energyData.house} backupDevices={energyData.backupDevices} />
          </div>
        </div>

        {/* Middle Row: Battery, Inverter, Grid in one line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BatteryCard battery={energyData.battery} />
          <InverterCard inverter={energyData.inverter} />
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
                <div className="text-2xl font-bold text-primary">52.40 PLN</div>
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