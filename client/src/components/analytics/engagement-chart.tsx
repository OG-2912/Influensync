import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { analyticsData } from "@/lib/mock-data";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function EngagementChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Engagement Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsData}>
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(date) => new Date(date).toLocaleDateString()}
                formatter={(value) => [`${value}%`, "Engagement Rate"]}
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="hsl(32, 95%, 60%)" 
                strokeWidth={2}
                dot={{ fill: "hsl(264, 60%, 60%)", strokeWidth: 2, r: 4 }}
                activeDot={{ fill: "hsl(264, 60%, 60%)", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}