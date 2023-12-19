import { Dimensions } from "react-native";

export const BASE_URL : String = 'https://web-dev.dev.kimo.ai/v1/'

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const END_POINTS = {
    HIGHLIGHTS : 'highlights',
    ACTIVITIES : 'activities',
    CATEGORIES : 'categories'
}

export const TRAVEL_GUIDE = "Travel Guide"
export const BOOK_A_TRIP = "Book a trip"
