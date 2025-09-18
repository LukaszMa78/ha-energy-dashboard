import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Microwave
} from 'lucide-react';

const EnergyFlowDashboard = () => {
  // Mock data - in real app this would come from Home Assistant
  const energyData = {
    pv1: { power: 3.2, production: 24.8 },
    pv2: { power: 2.8, production: 21.2 },
    battery: { power: -1.5, soc: 78, capacity: 10 },
    grid: { power: 2.1, imported: 5.2, exported: 12.3 },
    inverter: { power: 5.8, efficiency: 97 },
    home: { power: 4.5, backup: 2.1, nonBackup: 2.4 },
    backupRooms: [
      { name: 'Living Room', power: 0.3 },
      { name: 'Kitchen', power: 0.4 },
      { name: 'Bedroom 1', power: 0.2 },
      { name: 'Bedroom 2', power: 0.1 },
      { name: 'Bathroom', power: 0.2 },
      { name: 'Office', power: 0.3 },
      { name: 'Hallway', power: 0.1 },
      { name: 'Storage', power: 0.5 }
    ],
    nonBackupDevices: [
      { name: 'Air Conditioning', power: 1.2, icon: Zap },
      { name: 'Electric Oven', power: 0.8, icon: Microwave },
      { name: 'Entertainment System', power: 0.4, icon: Tv }
    ]
  };

  const EnergySource = ({ icon: Icon, title, power, production, className = "" }) => (
    <Card className={`relative ${className}`}>
      <CardContent className="p-4 text-center">
        <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <div className="text-xs text-muted-foreground">
          <div className="font-mono text-primary">{power}kW</div>
          {production && <div>{production}kWh today</div>}
        </div>
      </CardContent>
    </Card>
  );

  const EnergyStorage = ({ power, soc, capacity }) => (
    <Card className="relative">
      <CardContent className="p-4 text-center">
        <Battery className="w-8 h-8 mx-auto mb-2 text-primary" />
        <h3 className="font-semibold text-sm mb-1">Battery</h3>
        <div className="text-xs text-muted-foreground">
          <div className="font-mono text-primary">{Math.abs(power)}kW {power > 0 ? '↑' : '↓'}</div>
          <div>{soc}% ({capacity}kWh)</div>
        </div>
        <div className="w-full bg-muted h-2 rounded mt-2">
          <div 
            className="h-full bg-primary rounded transition-all duration-500"
            style={{ width: `${soc}%` }}
          />
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
        <div className="flex items-center space-x-1 bg-background/80 backdrop-blur px-2 py-1 rounded-full border">
          <ArrowIcon className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-xs font-mono text-primary">{Math.abs(power)}kW</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Energy Dashboard</h1>
        <p className="text-muted-foreground">Real-time energy flow monitoring</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Energy Sources Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Energy Sources</h2>
          
          {/* PV Plants */}
          <EnergySource 
            icon={Sun}
            title="PV Plant 1"
            power={energyData.pv1.power}
            production={energyData.pv1.production}
          />
          
          <EnergySource 
            icon={Sun}
            title="PV Plant 2"
            power={energyData.pv2.power}
            production={energyData.pv2.production}
          />

          {/* Grid Connection */}
          <Card>
            <CardContent className="p-4 text-center">
              <Plug className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold text-sm mb-1">Grid</h3>
              <div className="text-xs text-muted-foreground">
                <div className="font-mono text-primary">
                  {energyData.grid.power}kW {energyData.grid.power > 0 ? '←' : '→'}
                </div>
                <div className="flex justify-between mt-1">
                  <span>↓ {energyData.grid.imported}kWh</span>
                  <span>↑ {energyData.grid.exported}kWh</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Central Processing Column */}
        <div className="relative space-y-6">
          <h2 className="text-xl font-semibold mb-4 text-center">System Core</h2>
          
          {/* Inverter */}
          <Card>
            <CardContent className="p-4 text-center">
              <Zap className="w-10 h-10 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Inverter</h3>
              <div className="text-sm text-muted-foreground">
                <div className="font-mono text-primary text-lg">{energyData.inverter.power}kW</div>
                <div>Efficiency: {energyData.inverter.efficiency}%</div>
              </div>
            </CardContent>
          </Card>

          {/* Battery */}
          <EnergyStorage 
            power={energyData.battery.power}
            soc={energyData.battery.soc}
            capacity={energyData.battery.capacity}
          />

          {/* Total Home Consumption */}
          <Card>
            <CardContent className="p-4 text-center">
              <Home className="w-10 h-10 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Home Consumption</h3>
              <div className="text-sm text-muted-foreground">
                <div className="font-mono text-primary text-lg">{energyData.home.power}kW</div>
                <div className="flex justify-between mt-2">
                  <Badge variant="outline">
                    <Shield className="w-3 h-3 mr-1" />
                    Backup: {energyData.home.backup}kW
                  </Badge>
                  <Badge variant="secondary">
                    Standard: {energyData.home.nonBackup}kW
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Home Loads Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Home Circuits</h2>
          
          {/* Backup Line - 8 Rooms */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-semibold">Backup Circuit</h3>
                <Badge className="ml-auto">{energyData.home.backup}kW</Badge>
              </div>
              <div className="space-y-2">
                {energyData.backupRooms.map((room, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <Lightbulb className="w-3 h-3 mr-2 text-muted-foreground" />
                      <span>{room.name}</span>
                    </div>
                    <span className="font-mono text-primary">{room.power}kW</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Non-Backup Line - 3 Devices */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-semibold">Standard Circuit</h3>
                <Badge className="ml-auto">{energyData.home.nonBackup}kW</Badge>
              </div>
              <div className="space-y-3">
                {energyData.nonBackupDevices.map((device, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <device.icon className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{device.name}</span>
                    </div>
                    <span className="font-mono text-primary">{device.power}kW</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Energy Flow Summary */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold mb-2">Daily Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-muted-foreground">Generated</div>
                  <div className="font-mono text-primary">46.0kWh</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Consumed</div>
                  <div className="font-mono text-primary">32.5kWh</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Self-use</div>
                  <div className="font-mono text-primary">74%</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Savings</div>
                  <div className="font-mono text-primary">€12.80</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Energy Flow Arrows - Positioned Absolutely */}
      <div className="fixed inset-0 pointer-events-none">
        {/* PV to Inverter flows */}
        <AnimatedArrow 
          direction="right" 
          power={energyData.pv1.power} 
          className="top-1/3 left-1/4"
        />
        
        {/* Inverter to Battery */}
        <AnimatedArrow 
          direction="down" 
          power={energyData.battery.power} 
          className="top-1/2 left-1/2"
        />
        
        {/* Inverter to Home */}
        <AnimatedArrow 
          direction="right" 
          power={energyData.home.power} 
          className="top-2/3 left-2/3"
        />
        
        {/* Grid interaction */}
        <AnimatedArrow 
          direction={energyData.grid.power > 0 ? "right" : "left"} 
          power={energyData.grid.power} 
          className="bottom-1/3 left-1/4"
        />
      </div>
    </div>
  );
};

export default EnergyFlowDashboard;