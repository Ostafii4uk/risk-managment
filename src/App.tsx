import { useState } from "react";
import { CardContent } from "./components/CardContent";
import { Label } from "./components/Label";
import { Input } from "./components/Input";
import { Card } from "./components/Card";

export default function App() {
  const [deposit, setDeposit] = useState("");
  const [dailyRiskPercent, setDailyRiskPercent] = useState("");
  const [stopLossPercent, setStopLossPercent] = useState("");
  const [leverage, setLeverage] = useState("");
  const [dailyProfitPercent, setDailyProfitPercent] = useState("");

  const dailyRiskUsd =
    (Number(deposit ?? 0) * Number(dailyRiskPercent ?? 0)) / 100;
  const maxPositionSize = Number(deposit ?? 0) * Number(leverage ?? 0);
  const riskPerTrade = (maxPositionSize * Number(stopLossPercent ?? 0)) / 100;
  const tradesPerDay = Math.floor(dailyRiskUsd / riskPerTrade) || 0;
  const maxProfitPerDay =
    (maxPositionSize * Number(dailyProfitPercent ?? 0)) / 100;

  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <Card className="max-w-xl mx-auto p-6 space-y-4">
        <h2 className="text-xl font-semibold text-white text-center mb-6">
          Risk Management Calculator
        </h2>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="deposit">Deposit ($)</Label>
                <Input
                  id="deposit"
                  placeholder="100"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="stopLossPercent">Stop Loss (%)</Label>
                <Input
                  id="stopLossPercent"
                  placeholder="0.5%"
                  value={stopLossPercent}
                  onChange={(e) => setStopLossPercent(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dailyRiskPercent">Max Daily Risk (%)</Label>
                <Input
                  id="dailyRiskPercent"
                  placeholder="5%"
                  value={dailyRiskPercent}
                  onChange={(e) => setDailyRiskPercent(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dailyProfitPercent">Max Daily Profit (%)</Label>
                <Input
                  id="dailyProfitPercent"
                  placeholder="10%"
                  value={dailyProfitPercent}
                  onChange={(e) => setDailyProfitPercent(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="leverage">Leverage (x)</Label>
                <Input
                  id="leverage"
                  placeholder="x4"
                  value={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                />
              </div>
            </div>
          <div className="border-t border-[#333] pt-4 space-y-2 text-sm text-white">
            <p className="flex items-center justify-between">
              <strong>Daily Risk:</strong> ${dailyRiskUsd.toFixed(2)}
            </p>
            <p className="flex items-center justify-between">
              <strong>Max Position Size (with leverage):</strong> $
              {maxPositionSize.toFixed(2)}
            </p>
            <p className="flex items-center justify-between">
              <strong>Risk per Trade:</strong> ${riskPerTrade.toFixed(2)}
            </p>
            <p className="flex items-center justify-between">
              <strong>Trades per Day Allowed:</strong> {tradesPerDay}
            </p>
            <p className="flex items-center justify-between">
              <strong>Max Profit per Day:</strong> ${maxProfitPerDay.toFixed(2)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
