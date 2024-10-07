import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
//import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Availability() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dateRange, setDateRange] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [rooms, setRooms] = useState([
        {
            name: 'Standard Room, 1 King Bed, Accessible, Bathtub',
            availability: {},
        },
        {
            name: 'Standard Room, 1 King Bed, Non-Smoking',
            availability: {},
        },
        {
            name: 'Standard Room, 2 Queen Beds, Non-Smoking',
            availability: {},
        },
        {
            name: 'Suite, 1 King Bed, Non-Smoking, Jetted Tub',
            availability: {},
        },
    ]);

    // Update the date range whenever a new date is selected
    useEffect(() => {
        generateDateRange(selectedDate);
    }, [selectedDate]);

    // Function to generate a date range (next 10 days)
    const generateDateRange = (startDate) => {
        const newDateRange = [];
        for (let i = 0; i < 10; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            newDateRange.push(formatDate(date));
        }
        setDateRange(newDateRange);
    };

    // Function to format the date as "MMM DD, YYYY"
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    const toggleAvailability = (roomIndex, dateIndex) => {
        const updatedRooms = [...rooms]; 
        const date = dateRange[dateIndex]; 
        console.log("dateIndex", dateIndex)
        console.log("updatedRooms", updatedRooms)
        console.log("date", date)
       
        if (!updatedRooms[roomIndex].availability[date]) {
            
            updatedRooms[roomIndex].availability[date] = true;
        } else {
            // Toggle availability (true <-> false)
            updatedRooms[roomIndex].availability[date] = !updatedRooms[roomIndex].availability[date];

            // If toggled to false, remove the entry
            if (!updatedRooms[roomIndex].availability[date]) {
                delete updatedRooms[roomIndex].availability[date];
            }
        }

        setRooms(updatedRooms); // Update the state with the new availability
    };
    // Function to handle form submission
    const handleSubmit = () => {
        const availabilityData = rooms.map((room) => {
            const availableDates = Object.keys(room.availability).filter(
                (date) => room.availability[date] === true
            );
            return {
                roomName: room.name,
                availableDates,
            };
        });

        setSelectedAvailability(availabilityData);
        console.log("Selected Availability:", availabilityData);
    };



    return (
        <div className="p-grid">
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                   Select Date
                </label>
                <Calendar value={selectedDate} onChange={(e) => setSelectedDate(e.value)} showIcon />
            </div>

            {/* Main Content */}
            <div className="p-col-10 mt-10">
                {/* DataTable for room availability */}
                <DataTable value={rooms} responsiveLayout="scroll">
                    {/* Room Name Column */}
                    <Column field="name" header="Room Type" style={{ width: '35%' }} />

                    {/* Dynamic Date Columns */}
                    {dateRange.map((date, dateIndex) => (
                        <Column
                            key={dateIndex}
                            header={date}
                            body={(rowData, options) => {
                                const isAvailable = rowData.availability[date] || false;
                                return (
                                    <Button
                                        severity={isAvailable ? 'success' : 'danger'}
                                        icon={isAvailable ? 'pi pi-check' : 'pi pi-times'}
                                        onClick={() =>
                                            toggleAvailability(options.rowIndex, dateIndex)
                                        } // Toggle the availability
                                    />
                                );
                            }}
                        />
                    ))}
                </DataTable>
                <div className="justify-end flex">
                <Button label="Save" onClick={handleSubmit} className="mt-2" />
                </div>
            </div>
        </div>
    );
};
