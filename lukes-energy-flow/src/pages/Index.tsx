import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import DeviceCard from "@/components/DeviceCard";
import RoomSection from "@/components/RoomSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Thermometer, 
  Shield, 
  Volume2, 
  Tv, 
  Wifi,
  ChefHat,
  Zap,
  Camera,
  Lock,
  Wind,
  Droplets,
  Battery,
  ArrowRight
} from "lucide-react";

interface Device {
  id: string;
  name: string;
  icon: any;
  isActive: boolean;
  status?: string;
  showToggle?: boolean;
}

const Index = () => {
  const [devices, setDevices] = useState<Device[]>([
    { id: "1", name: "Living Room Lights", icon: Lightbulb, isActive: true, status: "3 lights on" },
    { id: "2", name: "Thermostat", icon: Thermometer, isActive: true, status: "22°C" },
    { id: "3", name: "Security System", icon: Shield, isActive: true, status: "Armed", showToggle: false },
    { id: "4", name: "Sound System", icon: Volume2, isActive: false, status: "Spotify ready" },
    { id: "5", name: "Smart TV", icon: Tv, isActive: false, status: "Netflix" },
    { id: "6", name: "WiFi Router", icon: Wifi, isActive: true, status: "Connected", showToggle: false },
    { id: "7", name: "Indukcja + wyspa", icon: ChefHat, isActive: false, status: "Ready to cook" },
    { id: "8", name: "Main Power", icon: Zap, isActive: true, status: "230V", showToggle: false },
    { id: "9", name: "Front Camera", icon: Camera, isActive: true, status: "Recording", showToggle: false },
    { id: "10", name: "Smart Lock", icon: Lock, isActive: true, status: "Locked", showToggle: false },
    { id: "11", name: "Air Conditioning", icon: Wind, isActive: false, status: "Auto mode" },
    { id: "12", name: "Garden Sprinklers", icon: Droplets, isActive: false, status: "Next: 6:00 AM" }
  ]);

  const toggleDevice = (deviceId: string) => {
    setDevices(devices.map(device => 
      device.id === deviceId 
        ? { ...device, isActive: !device.isActive }
        : device
    ));
  };

  const livingRoomDevices = devices.slice(0, 6);
  const kitchenDevices = devices.slice(6, 8);
  const securityDevices = devices.slice(8, 10);
  const outdoorDevices = devices.slice(10);

  return (
    <div className="min-h-screen bg-gradient-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Energy Dashboard Navigation */}
        <Card className="bg-gradient-card border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Battery className="w-6 h-6 text-primary" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Energy Management</h2>
                  <p className="text-muted-foreground">Monitor PV systems, battery, and home consumption</p>
                </div>
              </div>
              <Link to="/energy">
                <Button className="flex items-center gap-2">
                  View Energy Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <RoomSection title="Living Room">
          {livingRoomDevices.map((device) => (
            <DeviceCard
              key={device.id}
              name={device.name}
              icon={device.icon}
              isActive={device.isActive}
              status={device.status}
              showToggle={device.showToggle}
              onToggle={() => toggleDevice(device.id)}
            />
          ))}
        </RoomSection>

        <RoomSection title="Kitchen">
          {kitchenDevices.map((device) => (
            <DeviceCard
              key={device.id}
              name={device.name}
              icon={device.icon}
              isActive={device.isActive}
              status={device.status}
              showToggle={device.showToggle}
              onToggle={() => toggleDevice(device.id)}
            />
          ))}
        </RoomSection>

        <RoomSection title="Security & Monitoring">
          {securityDevices.map((device) => (
            <DeviceCard
              key={device.id}
              name={device.name}
              icon={device.icon}
              isActive={device.isActive}
              status={device.status}
              showToggle={device.showToggle}
              onToggle={() => toggleDevice(device.id)}
            />
          ))}
        </RoomSection>

        <RoomSection title="Outdoor">
          {outdoorDevices.map((device) => (
            <DeviceCard
              key={device.id}
              name={device.name}
              icon={device.icon}
              isActive={device.isActive}
              status={device.status}
              showToggle={device.showToggle}
              onToggle={() => toggleDevice(device.id)}
            />
          ))}
        </RoomSection>
      </main>
    </div>
  );
};

export default Index;