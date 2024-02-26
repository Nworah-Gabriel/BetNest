'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import axios from 'axios';
import { Navigation } from 'swiper/modules';

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
          const limitedLeagues = response.data.result.slice(0, 20);
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
    <div className=" overflow-x-auto px-2 w-full lg:w-[75vw]">
      <div>
        <h2 className='font-bold text-green-500 mb-4 '>Popular basketball leagues</h2>
        <Swiper
          navigation={true} 
          modules={[Navigation]}
          className=""
          slidesPerView={1} 
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
        >
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-2  justify-center  text-green-500">
            {leagues.map(league => (
              <SwiperSlide key={league.league_key} className="bg-white mx-3 p-4 rounded-xl shadow-md grid items-center cursor-pointer">
                <img src={league.league_logo || 'https://via.placeholder.com/150'} alt={league.league_name} className="h-auto w-full mr-2" />
                <div>
                  <p className="font-bold">{league.league_name}</p>
                  <p>{league.country_name}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Card2;
