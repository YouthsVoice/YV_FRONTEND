"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "@/API";

interface VolunteerSeason {
  id: number;
  event_name: string;
  file_id: string;
  intake_status: boolean;
}
const Volunteer = () => {
  const [seasons, setSeasons] = useState<VolunteerSeason[]>([]);
  const [newSeason, setNewSeason] = useState({ event_name: ""});

  useEffect(() => {
    fetchSeasons();
  }, []);

  const fetchSeasons = async () => {
    try {
      const res = await axios.get(`${API}/api/vol/volunteer-seasons/`);
      setSeasons(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createSeason = async () => {
    try {
      await axios.post(`${API}/api/vol/start_volunteer_intake/`, newSeason);
      setNewSeason({ event_name: ""});
      fetchSeasons();
    } catch (error) {
      console.error("Error creating season:", error);
    }
  };

  const toggleSeason = async (id: number, status: boolean) => {
    try {
      await axios.patch(`${API}/api/vol/stop_volunteer_intake/${id}/`, {
        intake_status: !status,
      });
      fetchSeasons();
    } catch (error) {
      console.error("Error updating season:", error);
    }
  };

  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-1">
        <div className="flex-1 p-4 bg-orange-50/5 min-h-screen mt-[20px] ml-0 lg:ml-[250px]">
          <div className="bg-white mb-4 py-5 p-6 rounded-lg shadow-md w-full max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4">Volunteer Seasons</h2>
            
            {/* Create Season Form */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Event Name"
                value={newSeason.event_name}
                onChange={(e) =>
                  setNewSeason({ ...newSeason, event_name: e.target.value })
                }
                className="border p-2 w-full mb-2 rounded-md"
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600"
                onClick={createSeason}
              >
                Create Season
              </button>
            </div>

            {/* Volunteer Season List */}
            <ul className="space-y-4">
              {seasons.map((season) => (
                <li
                  key={season.id}
                  className="flex justify-between items-center p-3 bg-gray-100 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{season.event_name}</p>
                    <p className="text-sm text-gray-500">File ID: {season.file_id}</p>
                    <p
                      className={`text-sm font-semibold ${
                        season.intake_status ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {season.intake_status ? "Active" : "Stopped"}
                    </p>
                  </div>
                  <button
                    className={`px-3 py-1 rounded-md ${
                      season.intake_status
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                    onClick={() => toggleSeason(season.id, season.intake_status)}
                  >
                    {season.intake_status ? "Stop" : "Start"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Volunteer
