'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface League {
  league_key: number;
  league_name: string;
  country_key: number;
  country_name: string;
  league_logo: string | null;
  country_logo: string | null;
}

const Card2 = () => {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://apiv2.allsportsapi.com/basketball/?met=Leagues&APIkey=378237d55eab4d7c51a4c0cafa60a8bad4e8db5df39f9c3101421c6289632329');
        if (response.data.success === 1) {
          const limitedLeagues = response.data.result.slice(0, 4);
          setLeagues(limitedLeagues);
        } else {
          console.error('API request failed:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-2 mt-6 lg:w-[75vw]">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className='font-bold text-green-500 mb-4 '>Popular basketball leagues</h2>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-2 gap-y-2 justify-center gap-4 text-green-500">
            {leagues.map(league => (
              <div key={league.league_key} className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <img src={league.league_logo || 'https://via.placeholder.com/150'} alt={league.league_name} className="h-8 w-auto mr-2" />
                <div>
                  <p className="font-bold">{league.league_name}</p>
                  <p>{league.country_name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card2;
