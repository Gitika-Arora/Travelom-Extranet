const listData = {
    hotels: [
        {
            id: 1,
            name: "Taj",
            city: "Ahmedabad",
            owner: "Ratan Tata",
            phone: "+911234567891"
        },
        {
            id: 2,
            name: "Novotel",
            city: "Delhi",
            owner: "John",
            phone: "+911234567892"
        },
        {
            id: 3,
            name: "Merriot",
            city: "Mumbai",
            owner: "Mike",
            phone: "+911234567893"
        },

        {
            id: 4,
            name: "Raddison",
            city: "Ahmedabad",
            owner: "Json",
            phone: "+911234567894"
        },
        {
            id: 5,
            name: "Hyatt",
            city: "Bangalore",
            owner: "Riley",
            phone: "+911234567895"
        }
    ],

    availability: [{
        id: 1,
        room: "Standard",
        "03/10/2024": true,
        "04/10/2024": false,
        "05/10/2024": false,
        "06/10/2024": false,
        "07/10/2024": true,
        "08/10/2024": true,
        "09/10/2024": false,
        "10/10/2024": true,
        "11/10/2024": true,
    }, {
        id: 2,
        room: "Delux",
        "03/10/2024": true,
        "04/10/2024": true,
        "05/10/2024": false,
        "06/10/2024": false,
        "07/10/2024": true,
        "08/10/2024": false,
        "09/10/2024": true,
        "10/10/2024": false,
        "11/10/2024": true,
    }],

    hotelDetails: {
        images: [
            "https://media.iceportal.com/101603/photos/61796754_XL.jpg",
            "https://media.iceportal.com/101603/photos/62560586_XL.jpg",
            "https://media.iceportal.com/101603/photos/61796974_XL.jpg",
            "https://media.iceportal.com/101603/photos/61796834_XL.jpg",
            "https://media.iceportal.com/101603/photos/61796812_XL.jpg",
        ],
        overview: "Behind every great day is a great night at the Quality Inn Stephens City-Winchester South hotel in Stephens City, VA. Our pet-friendly hotel is near attractions like Shenandoah University, Belle Grove Plantation, Skyline Caverns Cave Tour, Skyline Drive, Cedar Creek and Belle Grove National Historical Park. Take advantage of our free WiFi, free hot and grab n go breakfast, fitness center, outdoor pool, guest laundry facilities and free coffee. Guest rooms include hair dryers, coffee makers, irons and ironing boards. Also, earn rewards including free nights and gift cards with our Choice Privileges Rewards program.",
        amenities: [
            { id: 1, name: "Complimentary buffet breakfast" },
            { id: 2, name: "Racquetball" },
            { id: 3, name: "Tennis court" },
            { id: 4, name: "Jogging track" },
            { id: 5, name: "Complimentary newspaper in lobby" },
            { id: 6, name: "Horseback riding" },
            { id: 7, name: "Health club" },
        ],
        address: "167 Town Run Lane,22655,Stephens City",
        rooms: [
            { id: 1, name: "King" },
            { id: 3, name: "Double" },
        ],
        explore: [
            { id: 1, attractionName: "Dulles Intl Arpt", distance: "75.00" },
            { id: 2, attractionName: "National Arpt", distance: "90.00" },
            { id: 3, attractionName: "Balt./Wash. Int'l. Arpt.", distance: "110.00" },
            { id: 4, attractionName: "Winchester Park and Rec.", distance: "9.00" },
        ]
    },
    staticData: {
        amenities: [
            { id: 1, name: "Complimentary buffet breakfast" },
            { id: 2, name: "Racquetball" },
            { id: 3, name: "Tennis court" },
            { id: 4, name: "Jogging track" },
            { id: 5, name: "Complimentary newspaper in lobby" },
            { id: 6, name: "Horseback riding" },
            { id: 7, name: "Health club" },
            { id: 8, name: "Golf" },
            { id: 9, name: "Complimentary continental breakfast" },
            { id: 10, name: "Pets allowed" },
        ],
        rooms: [
            { id: 1, name: "King" },
            { id: 2, name: "Deluxe" },
            { id: 3, name: "Double" },
            { id: 4, name: "Standard" },
        ],
        explore: [
            { id: 1, attractionName: "Dulles Intl Arpt", distance: "75.00" },
            { id: 2, attractionName: "National Arpt", distance: "90.00" },
            { id: 3, attractionName: "Balt./Wash. Int'l. Arpt.", distance: "110.00" },
            { id: 4, attractionName: "Winchester Park and Rec.", distance: "9.00" },
            { id: 5, attractionName: "Stonewall Jacksons Hdqters.", distance: "10.00" },
            { id: 6, attractionName: "Skyline Drive", distance: "20.00" },
            { id: 7, attractionName: "Martinsburg Outlet", distance: "35.00" },
        ]
    }
}
export default listData;