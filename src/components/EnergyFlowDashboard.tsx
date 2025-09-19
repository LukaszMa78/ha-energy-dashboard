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
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

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
      efficiency: 18.2,
      dailyProduction: [
        { time: '00:00', power: 0 },
        { time: '00:05', power: 0 },
        { time: '00:10', power: 0 },
        { time: '00:15', power: 0 },
        { time: '00:20', power: 0 },
        { time: '00:25', power: 0 },
        { time: '00:30', power: 0 },
        { time: '00:35', power: 0 },
        { time: '00:40', power: 0 },
        { time: '00:45', power: 0 },
        { time: '00:50', power: 0 },
        { time: '00:55', power: 0 },
        { time: '01:00', power: 0 },
        { time: '01:05', power: 0 },
        { time: '01:10', power: 0 },
        { time: '01:15', power: 0 },
        { time: '01:20', power: 0 },
        { time: '01:25', power: 0 },
        { time: '01:30', power: 0 },
        { time: '01:35', power: 0 },
        { time: '01:40', power: 0 },
        { time: '01:45', power: 0 },
        { time: '01:50', power: 0 },
        { time: '01:55', power: 0 },
        { time: '02:00', power: 0 },
        { time: '02:05', power: 0 },
        { time: '02:10', power: 0 },
        { time: '02:15', power: 0 },
        { time: '02:20', power: 0 },
        { time: '02:25', power: 0 },
        { time: '02:30', power: 0 },
        { time: '02:35', power: 0 },
        { time: '02:40', power: 0 },
        { time: '02:45', power: 0 },
        { time: '02:50', power: 0 },
        { time: '02:55', power: 0 },
        { time: '03:00', power: 0 },
        { time: '03:05', power: 0 },
        { time: '03:10', power: 0 },
        { time: '03:15', power: 0 },
        { time: '03:20', power: 0 },
        { time: '03:25', power: 0 },
        { time: '03:30', power: 0 },
        { time: '03:35', power: 0 },
        { time: '03:40', power: 0 },
        { time: '03:45', power: 0 },
        { time: '03:50', power: 0 },
        { time: '03:55', power: 0 },
        { time: '04:00', power: 0 },
        { time: '04:05', power: 0 },
        { time: '04:10', power: 0 },
        { time: '04:15', power: 0 },
        { time: '04:20', power: 0 },
        { time: '04:25', power: 0 },
        { time: '04:30', power: 0 },
        { time: '04:35', power: 0 },
        { time: '04:40', power: 0 },
        { time: '04:45', power: 0 },
        { time: '04:50', power: 0 },
        { time: '04:55', power: 0 },
        { time: '05:00', power: 0 },
        { time: '05:05', power: 0 },
        { time: '05:10', power: 0 },
        { time: '05:15', power: 0 },
        { time: '05:20', power: 0 },
        { time: '05:25', power: 0 },
        { time: '05:30', power: 0 },
        { time: '05:35', power: 0 },
        { time: '05:40', power: 0 },
        { time: '05:45', power: 0 },
        { time: '05:50', power: 0 },
        { time: '05:55', power: 0 },
        { time: '06:00', power: 0.1 },
        { time: '06:05', power: 0.2 },
        { time: '06:10', power: 0.4 },
        { time: '06:15', power: 0.7 },
        { time: '06:20', power: 1.1 },
        { time: '06:25', power: 1.6 },
        { time: '06:30', power: 2.2 },
        { time: '06:35', power: 2.8 },
        { time: '06:40', power: 3.4 },
        { time: '06:45', power: 4.0 },
        { time: '06:50', power: 4.5 },
        { time: '06:55', power: 4.8 },
        { time: '07:00', power: 5.0 },
        { time: '07:05', power: 4.9 },
        { time: '07:10', power: 4.8 },
        { time: '07:15', power: 4.7 },
        { time: '07:20', power: 4.6 },
        { time: '07:25', power: 4.5 },
        { time: '07:30', power: 4.4 },
        { time: '07:35', power: 4.3 },
        { time: '07:40', power: 4.2 },
        { time: '07:45', power: 4.1 },
        { time: '07:50', power: 4.0 },
        { time: '07:55', power: 3.9 },
        { time: '08:00', power: 3.8 },
        { time: '08:05', power: 3.7 },
        { time: '08:10', power: 3.6 },
        { time: '08:15', power: 3.5 },
        { time: '08:20', power: 3.4 },
        { time: '08:25', power: 3.3 },
        { time: '08:30', power: 3.2 },
        { time: '08:35', power: 3.3 },
        { time: '08:40', power: 3.4 },
        { time: '08:45', power: 3.5 },
        { time: '08:50', power: 3.6 },
        { time: '08:55', power: 3.7 },
        { time: '09:00', power: 3.8 },
        { time: '09:05', power: 3.9 },
        { time: '09:10', power: 4.0 },
        { time: '09:15', power: 4.1 },
        { time: '09:20', power: 4.2 },
        { time: '09:25', power: 4.3 },
        { time: '09:30', power: 4.4 },
        { time: '09:35', power: 4.5 },
        { time: '09:40', power: 4.6 },
        { time: '09:45', power: 4.7 },
        { time: '09:50', power: 4.8 },
        { time: '09:55', power: 4.9 },
        { time: '10:00', power: 5.0 },
        { time: '10:05', power: 4.9 },
        { time: '10:10', power: 4.8 },
        { time: '10:15', power: 4.7 },
        { time: '10:20', power: 4.6 },
        { time: '10:25', power: 4.5 },
        { time: '10:30', power: 4.4 },
        { time: '10:35', power: 4.3 },
        { time: '10:40', power: 4.2 },
        { time: '10:45', power: 4.1 },
        { time: '10:50', power: 4.0 },
        { time: '10:55', power: 3.9 },
        { time: '11:00', power: 3.8 },
        { time: '11:05', power: 3.7 },
        { time: '11:10', power: 3.6 },
        { time: '11:15', power: 3.5 },
        { time: '11:20', power: 3.4 },
        { time: '11:25', power: 3.3 },
        { time: '11:30', power: 3.2 },
        { time: '11:35', power: 3.1 },
        { time: '11:40', power: 3.0 },
        { time: '11:45', power: 2.9 },
        { time: '11:50', power: 2.8 },
        { time: '11:55', power: 2.7 },
        { time: '12:00', power: 2.6 },
        { time: '12:05', power: 2.5 },
        { time: '12:10', power: 2.4 },
        { time: '12:15', power: 2.3 },
        { time: '12:20', power: 2.2 },
        { time: '12:25', power: 2.1 },
        { time: '12:30', power: 2.0 },
        { time: '12:35', power: 1.9 },
        { time: '12:40', power: 1.8 },
        { time: '12:45', power: 1.7 },
        { time: '12:50', power: 1.6 },
        { time: '12:55', power: 1.5 },
        { time: '13:00', power: 1.4 },
        { time: '13:05', power: 1.3 },
        { time: '13:10', power: 1.2 },
        { time: '13:15', power: 1.1 },
        { time: '13:20', power: 1.0 },
        { time: '13:25', power: 0.9 },
        { time: '13:30', power: 0.8 },
        { time: '13:35', power: 0.7 },
        { time: '13:40', power: 0.6 },
        { time: '13:45', power: 0.5 },
        { time: '13:50', power: 0.4 },
        { time: '13:55', power: 0.3 },
        { time: '14:00', power: 0.2 },
        { time: '14:05', power: 0.1 },
        { time: '14:10', power: 0 },
        { time: '14:15', power: 0 },
        { time: '14:20', power: 0 },
        { time: '14:25', power: 0 },
        { time: '14:30', power: 0 },
        { time: '14:35', power: 0 },
        { time: '14:40', power: 0 },
        { time: '14:45', power: 0 },
        { time: '14:50', power: 0 },
        { time: '14:55', power: 0 },
        { time: '15:00', power: 0 },
        { time: '15:05', power: 0 },
        { time: '15:10', power: 0 },
        { time: '15:15', power: 0 },
        { time: '15:20', power: 0 },
        { time: '15:25', power: 0 },
        { time: '15:30', power: 0 },
        { time: '15:35', power: 0 },
        { time: '15:40', power: 0 },
        { time: '15:45', power: 0 },
        { time: '15:50', power: 0 },
        { time: '15:55', power: 0 },
        { time: '16:00', power: 0 },
        { time: '16:05', power: 0 },
        { time: '16:10', power: 0 },
        { time: '16:15', power: 0 },
        { time: '16:20', power: 0 },
        { time: '16:25', power: 0 },
        { time: '16:30', power: 0 },
        { time: '16:35', power: 0 },
        { time: '16:40', power: 0 },
        { time: '16:45', power: 0 },
        { time: '16:50', power: 0 },
        { time: '16:55', power: 0 },
        { time: '17:00', power: 0 },
        { time: '17:05', power: 0 },
        { time: '17:10', power: 0 },
        { time: '17:15', power: 0 },
        { time: '17:20', power: 0 },
        { time: '17:25', power: 0 },
        { time: '17:30', power: 0 },
        { time: '17:35', power: 0 },
        { time: '17:40', power: 0 },
        { time: '17:45', power: 0 },
        { time: '17:50', power: 0 },
        { time: '17:55', power: 0 },
        { time: '18:00', power: 0 }
      ]
    },
    pv2: { 
      name: "East Roof PV", 
      power: 2.8, 
      voltage: 238, 
      current: 11.8, 
      production: 21.2,
      maxPower: 4.5,
      efficiency: 17.8,
      dailyProduction: [
        { time: '00:00', power: 0 },
        { time: '00:05', power: 0 },
        { time: '00:10', power: 0 },
        { time: '00:15', power: 0 },
        { time: '00:20', power: 0 },
        { time: '00:25', power: 0 },
        { time: '00:30', power: 0 },
        { time: '00:35', power: 0 },
        { time: '00:40', power: 0 },
        { time: '00:45', power: 0 },
        { time: '00:50', power: 0 },
        { time: '00:55', power: 0 },
        { time: '01:00', power: 0 },
        { time: '01:05', power: 0 },
        { time: '01:10', power: 0 },
        { time: '01:15', power: 0 },
        { time: '01:20', power: 0 },
        { time: '01:25', power: 0 },
        { time: '01:30', power: 0 },
        { time: '01:35', power: 0 },
        { time: '01:40', power: 0 },
        { time: '01:45', power: 0 },
        { time: '01:50', power: 0 },
        { time: '01:55', power: 0 },
        { time: '02:00', power: 0 },
        { time: '02:05', power: 0 },
        { time: '02:10', power: 0 },
        { time: '02:15', power: 0 },
        { time: '02:20', power: 0 },
        { time: '02:25', power: 0 },
        { time: '02:30', power: 0 },
        { time: '02:35', power: 0 },
        { time: '02:40', power: 0 },
        { time: '02:45', power: 0 },
        { time: '02:50', power: 0 },
        { time: '02:55', power: 0 },
        { time: '03:00', power: 0 },
        { time: '03:05', power: 0 },
        { time: '03:10', power: 0 },
        { time: '03:15', power: 0 },
        { time: '03:20', power: 0 },
        { time: '03:25', power: 0 },
        { time: '03:30', power: 0 },
        { time: '03:35', power: 0 },
        { time: '03:40', power: 0 },
        { time: '03:45', power: 0 },
        { time: '03:50', power: 0 },
        { time: '03:55', power: 0 },
        { time: '04:00', power: 0 },
        { time: '04:05', power: 0 },
        { time: '04:10', power: 0 },
        { time: '04:15', power: 0 },
        { time: '04:20', power: 0 },
        { time: '04:25', power: 0 },
        { time: '04:30', power: 0 },
        { time: '04:35', power: 0 },
        { time: '04:40', power: 0 },
        { time: '04:45', power: 0 },
        { time: '04:50', power: 0 },
        { time: '04:55', power: 0 },
        { time: '05:00', power: 0 },
        { time: '05:05', power: 0 },
        { time: '05:10', power: 0 },
        { time: '05:15', power: 0 },
        { time: '05:20', power: 0 },
        { time: '05:25', power: 0 },
        { time: '05:30', power: 0 },
        { time: '05:35', power: 0 },
        { time: '05:40', power: 0 },
        { time: '05:45', power: 0 },
        { time: '05:50', power: 0 },
        { time: '05:55', power: 0 },
        { time: '06:00', power: 0.05 },
        { time: '06:05', power: 0.15 },
        { time: '06:10', power: 0.3 },
        { time: '06:15', power: 0.5 },
        { time: '06:20', power: 0.8 },
        { time: '06:25', power: 1.2 },
        { time: '06:30', power: 1.7 },
        { time: '06:35', power: 2.2 },
        { time: '06:40', power: 2.8 },
        { time: '06:45', power: 3.3 },
        { time: '06:50', power: 3.7 },
        { time: '06:55', power: 4.0 },
        { time: '07:00', power: 4.2 },
        { time: '07:05', power: 4.1 },
        { time: '07:10', power: 4.0 },
        { time: '07:15', power: 3.9 },
        { time: '07:20', power: 3.8 },
        { time: '07:25', power: 3.7 },
        { time: '07:30', power: 3.6 },
        { time: '07:35', power: 3.5 },
        { time: '07:40', power: 3.4 },
        { time: '07:45', power: 3.3 },
        { time: '07:50', power: 3.2 },
        { time: '07:55', power: 3.1 },
        { time: '08:00', power: 3.0 },
        { time: '08:05', power: 2.9 },
        { time: '08:10', power: 2.8 },
        { time: '08:15', power: 2.9 },
        { time: '08:20', power: 3.0 },
        { time: '08:25', power: 3.1 },
        { time: '08:30', power: 3.2 },
        { time: '08:35', power: 3.3 },
        { time: '08:40', power: 3.4 },
        { time: '08:45', power: 3.5 },
        { time: '08:50', power: 3.6 },
        { time: '08:55', power: 3.7 },
        { time: '09:00', power: 3.8 },
        { time: '09:05', power: 3.9 },
        { time: '09:10', power: 4.0 },
        { time: '09:15', power: 4.1 },
        { time: '09:20', power: 4.2 },
        { time: '09:25', power: 4.3 },
        { time: '09:30', power: 4.4 },
        { time: '09:35', power: 4.5 },
        { time: '09:40', power: 4.4 },
        { time: '09:45', power: 4.3 },
        { time: '09:50', power: 4.2 },
        { time: '09:55', power: 4.1 },
        { time: '10:00', power: 4.0 },
        { time: '10:05', power: 3.9 },
        { time: '10:10', power: 3.8 },
        { time: '10:15', power: 3.7 },
        { time: '10:20', power: 3.6 },
        { time: '10:25', power: 3.5 },
        { time: '10:30', power: 3.4 },
        { time: '10:35', power: 3.3 },
        { time: '10:40', power: 3.2 },
        { time: '10:45', power: 3.1 },
        { time: '10:50', power: 3.0 },
        { time: '10:55', power: 2.9 },
        { time: '11:00', power: 2.8 },
        { time: '11:05', power: 2.7 },
        { time: '11:10', power: 2.6 },
        { time: '11:15', power: 2.5 },
        { time: '11:20', power: 2.4 },
        { time: '11:25', power: 2.3 },
        { time: '11:30', power: 2.2 },
        { time: '11:35', power: 2.1 },
        { time: '11:40', power: 2.0 },
        { time: '11:45', power: 1.9 },
        { time: '11:50', power: 1.8 },
        { time: '11:55', power: 1.7 },
        { time: '12:00', power: 1.6 },
        { time: '12:05', power: 1.5 },
        { time: '12:10', power: 1.4 },
        { time: '12:15', power: 1.3 },
        { time: '12:20', power: 1.2 },
        { time: '12:25', power: 1.1 },
        { time: '12:30', power: 1.0 },
        { time: '12:35', power: 0.9 },
        { time: '12:40', power: 0.8 },
        { time: '12:45', power: 0.7 },
        { time: '12:50', power: 0.6 },
        { time: '12:55', power: 0.5 },
        { time: '13:00', power: 0.4 },
        { time: '13:05', power: 0.3 },
        { time: '13:10', power: 0.2 },
        { time: '13:15', power: 0.1 },
        { time: '13:20', power: 0 },
        { time: '13:25', power: 0 },
        { time: '13:30', power: 0 },
        { time: '13:35', power: 0 },
        { time: '13:40', power: 0 },
        { time: '13:45', power: 0 },
        { time: '13:50', power: 0 },
        { time: '13:55', power: 0 },
        { time: '14:00', power: 0 },
        { time: '14:05', power: 0 },
        { time: '14:10', power: 0 },
        { time: '14:15', power: 0 },
        { time: '14:20', power: 0 },
        { time: '14:25', power: 0 },
        { time: '14:30', power: 0 },
        { time: '14:35', power: 0 },
        { time: '14:40', power: 0 },
        { time: '14:45', power: 0 },
        { time: '14:50', power: 0 },
        { time: '14:55', power: 0 },
        { time: '15:00', power: 0 },
        { time: '15:05', power: 0 },
        { time: '15:10', power: 0 },
        { time: '15:15', power: 0 },
        { time: '15:20', power: 0 },
        { time: '15:25', power: 0 },
        { time: '15:30', power: 0 },
        { time: '15:35', power: 0 },
        { time: '15:40', power: 0 },
        { time: '15:45', power: 0 },
        { time: '15:50', power: 0 },
        { time: '15:55', power: 0 },
        { time: '16:00', power: 0 },
        { time: '16:05', power: 0 },
        { time: '16:10', power: 0 },
        { time: '16:15', power: 0 },
        { time: '16:20', power: 0 },
        { time: '16:25', power: 0 },
        { time: '16:30', power: 0 },
        { time: '16:35', power: 0 },
        { time: '16:40', power: 0 },
        { time: '16:45', power: 0 },
        { time: '16:50', power: 0 },
        { time: '16:55', power: 0 },
        { time: '17:00', power: 0 },
        { time: '17:05', power: 0 },
        { time: '17:10', power: 0 },
        { time: '17:15', power: 0 },
        { time: '17:20', power: 0 },
        { time: '17:25', power: 0 },
        { time: '17:30', power: 0 },
        { time: '17:35', power: 0 },
        { time: '17:40', power: 0 },
        { time: '17:45', power: 0 },
        { time: '17:50', power: 0 },
        { time: '17:55', power: 0 },
        { time: '18:00', power: 0 }
      ]
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
        { time: '00:05', level: 44 },
        { time: '00:10', level: 44 },
        { time: '00:15', level: 43 },
        { time: '00:20', level: 43 },
        { time: '00:25', level: 42 },
        { time: '00:30', level: 42 },
        { time: '00:35', level: 41 },
        { time: '00:40', level: 41 },
        { time: '00:45', level: 40 },
        { time: '00:50', level: 40 },
        { time: '00:55', level: 39 },
        { time: '01:00', level: 39 },
        { time: '01:05', level: 38 },
        { time: '01:10', level: 38 },
        { time: '01:15', level: 37 },
        { time: '01:20', level: 37 },
        { time: '01:25', level: 36 },
        { time: '01:30', level: 36 },
        { time: '01:35', level: 35 },
        { time: '01:40', level: 35 },
        { time: '01:45', level: 34 },
        { time: '01:50', level: 34 },
        { time: '01:55', level: 33 },
        { time: '02:00', level: 33 },
        { time: '02:05', level: 32 },
        { time: '02:10', level: 32 },
        { time: '02:15', level: 31 },
        { time: '02:20', level: 31 },
        { time: '02:25', level: 30 },
        { time: '02:30', level: 30 },
        { time: '02:35', level: 30 },
        { time: '02:40', level: 29 },
        { time: '02:45', level: 29 },
        { time: '02:50', level: 29 },
        { time: '02:55', level: 28 },
        { time: '03:00', level: 28 },
        { time: '03:05', level: 28 },
        { time: '03:10', level: 27 },
        { time: '03:15', level: 27 },
        { time: '03:20', level: 27 },
        { time: '03:25', level: 26 },
        { time: '03:30', level: 26 },
        { time: '03:35', level: 26 },
        { time: '03:40', level: 25 },
        { time: '03:45', level: 25 },
        { time: '03:50', level: 25 },
        { time: '03:55', level: 24 },
        { time: '04:00', level: 24 },
        { time: '04:05', level: 24 },
        { time: '04:10', level: 24 },
        { time: '04:15', level: 23 },
        { time: '04:20', level: 23 },
        { time: '04:25', level: 23 },
        { time: '04:30', level: 23 },
        { time: '04:35', level: 22 },
        { time: '04:40', level: 22 },
        { time: '04:45', level: 22 },
        { time: '04:50', level: 22 },
        { time: '04:55', level: 22 },
        { time: '05:00', level: 22 },
        { time: '05:05', level: 22 },
        { time: '05:10', level: 22 },
        { time: '05:15', level: 22 },
        { time: '05:20', level: 22 },
        { time: '05:25', level: 22 },
        { time: '05:30', level: 22 },
        { time: '05:35', level: 22 },
        { time: '05:40', level: 22 },
        { time: '05:45', level: 22 },
        { time: '05:50', level: 22 },
        { time: '05:55', level: 22 },
        { time: '06:00', level: 23 },
        { time: '06:05', level: 24 },
        { time: '06:10', level: 25 },
        { time: '06:15', level: 26 },
        { time: '06:20', level: 28 },
        { time: '06:25', level: 30 },
        { time: '06:30', level: 32 },
        { time: '06:35', level: 35 },
        { time: '06:40', level: 38 },
        { time: '06:45', level: 42 },
        { time: '06:50', level: 46 },
        { time: '06:55', level: 50 },
        { time: '07:00', level: 54 },
        { time: '07:05', level: 58 },
        { time: '07:10', level: 62 },
        { time: '07:15', level: 66 },
        { time: '07:20', level: 70 },
        { time: '07:25', level: 73 },
        { time: '07:30', level: 76 },
        { time: '07:35', level: 79 },
        { time: '07:40', level: 81 },
        { time: '07:45', level: 83 },
        { time: '07:50', level: 85 },
        { time: '07:55', level: 87 },
        { time: '08:00', level: 88 },
        { time: '08:05', level: 89 },
        { time: '08:10', level: 91 },
        { time: '08:15', level: 92 },
        { time: '08:20', level: 93 },
        { time: '08:25', level: 94 },
        { time: '08:30', level: 95 },
        { time: '08:35', level: 96 },
        { time: '08:40', level: 97 },
        { time: '08:45', level: 97 },
        { time: '08:50', level: 98 },
        { time: '08:55', level: 98 },
        { time: '09:00', level: 98 },
        { time: '09:05', level: 98 },
        { time: '09:10', level: 98 },
        { time: '09:15', level: 97 },
        { time: '09:20', level: 97 },
        { time: '09:25', level: 96 },
        { time: '09:30', level: 96 },
        { time: '09:35', level: 95 },
        { time: '09:40', level: 95 },
        { time: '09:45', level: 94 },
        { time: '09:50', level: 94 },
        { time: '09:55', level: 93 },
        { time: '10:00', level: 93 },
        { time: '10:05', level: 92 },
        { time: '10:10', level: 92 },
        { time: '10:15', level: 91 },
        { time: '10:20', level: 91 },
        { time: '10:25', level: 90 },
        { time: '10:30', level: 90 },
        { time: '10:35', level: 89 },
        { time: '10:40', level: 89 },
        { time: '10:45', level: 88 },
        { time: '10:50', level: 88 },
        { time: '10:55', level: 87 },
        { time: '11:00', level: 87 },
        { time: '11:05', level: 86 },
        { time: '11:10', level: 86 },
        { time: '11:15', level: 85 },
        { time: '11:20', level: 84 },
        { time: '11:25', level: 84 },
        { time: '11:30', level: 83 },
        { time: '11:35', level: 83 },
        { time: '11:40', level: 82 },
        { time: '11:45', level: 82 },
        { time: '11:50', level: 81 },
        { time: '11:55', level: 81 },
        { time: '12:00', level: 80 },
        { time: '12:05', level: 80 },
        { time: '12:10', level: 79 },
        { time: '12:15', level: 79 },
        { time: '12:20', level: 78 },
        { time: '12:25', level: 78 },
        { time: '12:30', level: 78 },
        { time: '12:35', level: 77 },
        { time: '12:40', level: 77 },
        { time: '12:45', level: 77 },
        { time: '12:50', level: 76 },
        { time: '12:55', level: 76 },
        { time: '13:00', level: 76 },
        { time: '13:05', level: 76 },
        { time: '13:10', level: 75 },
        { time: '13:15', level: 75 },
        { time: '13:20', level: 75 },
        { time: '13:25', level: 75 },
        { time: '13:30', level: 74 },
        { time: '13:35', level: 74 },
        { time: '13:40', level: 74 },
        { time: '13:45', level: 74 },
        { time: '13:50', level: 73 },
        { time: '13:55', level: 73 },
        { time: '14:00', level: 73 },
        { time: '14:05', level: 73 },
        { time: '14:10', level: 72 },
        { time: '14:15', level: 72 },
        { time: '14:20', level: 72 },
        { time: '14:25', level: 72 },
        { time: '14:30', level: 71 },
        { time: '14:35', level: 71 },
        { time: '14:40', level: 71 },
        { time: '14:45', level: 71 },
        { time: '14:50', level: 70 },
        { time: '14:55', level: 70 },
        { time: '15:00', level: 70 },
        { time: '15:05', level: 70 },
        { time: '15:10', level: 69 },
        { time: '15:15', level: 69 },
        { time: '15:20', level: 69 },
        { time: '15:25', level: 69 },
        { time: '15:30', level: 68 },
        { time: '15:35', level: 68 },
        { time: '15:40', level: 68 },
        { time: '15:45', level: 68 },
        { time: '15:50', level: 67 },
        { time: '15:55', level: 67 },
        { time: '16:00', level: 67 },
        { time: '16:05', level: 67 },
        { time: '16:10', level: 66 },
        { time: '16:15', level: 66 },
        { time: '16:20', level: 66 },
        { time: '16:25', level: 66 },
        { time: '16:30', level: 65 },
        { time: '16:35', level: 65 },
        { time: '16:40', level: 65 },
        { time: '16:45', level: 65 },
        { time: '16:50', level: 64 },
        { time: '16:55', level: 64 },
        { time: '17:00', level: 64 },
        { time: '17:05', level: 64 },
        { time: '17:10', level: 63 },
        { time: '17:15', level: 63 },
        { time: '17:20', level: 63 },
        { time: '17:25', level: 63 },
        { time: '17:30', level: 62 },
        { time: '17:35', level: 62 },
        { time: '17:40', level: 62 },
        { time: '17:45', level: 62 },
        { time: '17:50', level: 61 },
        { time: '17:55', level: 61 },
        { time: '18:00', level: 61 }
      ]
    },
    grid: { 
      power: 2.1, 
      voltage: { phase1: 229.8, phase2: 230.2, phase3: 229.9 },
      current: { phase1: 9.1, phase2: 8.8, phase3: 9.3 },
      power_per_phase: { phase1: 0.7, phase2: 0.6, phase3: 0.8 },
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
        
        {/* Daily Power Production Graph - Only for South Roof PV */}
        {pv.dailyProduction && (
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground">Daily Power Production</div>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pv.dailyProduction} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <XAxis 
                    dataKey="time" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    interval="preserveStartEnd"
                  />
                  <YAxis hide />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-popover border rounded-lg px-3 py-2 shadow-lg">
                            <p className="text-xs text-muted-foreground">{`Time: ${label}`}</p>
                            <p className="text-xs font-medium text-primary">
                              {`Power: ${payload[0].value}kW`}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="power" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 3, fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
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
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-popover border rounded-lg px-3 py-2 shadow-lg">
                          <p className="text-xs text-muted-foreground">{`Time: ${label}`}</p>
                          <p className="text-xs font-medium text-primary">
                            {`Level: ${payload[0].value}%`}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
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
            <div className="font-mono text-primary text-2xl">{Math.abs(grid.power)}kW</div>
          </div>
        </div>
        
        {/* Three-phase measurements */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">Phase Measurements</div>
          <div className="grid grid-cols-5 gap-2 text-xs">
            <div className="text-muted-foreground font-medium">Phase</div>
            <div className="text-muted-foreground font-medium">Power</div>
            <div className="text-muted-foreground font-medium">Frequency</div>
            <div className="text-muted-foreground font-medium">Voltage</div>
            <div className="text-muted-foreground font-medium">Current</div>
            
            <div className="text-muted-foreground">L1</div>
            <div className="font-mono text-sm">{grid.power_per_phase.phase1}kW</div>
            <div className="font-mono text-sm">{grid.frequency.phase1}Hz</div>
            <div className="font-mono text-sm">{grid.voltage.phase1}V</div>
            <div className="font-mono text-sm">{grid.current.phase1}A</div>
            
            <div className="text-muted-foreground">L2</div>
            <div className="font-mono text-sm">{grid.power_per_phase.phase2}kW</div>
            <div className="font-mono text-sm">{grid.frequency.phase2}Hz</div>
            <div className="font-mono text-sm">{grid.voltage.phase2}V</div>
            <div className="font-mono text-sm">{grid.current.phase2}A</div>
            
            <div className="text-muted-foreground">L3</div>
            <div className="font-mono text-sm">{grid.power_per_phase.phase3}kW</div>
            <div className="font-mono text-sm">{grid.frequency.phase3}Hz</div>
            <div className="font-mono text-sm">{grid.voltage.phase3}V</div>
            <div className="font-mono text-sm">{grid.current.phase3}A</div>
          </div>
        </div>
        
        <Separator />
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-muted-foreground">Imported Today</div>
            <div className="font-mono text-lg">{grid.imported}kWh</div>
            <div className="text-muted-foreground text-sm">{(grid.imported * grid.cost).toFixed(2)} PLN</div>
          </div>
          <div>
            <div className="text-muted-foreground">Exported Today</div>
            <div className="font-mono text-lg">{grid.exported}kWh</div>
            <div className="text-muted-foreground text-sm">{(grid.exported * grid.feedInTariff).toFixed(2)} PLN</div>
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
          <div className="max-h-72 overflow-y-auto space-y-1">
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
      {/* Daily Energy Summary */}
      <div className="mb-6">
        <Card className="bg-gradient-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-primary" />
              Daily Energy Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
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
                <div className="text-2xl font-bold text-primary">{energyData.grid.imported}kWh</div>
                <div className="text-sm text-muted-foreground">Imported Today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{energyData.grid.exported}kWh</div>
                <div className="text-sm text-muted-foreground">Exported Today</div>
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
    </div>
  );
};

export default EnergyFlowDashboard;