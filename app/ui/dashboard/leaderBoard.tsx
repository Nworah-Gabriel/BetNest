'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Importing leaderboard data
import { leaderboard } from '@/app/lib/navigation';

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
  return (
    <div className="flex w-full text-green-500 flex-col md:col-span-4 px-2">
      <h2 className="mb-4 font-bold">Leaderboard</h2>
      <div className="flex-grow rounded-xl bg-black bg-opacity-30  p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="text-3xl">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GAME</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PLAYER</th>
                <th scope="col" className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BET</th>
                <th scope="col" className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MULTIPLIER</th>
                <th scope="col" className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CASHOUT</th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {leaderboard.map((entry, index) => (
                <tr key={index} className={`${index !== 0 ? 'border-t border-gray-200' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.game_title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.Staker_name}</td>
                  <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">{entry.amount}</td>
                  <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">{entry.odds}</td>
                  <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">{entry.Is_Winner ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
