//import Compressor from 'compressorjs';
import secureLocalStorage from "react-secure-storage";
import CryptoJS from "crypto-js";

export function isVallidImageFile(image) {
    let imgType = image.type;
    let fileType = imgType.split('/')[0];
    return (fileType === 'image') ? true : false;
}

export async function getImageUrl(image, callback) {
    let validImage = isVallidImageFile(image);
    if (validImage) {

        const reader = new FileReader();

        reader.onload = () => {
            callback(reader.result);
        };
        reader.readAsDataURL(image);
    }
    else {
        alert('Please Select Valid Image File');
    }
}
export async function handleImage(file) {
    console.log(file)
    var handleImage = new File([file], {
        type: file.type,
    })
    return handleImage;

}

export const getCurrencyOptions = () => {
    return [
        { value: 'INR', label: 'INR (₹)' },
        { value: 'USD', label: 'USD ($)' },
        { value: 'GBP', label: 'GBP (£)' },
    ];
};

export const getModules = () => {
    return {
        users: true,
        groups: true,
        workouts: true,
        invitees: true,
        products: false,
        media: true,
        team: true,
        geomessages: true,
    }
};

export function isVallidFile(file) {
    let imgType = file.type;
    let fileType = imgType.split('/')[0];
    return (fileType === 'image' || fileType === 'video' || fileType === 'audio') ? true : false;
}

export async function getFileUrl(file, callback) {
    let validFile = isVallidFile(file);
    if (validFile) {

        const reader = new FileReader();

        reader.onload = () => {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    }
    else {
        alert('Please Select Valid File');
    }
}

/*export async function handleCompressImage(file) {

    return new Promise((resolve, reject) => {
        const fileType = file.type.split('/')[0];

        if (fileType === 'image') {
            new Compressor(file, {
                quality: 0.6,
                maxHeight: 500,
                maxWidth: 500,
                success(result) {
                    var compressedImage = new File([result], 'compressed-image', {
                        type: result.type,
                    })
                    resolve(compressedImage);
                },
                error(err) {
                    console.log(err.message);
                    reject(err);
                }
            })
        } else if (fileType === 'video' || fileType === 'audio') {
            resolve(file);
        } else {
            reject(new Error('The file is not a valid image or video.'));
        }
    })
}*/

export function logedInUserId() {
    const userData = secureLocalStorage.getItem('userData');
    if (userData) {
        const parsedUserData = (userData) ? JSON.parse(userData).userId : "0";
        return parsedUserData;
    } else {
        const adminData = JSON.parse(secureLocalStorage.getItem('adminData'));
        const parsedAdminData = (adminData) ? JSON.parse(adminData).userId : "0";
        return parsedAdminData;
    }
}

export function logedInUser() {
    const userData = JSON.parse(secureLocalStorage.getItem('userData'));
    if (userData) {
        return userData;
    } else {
        const adminData = JSON.parse(secureLocalStorage.getItem('adminData'));
        return adminData;
    }
}

export function encryptData(string) {
    const ciphertext = CryptoJS.AES.encrypt(string.trim(), 'p80%n!*_2u$2y');

    return ciphertext;
}

export function decryptData(string) {
    const decryptData = CryptoJS.AES.decrypt(string, 'p80%n!*_2u$2y');
    const decipherText = decryptData.toString(CryptoJS.enc.Utf8);

    return decipherText
}

class Helper {
    static isAuthenticated() {
        let loggedInuser = secureLocalStorage.getItem("login");

        if (loggedInuser) {
            return true;
        } else {
            return false;
        }
    }

    static arrayToString(arr) {
        let str = '';
        arr.forEach(function (i, index) {
            str += i;
            if (index !== (arr.length - 1)) {
                str += '';
            };
        });
        return str;
    }


    static formatDateTime(timestamp) {
        // Check if the timestamp is valid 
        if (!timestamp || typeof timestamp.seconds !== 'number' || typeof timestamp.nanoseconds !== 'number') {
            throw new Error("Invalid timestamp object");
        }

        // Convert the timestamp into milliseconds
        const milliseconds = timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000);

        // Create a Date object from the milliseconds
        const date = new Date(milliseconds);

        // Verify that the Date object is valid
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date created from timestamp");
        }

        // Format the date
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        const formattedDate = day + " " + month + ", " + year;

        // Format the time
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;

        // Return the formatted date and time
        return formattedDate + " at " + strTime;
    }

    static formatDt(dt) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });

        const date = new Date(dt);
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        var formattedDate = day + " " + month + " " + year;

        return formattedDate;
    }

    static formatTime(dt) {
        //const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });

        const date = new Date(dt);
        //const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        return strTime;
    }

    static formatDateTimeline(dt) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit' });

        const date = new Date(dt);
        const [{ value: month }, , { value: day },] = dateTimeFormat.formatToParts(date);
        var formattedDate = day + " " + month;

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        return formattedDate + ", " + strTime;
    }

    static formatDate(dt) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });

        const date = new Date(dt);
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        var formattedDate = day + " " + month + ", " + year;

        return formattedDate
    }

    static formatDateToSave(dt) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' });

        const date = new Date(dt);
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        var formattedDate = year + "-" + month + "-" + day;

        return formattedDate
    }

    static generateRandomString = (length) => {
        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    static generateRandomDigits(length) {
        var result = '';
        var digits = '0123456789';
        var digitsLength = digits.length;

        for (var i = 0; i < length; i++) {
            result += digits.charAt(Math.floor(Math.random() * digitsLength));
        }

        return result;
    }

    static formatNumber(num) {
        var formattedNumber = 0;

        if (num > 999 && num < 1000000) {
            formattedNumber = (parseFloat(num / 1000)).toFixed(2) + 'K';
        } else if (num > 1000000) {
            formattedNumber = parseFloat(num / 1000000).toFixed(2) + 'M';
        } else if (num < 1000) {
            formattedNumber = num;
        }

        return formattedNumber;
    }

    static Logout() {
        sessionStorage.clear();
        localStorage.clear();
    }

    static removeHtmlFromString(htmlString, wordLength) {
        const length = wordLength || 10;
        const string = htmlString.replace(/&#?[a-z0-9]+;|<([^>]+)>/ig, ' ').replace(/\s\s+/g, ' ');
        const words = string.split(' ');
        const newString = words.length > length
            ? `${words.slice(0, length).join(' ')}...`
            : string;

        return newString;
    }
}

export default Helper;