'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface LeaderboardEntry {
  Staker_name: string;
  Staker_KEY: string;
  amount: number;
  odds: string;
  Is_Winner: boolean;
  date: string;
  game_category: string;
  game_title: string;
}

export default function LatestInvoices() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://betnest.onrender.com/payments/?format=json');
        if (response.status === 200) {
          setLeaderboard(response.data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full text-green-500 flex-col md:col-span-4 px-2">
      <h2 className={`mb-4 font-bold`}>
        Leaderboard
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="px-6">
          <div className="flex flex-row items-center justify-between py-4">
            <p className="font-bold">GAME</p>
            <p className="font-bold">PLAYER</p>
            <p className="font-bold hidden lg:block">BET</p>
            <p className="font-bold hidden lg:block">MULTIPLIER</p>
            <p className="font-bold hidden lg:block">CASHOUT</p>
          </div>
          {leaderboard.map((entry, index) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-between py-4 ${index !== 0 ? 'border-t' : ''}`}
            >
              <p>{entry.game_title}</p>
              <p>{entry.Staker_name}</p>
              <p className="hidden lg:block">{entry.amount}</p>
              <p className="hidden lg:block">{entry.odds}</p>
              <p className="hidden lg:block">{entry.Is_Winner ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
