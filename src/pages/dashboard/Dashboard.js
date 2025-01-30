import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import profile from "../../assets/img/a middle age Kenyan man wearing African attire.png";

const data = [
  { month: "Jan", income: 100000, expense: 80000 },
  { month: "Feb", income: 150000, expense: 100000 },
  { month: "Mar", income: 200000, expense: 150000 },
  { month: "Apr", income: 250000, expense: 180000 },
  { month: "May", income: 300000, expense: 220000 },
  { month: "Jun", income: 320000, expense: 240000 }
];

const Dashboard = () => {
  return (
    <div className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Hello, Simon Makonde</h2>
            <p className="text-gray-500">Let's manage your wallet finance</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          {
            title: "Total revenue",
            amount: 320000,
            change: "+8.8%",
            color: "bg-blue-50"
          },
          {
            title: "Total expense",
            amount: 240000,
            change: "-10.2%",
            color: "bg-red-50"
          },
          {
            title: "Total profit",
            amount: 160000,
            change: "+16.4%",
            color: "bg-green-50"
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.color} p-6 rounded-xl`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">{stat.title}</span>
              <span
                className={`${
                  stat.change.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold">
              KES {stat.amount.toLocaleString()}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Analysis</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Income</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Expense</span>
            </div>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#3B82F6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#EF4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Transaction history</h3>
          <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "Upwork",
              type: "Freelancing",
              amount: 150,
              date: "14 Aug, 2023",
              status: "Credited",
              icon: "💼"
            },
            {
              name: "Netflix",
              type: "Entertainment",
              amount: -60,
              date: "10 Aug, 2023",
              status: "Debited",
              icon: "🎬"
            },
            {
              name: "Spotify",
              type: "Subscription",
              amount: -10,
              date: "29 July, 2023",
              status: "Debited",
              icon: "🎵"
            }
          ].map((transaction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  {transaction.icon}
                </div>
                <div>
                  <h4 className="font-medium">{transaction.name}</h4>
                  <p className="text-sm text-gray-500">{transaction.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-medium ${
                    transaction.amount > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  ${Math.abs(transaction.amount)}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;