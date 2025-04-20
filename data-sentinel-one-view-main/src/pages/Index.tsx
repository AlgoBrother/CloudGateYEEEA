
import { useEffect, useState } from "react";
import { DataStreamCard } from "@/components/DataStreamCard";
import { DeviceCounter } from "@/components/DeviceCounter";

// Simulate incoming data streams
const generateStream = () => ({
  type: Math.random() > 0.3 ? "normal" : "malicious" as "normal" | "malicious",
  timestamp: new Date().toLocaleTimeString(),
  data: `Data packet ${Math.random().toString(36).substring(7)}`,
});

const Index = () => {
  const [streams, setStreams] = useState<Array<{
    type: "normal" | "malicious";
    timestamp: string;
    data: string;
  }>>([]);

  useEffect(() => {
    // Initial streams
    setStreams([
      generateStream(),
      generateStream(),
      generateStream(),
    ]);

    // Add new stream every 3 seconds
    const interval = setInterval(() => {
      setStreams(prev => [generateStream(), ...prev].slice(0, 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const normalStreams = streams.filter(s => s.type === "normal");
  const maliciousStreams = streams.filter(s => s.type === "malicious");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Security Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <DeviceCounter />
        <div className="text-center p-4 bg-secondary rounded-lg">
          <div className="text-2xl font-bold text-green-400">{normalStreams.length}</div>
          <div className="text-sm text-muted-foreground">Active Streams</div>
        </div>
        <div className="text-center p-4 bg-secondary rounded-lg">
          <div className="text-2xl font-bold text-red-400">{maliciousStreams.length}</div>
          <div className="text-sm text-muted-foreground">Blocked Streams</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-4">Incoming Data Streams</h2>
          {normalStreams.map((stream, index) => (
            <DataStreamCard key={index} {...stream} />
          ))}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Blocked Malicious Streams</h2>
          {maliciousStreams.map((stream, index) => (
            <DataStreamCard key={index} {...stream} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
