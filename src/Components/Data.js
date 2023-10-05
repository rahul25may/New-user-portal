// Demo data is taken from this file

import image1 from '../images/Salons/image1.jpg'
import image2 from '../images/Salons/image2.jpg'
import image3 from '../images/Salons/image3.jpg'
import image4 from '../images/Salons/image4.jpg'
import image5 from '../images/Salons/image5.jpg'
import image6 from '../images/Salons/image6.jpg'

export var BookingDetails = [
    { Date: "June 11", BookingID: "123455", SalonId: "1", SalonName: "1110100", Location: "HYD", SlotDetails: "4 july", Services: "Haircut, Pedicure", Pricing: "₹300", Status: "Booked" },
    { Date: "June 11", BookingID: "234344", SalonId: "2", SalonName: "1110100", Location: "HYD", SlotDetails: "5 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 12", BookingID: "343243", SalonId: "3", SalonName: "1110100", Location: "HYD", SlotDetails: "6 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 12", BookingID: "145452", SalonId: "4", SalonName: "1110100", Location: "HYD", SlotDetails: "1 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 12", BookingID: "145455", SalonId: "5", SalonName: "1110100", Location: "HYD", SlotDetails: "1 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 13", BookingID: "875165", SalonId: "6", SalonName: "1110100", Location: "HYD", SlotDetails: "2 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 13", BookingID: "741555", SalonId: "7", SalonName: "1110100", Location: "HYD", SlotDetails: "6 july", Services: "Haircut", Pricing: "₹300", Status: "Cancelled" },
    { Date: "June 13", BookingID: "586588", SalonId: "8", SalonName: "1110100", Location: "HYD", SlotDetails: "4 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 14", BookingID: "155385", SalonId: "9", SalonName: "1110100", Location: "HYD", SlotDetails: "5 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 14", BookingID: "258961", SalonId: "10", SalonName: "1110100", Location: "HYD", SlotDetails: "6 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 14", BookingID: "456258", SalonId: "11", SalonName: "1110100", Location: "HYD", SlotDetails: "1 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 14", BookingID: "159357", SalonId: "12", SalonName: "1110100", Location: "HYD", SlotDetails: "2 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 15", BookingID: "586324", SalonId: "13", SalonName: "1110100", Location: "HYD", SlotDetails: "6 july", Services: "Haircut", Pricing: "₹300", Status: "Cancelled" },
    { Date: "June 15", BookingID: "586214", SalonId: "14", SalonName: "1110100", Location: "HYD", SlotDetails: "4 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 15", BookingID: "587426", SalonId: "15", SalonName: "1110100", Location: "HYD", SlotDetails: "5 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 15", BookingID: "854925", SalonId: "16", SalonName: "1110100", Location: "HYD", SlotDetails: "6 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 16", BookingID: "478562", SalonId: "17", SalonName: "1110100", Location: "HYD", SlotDetails: "1 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 17", BookingID: "585151", SalonId: "18", SalonName: "1110100", Location: "HYD", SlotDetails: "2 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 17", BookingID: "475148", SalonId: "19", SalonName: "1110100", Location: "HYD", SlotDetails: "6 july", Services: "Haircut", Pricing: "₹300", Status: "Cancelled" },
    { Date: "June 18", BookingID: "475145", SalonId: "20", SalonName: "1110100", Location: "HYD", SlotDetails: "4 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 18", BookingID: "486524", SalonId: "21", SalonName: "1110100", Location: "HYD", SlotDetails: "5 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 18", BookingID: "852151", SalonId: "22", SalonName: "1110100", Location: "HYD", SlotDetails: "6 july", Services: "Haircut", Pricing: "₹300", Status: "Booked" },
    { Date: "June 18", BookingID: "258722", SalonId: "23", SalonName: "1110100", Location: "HYD", SlotDetails: "1 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 19", BookingID: "786248", SalonId: "24", SalonName: "1110100", Location: "HYD", SlotDetails: "2 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
    { Date: "June 20", BookingID: "892456", SalonId: "25", SalonName: "1110100", Location: "HYD", SlotDetails: "6 july", Services: "Haircut", Pricing: "₹300", Status: "Completed" },
];

export const userDetails = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
};

export let cardData = [
    {
        id: 1,
        content: 'Salon Koniki - Best Hair & Beauty Salon',
        imageSrc: [image1, image2, image3, image4, image5],
        Location: 'Nijampet',
        address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081",
        distance: '1.2 KM',
        ratings: 4.5,
        NoR: 260,
        services: [{ ServiceName: 'Pedicure', DiscountedPrice: 150, OriginalPrice: 200 }, { ServiceName: 'Haircut', DiscountedPrice: 200, OriginalPrice: 90 }, { ServiceName: 'Manicure', DiscountedPrice: 200, OriginalPrice: 90 }, { ServiceName: 'fhduibfi', DiscountedPrice: 150, OriginalPrice: 200 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Haircut'] }],
        reviewData: [
            { id: 1, user: 'John Doe', rating: 4, review: 'Great service and friendly staff!' },
            { id: 2, user: 'Jane Smith', rating: 5, review: 'Amazing experience! Highly recommended!' },
            { id: 3, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 4, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 5, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 6, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 7, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 8, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
        ],
        description: `How the premium services has provided ?
        Face wash
        Hair color hboiro3 2yr4vu44v h4jfbh4bhbbbbb  bbbbbbbbbbbbbb bbbbbbbbb bbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbb bbbbbb bbbbbbbbbbbbui lbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbb bbbbbb bbbbbbbbbbbbb bbbbbb bbbbbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbb bbbbbbbbbbbbbb bbbbbbb
        `,
        blockedDates: ['03/08/2023', '04/08/2023']
    },
    {
        id: 2,
        reviewData: [
            { id: 1, user: 'John Doe', rating: 4, review: 'Great service and friendly staff!' },
            { id: 2, user: 'Jane Smith', rating: 5, review: 'Amazing experience! Highly recommended!' },
            { id: 3, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 4, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 5, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 6, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 7, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 8, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
            { id: 9, user: 'Alice Johnson', rating: 3, review: 'Good, but could be better.' },
        ], content: 'Looks Salon', imageSrc: [image2, image3], Location: 'Gachibowli', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 100, OriginalPrice: 100 }, { ServiceName: 'Pedicure', DiscountedPrice: 150, OriginalPrice: 150 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }]
    },
    { id: 3, content: 'Card 2', imageSrc: [image3], Location: 'Madhapur', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 300, OriginalPrice: 400 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 4, content: 'Card 2', imageSrc: [image4], Location: 'Hi-tech city', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 500, OriginalPrice: 700 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 5, content: 'Card 2', imageSrc: [image5], Location: 'Mehadhipatnam', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 200, OriginalPrice: 300 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 6, content: 'Card 2', imageSrc: [image5], Location: 'Mehadhipatnam', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 100, OriginalPrice: 200 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 7, content: 'Salon Koniki - Best Hair & Beauty Salon', imageSrc: [image1, image2], Location: 'Nijampet', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: '1.2 KM', ratings: 4.5, NoR: 260, services: [{ ServiceName: 'Pedicure', DiscountedPrice: 150, OriginalPrice: 200 }, { ServiceName: 'Haircut', DiscountedPrice: 150, OriginalPrice: 200 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 8, content: 'Card 2', imageSrc: [image2, image3], Location: 'Gachibowli', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 100, OriginalPrice: 100 }, { ServiceName: 'Pedicure', DiscountedPrice: 150, OriginalPrice: 200 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 9, content: 'Card 2', imageSrc: [image3], Location: 'Madhapur', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 300, OriginalPrice: 400 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 10, content: 'Card 2', imageSrc: [image4], Location: 'Hi-tech city', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 500, OriginalPrice: 600 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }, { ComboName: 'Combo2', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 11, content: 'Card 2', imageSrc: [image5], Location: 'Mehadhipatnam', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 200, OriginalPrice: 400 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 12, content: 'Card 2', imageSrc: [image5], Location: 'Mehadhipatnam', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 100, OriginalPrice: 105 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 13, content: 'Salon Koniki - Best Hair & Beauty Salon', imageSrc: [image1, image2], Location: 'Nijampet', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: '1.2 KM', ratings: 4.5, NoR: 260, services: [{ ServiceName: 'Pedicure', DiscountedPrice: 150, OriginalPrice: 300 }, { ServiceName: 'Haircut', DiscountedPrice: 150, OriginalPrice: 500 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 14, content: 'Card 2', imageSrc: [image2, image3], Location: 'Gachibowli', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 100, OriginalPrice: 100 }, { ServiceName: 'Pedicure', DiscountedPrice: 150, OriginalPrice: 500 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Haircut', 'Pedicure'] }] },
    { id: 15, content: 'Card 15', imageSrc: [image3], Location: 'Madhapur', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 300, OriginalPrice: 400 }], Combos: [{ ComboName: 'Combo1', ComboPrice: 1000, ComboServices: ['Manicure', 'Pedicure'] }] },
    { id: 16, content: 'Card 16', imageSrc: [image4], Location: 'Hi-tech city', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 500, OriginalPrice: 700 }] },
    { id: 17, content: 'Card 17', imageSrc: [image5], Location: 'Mehadhipatnam', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 200, OriginalPrice: 400 }] },
    { id: 18, content: 'Card 18', imageSrc: [image5], Location: 'Mehadhipatnam', address: "Jubilee Enclave, Opp Hitex Arch, Madhapur, Telangana 500081", distance: "2 KM", DiscountedPrice: 150, OriginalPrice: 100, ratings: 4.2, NoR: 260, services: [{ ServiceName: 'Manicure', DiscountedPrice: 100, OriginalPrice: 200 }] },
];

export const wishlistItems = [
    { ID: "1", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "2", SalonId: "1", SalonName: "Raj Salon and Spa", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "3", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "4", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "5", SalonId: "1", SalonName: "Raj Salon and Spa", "Location": "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "6", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "7", SalonId: "1", SalonName: "Raj Salon and Spa", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "8", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "9", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "10", SalonId: "1", SalonName: "Raj Salon and Spa", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "11", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "12", SalonId: "1", SalonName: "Raj Salon and Spa", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "13", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "14", SalonId: "1", SalonName: "Raj Salon and Spa", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "15", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "16", SalonId: "1", SalonName: "Raj Salon and Spa", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "17", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "18", SalonId: "1", SalonName: "Looks Salon", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" },
    { ID: "19", SalonId: "1", SalonName: "Raj Salon and Spa", Location: "13, X' Road, above Medplus Medicals, near Anand Nagar, Bandlaguda, Nagole, Hyderabad, Telangana 500068" }
];