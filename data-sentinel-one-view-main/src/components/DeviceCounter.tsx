
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor } from "lucide-react";

export const DeviceCounter = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <Monitor className="h-4 w-4 text-blue-400 inline mr-2" />
          Connected Devices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">1</div>
        <p className="text-xs text-muted-foreground">Active Connection</p>
      </CardContent>
    </Card>
  );
};
