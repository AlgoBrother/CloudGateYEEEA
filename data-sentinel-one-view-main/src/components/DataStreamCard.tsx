
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database } from "lucide-react";

interface DataStreamProps {
  type: "normal" | "malicious";
  timestamp: string;
  data: string;
}

export const DataStreamCard = ({ type, timestamp, data }: DataStreamProps) => {
  return (
    <Card className="data-stream mb-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {type === "normal" ? (
            <Database className="h-4 w-4 text-green-400 inline mr-2" />
          ) : (
            <Shield className="h-4 w-4 text-red-400 inline mr-2" />
          )}
          {type === "normal" ? "Incoming Data" : "Blocked Stream"}
        </CardTitle>
        <span className="text-xs text-muted-foreground">{timestamp}</span>
      </CardHeader>
      <CardContent>
        <p className="text-xs font-mono">{data}</p>
      </CardContent>
    </Card>
  );
};
