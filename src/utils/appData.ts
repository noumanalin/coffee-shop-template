import { Truck, Coffee, Award, Table } from "lucide-react";
import type { CoffeMenu, MainSlider, NavbarLinks, ServicesItem, TestimonialClientsArray } from "./types";

import bannerImage1 from '../assets/main-banner-1.jpg'
import bannerImage2 from '../assets/main-banner-2.jpg'

import serviceImage1 from '../assets/service-1.jpg'
import serviceImage2 from '../assets/service-2.jpg'
import serviceImage3 from '../assets/service-3.jpg'
import serviceImage4 from '../assets/service-4.jpg'

import coffeeMenu1 from '../assets/menu-1.jpg'
import coffeeMenu2 from '../assets/menu-2.jpg'
import coffeeMenu3 from '../assets/menu-3.jpg'

import client1Image from '../assets/testimonial-1.jpg'
import client2Image from '../assets/testimonial-2.jpg'
import client3Image from '../assets/testimonial-3.jpg'
import client4Image from '../assets/testimonial-4.jpg'


export const navbarLinks: NavbarLinks[] = [
    { name: "Home", href: "/" },
    { name: "about", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Menu", href: "/menu" },
    {
        name: "Pages", href: "/#testimonial", dropDown: [
            { name: "reservation", href: "/#testimonial" },
            { name: "testimonial", href: "/#testimonial" },
        ]
    },
    { name: "Contact", href: "contact" },
]


export const mainSlider: MainSlider[] = [
    { title: "we have been serving", item: "coffe", subTitle: "since 1950", image: bannerImage1 },
    { title: "we have been serving", item: "coffe", subTitle: "since 1950", image: bannerImage2 },
    { title: "we have been serving", item: "coffe", subTitle: "since 1950", image: bannerImage1 },
    { title: "we have been serving", item: "coffe", subTitle: "since 1950", image: bannerImage2 },
]

export const servicesItems: ServicesItem[] = [
    { name: "fastest door delivery", description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor", icon: Truck, image: serviceImage1 },
    { name: "Fresh Coffee Beans", description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor", icon: Coffee, image: serviceImage2 },
    { name: "Best Quality Coffee", description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor", icon: Award, image: serviceImage3 },
    { name: "Online Table Booking", description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor", icon: Table, image: serviceImage4 },
]



export const hotCoffees: CoffeMenu[] = [
    { name: "Black Coffee", price: 5, image: coffeeMenu1, description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor" },
    { name: "Chocolete Coffee", price: 7, image: coffeeMenu2, description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor" },
    { name: "Coffee with Milk", price: 9, image: coffeeMenu3, description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor" },
]

export const coldCoffees: CoffeMenu[] = [
    { name: "Black Coffee", price: 5, image: coffeeMenu1, description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor" },
    { name: "Chocolete Coffee", price: 7, image: coffeeMenu2, description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor" },
    { name: "Coffee with Milk", price: 9, image: coffeeMenu3, description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor" },
]


export const testimonialClientsArray: TestimonialClientsArray[] = [
    { name: 'Client Name', profession: "profession", image: client1Image, message: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor termpor ipsum ipsum sanct cita" },
    { name: 'Client Name', profession: "profession", image: client2Image, message: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor termpor ipsum ipsum sanct cita" },
    { name: 'Client Name', profession: "profession", image: client3Image, message: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor termpor ipsum ipsum sanct cita" },
    { name: 'Client Name', profession: "profession", image: client4Image, message: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor termpor ipsum ipsum sanct cita" },
    { name: 'Client Name', profession: "profession", image: client2Image, message: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor termpor ipsum ipsum sanct cita" },
    { name: 'Client Name', profession: "profession", image: client3Image, message: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor termpor ipsum ipsum sanct cita" },
]