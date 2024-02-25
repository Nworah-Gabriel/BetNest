'use client'
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { useState, useEffect } from 'react';

export default function LatestInvoices() { 
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://betnest.onrender.com/placed_bets/');
        if (response.ok) {
          const data = await response.json();
          setLeaderboard(data);
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
            <p className="font-bold">BET</p>
            <p className="font-bold">MULTIPLIER</p>
            <p className="font-bold">CASHOUT</p>
          </div>
          {/* {leaderboard.map((board, i) => (
            <div
              key={i}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="flex items-center">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {board.Beneficiary_name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {board.Payment_Date}
                  </p>
                </div>
              </div>
              <p
                className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
              >
                Amount: {board.amount}, Odds: {board.odds}
              </p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
